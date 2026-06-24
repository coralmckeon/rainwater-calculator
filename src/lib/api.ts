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

  const monthlyTotals: number[] = new Array(12).fill(0);
  const monthlyCounts: number[] = new Array(12).fill(0);

  for (let i = 0; i < daily.time.length; i++) {
    const date = daily.time[i];
    const precip = daily.precipitation_sum[i];
    if (precip !== null && precip !== undefined) {
      const month = parseInt(date.split("-")[1], 10) - 1;
      monthlyTotals[month] += precip;
      monthlyCounts[month]++;
    }
  }

  const MM_TO_INCHES = 1 / 25.4;
  const NUM_YEARS = 30;

  const monthlyAverages = monthlyTotals.map((total, i) => {
    if (monthlyCounts[i] === 0) return 0;
    const avgMonthlyMm = total / NUM_YEARS;
    return Math.round(avgMonthlyMm * MM_TO_INCHES * 100) / 100;
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
