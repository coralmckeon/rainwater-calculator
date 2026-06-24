import { NextRequest, NextResponse } from "next/server";

interface DailyData {
  time: string[];
  precipitation_sum: (number | null)[];
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  if (!lat || !lng) {
    return NextResponse.json(
      { error: "lat and lng parameters are required" },
      { status: 400 }
    );
  }

  try {
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

    // Aggregate by month: accumulate total precipitation per month, count days
    const monthlyTotals: number[] = new Array(12).fill(0);
    const monthlyCounts: number[] = new Array(12).fill(0);

    for (let i = 0; i < daily.time.length; i++) {
      const date = daily.time[i];
      const precip = daily.precipitation_sum[i];
      if (precip !== null && precip !== undefined) {
        const month = parseInt(date.split("-")[1], 10) - 1; // 0-indexed
        monthlyTotals[month] += precip;
        monthlyCounts[month]++;
      }
    }

    // Calculate average monthly precipitation in inches
    // Each month's total across all years / number of years (30)
    // Then convert mm to inches
    const MM_TO_INCHES = 1 / 25.4;
    const NUM_YEARS = 30;

    const monthlyAverages = monthlyTotals.map((total, i) => {
      if (monthlyCounts[i] === 0) return 0;
      // total is the sum of all daily precip for this month across all years (in mm)
      // Divide by number of years to get average monthly total, then convert to inches
      const avgMonthlyMm = total / NUM_YEARS;
      return Math.round(avgMonthlyMm * MM_TO_INCHES * 100) / 100;
    });

    const annualAverage =
      Math.round(
        monthlyAverages.reduce((sum, val) => sum + val, 0) * 100
      ) / 100;

    return NextResponse.json({
      monthlyAverages,
      annualAverage,
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      dataYears: `${startDate.split("-")[0]}-${endDate.split("-")[0]}`,
    });
  } catch (error) {
    console.error("Rainfall data error:", error);
    return NextResponse.json(
      { error: "Failed to fetch rainfall data" },
      { status: 500 }
    );
  }
}
