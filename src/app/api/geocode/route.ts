import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const address = searchParams.get("address");

  if (!address) {
    return NextResponse.json(
      { error: "Address parameter is required" },
      { status: 400 }
    );
  }

  try {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      address
    )}&format=json&countrycodes=us&limit=5&addressdetails=1`;

    const response = await fetch(url, {
      headers: {
        "User-Agent": "RainwaterHarvestingCalculator/1.0",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Nominatim API error: ${response.status}`);
    }

    const data = await response.json();

    const results = data.map(
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

    return NextResponse.json(results);
  } catch (error) {
    console.error("Geocoding error:", error);
    return NextResponse.json(
      { error: "Failed to geocode address" },
      { status: 500 }
    );
  }
}
