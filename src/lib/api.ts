// Client-side API utilities — call Open-Meteo and Nominatim directly (both support CORS)

interface DailyData {
  time: string[];
  precipitation_sum: (number | null)[];
}

export interface RainfallData {
  monthlyAverages: number[];
  annualAverage: number;
  months: string[];
  dataYears: string;
}

export interface GeoResult {
  displayName: string;
  lat: number;
  lng: number;
  state: string;
  city: string;
  county: string;
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export async function fetchRainfall(lat: number, lng: number): Promise<RainfallData> {
  const startDate = "1994-01-01";
  const endDate = "2023-12-31";
  const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lng}&start_date=${startDate}&end_date=${endDate}&daily=precipitation_sum&timezone=America%2FChicago`;

  const response = await fetch(url, {
    signal: AbortSignal.timeout(30000),
  });

  if (!response.ok) {
    throw new Error(`Open-Meteo API error: ${response.status}`);
  }

  const data = await response.json();
  const daily: DailyData = data.daily;

  // Group precipitation by year and month to compute medians
  // monthlyByYear[month][year] = total mm for that month/year
  const monthlyByYear: Map<number, Map<number, number>> = new Map();
  for (let m = 0; m < 12; m++) {
    monthlyByYear.set(m, new Map());
  }

  for (let i = 0; i < daily.time.length; i++) {
    const date = daily.time[i];
    const precip = daily.precipitation_sum[i];
    if (precip !== null && precip !== undefined) {
      const parts = date.split("-");
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const yearMap = monthlyByYear.get(month)!;
      yearMap.set(year, (yearMap.get(year) || 0) + precip);
    }
  }

  const MM_TO_INCHES = 1 / 25.4;

  function median(values: number[]): number {
    if (values.length === 0) return 0;
    const sorted = [...values].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0
      ? sorted[mid]
      : (sorted[mid - 1] + sorted[mid]) / 2;
  }

  // For each month, take the median of the 30 yearly totals
  const monthlyAverages = Array.from({ length: 12 }, (_, m) => {
    const yearMap = monthlyByYear.get(m)!;
    const yearlyTotals = Array.from(yearMap.values());
    if (yearlyTotals.length === 0) return 0;
    const medianMm = median(yearlyTotals);
    return Math.round(medianMm * MM_TO_INCHES * 100) / 100;
  });

  const annualAverage =
    Math.round(monthlyAverages.reduce((sum, val) => sum + val, 0) * 100) / 100;

  return {
    monthlyAverages,
    annualAverage,
    months: MONTHS,
    dataYears: `${startDate.split("-")[0]}-${endDate.split("-")[0]}`,
  };
}

export async function geocodeAddress(address: string): Promise<GeoResult[]> {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
    address
  )}&format=json&countrycodes=us&limit=5&addressdetails=1`;

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Nominatim API error: ${response.status}`);
  }

  const data = await response.json();

  return data.map(
    (item: {
      display_name: string;
      lat: string;
      lon: string;
      address?: {
        state?: string;
        city?: string;
        town?: string;
        village?: string;
        county?: string;
      };
    }) => ({
      displayName: item.display_name,
      lat: parseFloat(item.lat),
      lng: parseFloat(item.lon),
      state: item.address?.state || "",
      city:
        item.address?.city ||
        item.address?.town ||
        item.address?.village ||
        "",
      county: item.address?.county || "",
    })
  );
}

export async function reverseGeocode(lat: number, lng: number): Promise<GeoResult[]> {
  const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&addressdetails=1`;

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Nominatim reverse geocode error: ${response.status}`);
  }

  const item = await response.json();

  return [
    {
      displayName: item.display_name,
      lat: parseFloat(item.lat),
      lng: parseFloat(item.lon),
      state: item.address?.state || "",
      city:
        item.address?.city ||
        item.address?.town ||
        item.address?.village ||
        "",
      county: item.address?.county || "",
    },
  ];
}
