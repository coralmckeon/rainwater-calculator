"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import AddressInput from "@/components/AddressInput";
import PropertyForm from "@/components/PropertyForm";
import ResultsDashboard from "@/components/ResultsDashboard";
import StepIndicator from "@/components/StepIndicator";
import { fetchRainfall, reverseGeocode } from "@/lib/api";

const USMap = dynamic(() => import("@/components/USMap"), { ssr: false });

interface GeoResult {
  displayName: string;
  lat: number;
  lng: number;
  state: string;
  city: string;
  county: string;
}

interface RainfallData {
  monthlyAverages: number[];
  annualAverage: number;
  months: string[];
  dataYears: string;
}

interface PropertyData {
  roofArea: number;
  roofType: "metal" | "tile" | "asphalt" | "flat";
  householdSize: number;
  dailyWaterUse: number;
}

const steps = [
  { label: "Location", description: "Find your property" },
  { label: "Property Details", description: "Enter home information" },
  { label: "Results", description: "View your analysis" },
];

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState<GeoResult | null>(
    null
  );
  const [showMap, setShowMap] = useState(false);
  const [rainfallData, setRainfallData] = useState<RainfallData | null>(null);
  const [isLoadingRainfall, setIsLoadingRainfall] = useState(false);
  const [rainfallError, setRainfallError] = useState<string | null>(null);
  const [propertyData, setPropertyData] = useState<PropertyData>({
    roofArea: 1500,
    roofType: "asphalt",
    householdSize: 4,
    dailyWaterUse: 80,
  });

  const fetchRainfallData = useCallback(async (lat: number, lng: number) => {
    setIsLoadingRainfall(true);
    setRainfallError(null);
    try {
      const data = await fetchRainfall(lat, lng);
      setRainfallData(data);
    } catch (error) {
      console.error("Rainfall fetch error:", error);
      setRainfallError(
        "Unable to fetch rainfall data for this location. Please try again."
      );
    } finally {
      setIsLoadingRainfall(false);
    }
  }, []);

  const handleLocationSelect = (location: GeoResult) => {
    setSelectedLocation(location);
    fetchRainfallData(location.lat, location.lng);
  };

  const handleMapClick = async (lat: number, lng: number) => {
    try {
      const results = await reverseGeocode(lat, lng);
      if (results.length > 0) {
        setSelectedLocation(results[0]);
        fetchRainfallData(lat, lng);
      } else {
        setSelectedLocation({
          displayName: `${lat.toFixed(4)}, ${lng.toFixed(4)}`,
          lat,
          lng,
          state: "",
          city: "",
          county: "",
        });
        fetchRainfallData(lat, lng);
      }
    } catch (error) {
      console.error("Reverse geocode error:", error);
      setSelectedLocation({
        displayName: `${lat.toFixed(4)}, ${lng.toFixed(4)}`,
        lat,
        lng,
        state: "",
        city: "",
        county: "",
      });
      fetchRainfallData(lat, lng);
    }
  };

  const canProceedToStep2 = selectedLocation !== null && !isLoadingRainfall;
  const canProceedToStep3 =
    propertyData.roofArea > 0 &&
    propertyData.householdSize > 0 &&
    propertyData.dailyWaterUse > 0 &&
    rainfallData !== null;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 sm:pt-24 sm:pb-14">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-foreground">
              What&apos;s Your Rainwater Harvesting Potential?
            </h1>
            <p className="text-lg sm:text-xl text-muted mb-4">
              Use localized rainfall history to estimate capture and find a
              tank size that fits your demands.
            </p>
            <p className="text-sm font-medium text-primary">
              Free to use. Built from 30 years of US rainfall records.
            </p>
          </div>
        </div>
      </section>

      {/* 3-Step Explainer */}
      <section id="how-it-works" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#eef4f6] rounded-3xl p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-8 lg:gap-12 items-center">
              {/* Left panel */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Get started in 3 simple steps
                </h2>
                <p className="text-muted mb-8">
                  Pinpoint your property, tell us about your roof and water
                  use, and get a localized estimate of how much rainwater you
                  can capture and store.
                </p>
                <a
                  href="#calculator"
                  className="inline-block bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3 rounded-lg shadow-sm transition-colors text-lg"
                >
                  Begin Calculator
                </a>
              </div>

              {/* Right: step cards */}
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-5 flex items-start gap-4 shadow-sm">
                  <div className="shrink-0 w-12 h-12 bg-[#d7ede9] rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#1a7d6b]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      Find Your Location
                    </h3>
                    <p className="text-muted text-sm">
                      Enter any US address or click on the map. We pinpoint
                      your exact coordinates for the most accurate rainfall
                      data.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 flex items-start gap-4 shadow-sm">
                  <div className="shrink-0 w-12 h-12 bg-[#fbeccd] rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#d99311]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      Enter Property Details
                    </h3>
                    <p className="text-muted text-sm">
                      Tell us about your roof size, material, household size,
                      and water usage. We use this to calculate your specific
                      potential.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 flex items-start gap-4 shadow-sm">
                  <div className="shrink-0 w-12 h-12 bg-[#dde7ec] rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#43677a]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      Review Your Results
                    </h3>
                    <p className="text-muted text-sm">
                      Get a detailed analysis including annual capture volume,
                      recommended tank size, monthly charts, and supply vs.
                      demand breakdown.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 bg-[#f7fafb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-2">
            Rainwater Harvesting Calculator
          </h2>
          <p className="text-center text-muted mb-8">
            Follow the steps below to calculate your potential.
          </p>

          <StepIndicator currentStep={currentStep} steps={steps} />

          {/* Step 1: Location */}
          {currentStep === 0 && (
            <div className="bg-white border border-border rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Step 1: Find Your Location
              </h3>
              <p className="text-muted text-sm mb-6">
                Enter your address or city, or click on the map to select
                your location. We will use this to fetch 30 years of local
                rainfall data.
              </p>

              <AddressInput
                onLocationSelect={handleLocationSelect}
                selectedLocation={selectedLocation}
              />

              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => setShowMap(!showMap)}
                  className="text-primary hover:text-primary-dark font-medium text-sm flex items-center gap-1"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  {showMap ? "Hide Map" : "Or Select on Map"}
                </button>

                {showMap && (
                  <div className="mt-4">
                    <USMap
                      onLocationSelect={handleMapClick}
                      selectedPosition={
                        selectedLocation
                          ? [selectedLocation.lat, selectedLocation.lng]
                          : null
                      }
                    />
                    <p className="text-xs text-muted mt-2">
                      Click anywhere on the map to select a location.
                    </p>
                  </div>
                )}
              </div>

              {isLoadingRainfall && (
                <div className="mt-6 flex items-center gap-3 text-primary">
                  <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  <span className="text-sm">
                    Fetching 30 years of rainfall data...
                  </span>
                </div>
              )}

              {rainfallError && (
                <div className="mt-6 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-700">{rainfallError}</p>
                </div>
              )}

              {rainfallData && !isLoadingRainfall && (
                <div className="mt-6 p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <p className="text-sm text-emerald-700">
                    Rainfall data loaded. Median annual precipitation:{" "}
                    <strong>
                      {rainfallData.annualAverage.toFixed(2)} inches
                    </strong>{" "}
                    ({rainfallData.dataYears})
                  </p>
                </div>
              )}

              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  disabled={!canProceedToStep2}
                  className="bg-primary hover:bg-primary-dark disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium px-8 py-2.5 rounded-lg transition-colors"
                >
                  Next: Property Details
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Property Details */}
          {currentStep === 1 && (
            <div className="bg-white border border-border rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Step 2: Property Details
              </h3>
              <p className="text-muted text-sm mb-6">
                Enter your property information to calculate how much
                rainwater you can capture and how it compares to your water
                usage.
              </p>

              <PropertyForm data={propertyData} onChange={setPropertyData} />

              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(0)}
                  className="text-muted hover:text-foreground font-medium px-6 py-2.5 rounded-lg transition-colors border border-border hover:border-gray-300"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  disabled={!canProceedToStep3}
                  className="bg-primary hover:bg-primary-dark disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium px-8 py-2.5 rounded-lg transition-colors"
                >
                  Calculate Results
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Results */}
          {currentStep === 2 && rainfallData && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-foreground">
                  Your Rainwater Harvesting Analysis
                </h3>
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="text-muted hover:text-foreground font-medium px-4 py-2 rounded-lg transition-colors border border-border hover:border-gray-300 text-sm"
                >
                  Edit Details
                </button>
              </div>
              <ResultsDashboard
                rainfallData={rainfallData}
                propertyData={propertyData}
                locationName={
                  selectedLocation
                    ? `${
                        selectedLocation.city || selectedLocation.county
                      }${
                        selectedLocation.state
                          ? `, ${selectedLocation.state}`
                          : ""
                      }`
                    : "Unknown"
                }
              />
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Learn More About Rainwater Harvesting
          </h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Explore our educational resources to understand the benefits,
            regulations, and best practices for rainwater harvesting in your
            state.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/education/what"
              className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-2.5 rounded-lg transition-colors"
            >
              What is Rainwater Harvesting?
            </Link>
            <Link
              href="/regulations"
              className="border border-primary text-primary hover:bg-[#eef4f6] font-medium px-6 py-2.5 rounded-lg transition-colors"
            >
              View State Regulations
            </Link>
            <Link
              href="/resources"
              className="border border-border text-foreground hover:bg-gray-50 font-medium px-6 py-2.5 rounded-lg transition-colors"
            >
              Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
