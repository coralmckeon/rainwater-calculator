"use client";

import RainfallChart from "./RainfallChart";

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

interface ResultsDashboardProps {
  rainfallData: RainfallData;
  propertyData: PropertyData;
  locationName: string;
}

const GALLONS_PER_SQFT_PER_INCH = 0.623;
const roofEfficiency: Record<PropertyData["roofType"], number> = {
  metal: 0.95,
  tile: 0.9,
  asphalt: 0.85,
  flat: 0.65,
};

const DAYS_IN_MONTH = [31, 28.25, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export default function ResultsDashboard({
  rainfallData,
  propertyData,
  locationName,
}: ResultsDashboardProps) {
  const efficiency = roofEfficiency[propertyData.roofType];

  const monthlyCapture = rainfallData.monthlyAverages.map(
    (rainfall) =>
      propertyData.roofArea * rainfall * GALLONS_PER_SQFT_PER_INCH * efficiency
  );

  const annualCapture = monthlyCapture.reduce((sum, val) => sum + val, 0);

  const monthlyDemand = DAYS_IN_MONTH.map(
    (days) => days * propertyData.dailyWaterUse * propertyData.householdSize
  );

  const annualDemand = monthlyDemand.reduce((sum, val) => sum + val, 0);

  const avgMonthlyCapture = annualCapture / 12;
  const recommendedTankSize =
    Math.ceil((avgMonthlyCapture * 1.5) / 100) * 100;

  const selfSufficiencyPct = Math.min(
    100,
    Math.round((annualCapture / annualDemand) * 100)
  );

  const surplusMonths = monthlyCapture.filter(
    (cap, i) => cap >= monthlyDemand[i]
  ).length;

  // Conservative (firm) yield: water you can actually put to use each month,
  // capped by demand — captured rain beyond demand can't be used and overflows.
  const firmYield = monthlyCapture.reduce(
    (sum, cap, i) => sum + Math.min(cap, monthlyDemand[i]),
    0
  );

  const monthlyDemandAvg = annualDemand / 12;

  const roofTypeLabel =
    propertyData.roofType.charAt(0).toUpperCase() +
    propertyData.roofType.slice(1);

  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Annual Potential */}
        <div className="bg-[#e8f4fd] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-9 h-9 rounded-full bg-white/70 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-[#2b78c4]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z" />
              </svg>
            </div>
            <p className="text-xs font-semibold text-[#2b6aa3] uppercase tracking-wider">
              Annual Potential
            </p>
          </div>
          <p className="text-3xl font-bold text-[#16395c]">
            {Math.round(annualCapture).toLocaleString()}
          </p>
          <p className="text-sm text-[#2b6aa3] mt-1">gallons/year</p>
        </div>

        {/* Conservative Yield */}
        <div className="bg-[#e8fdf4] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-9 h-9 rounded-full bg-white/70 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-[#1a9e6f]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-xs font-semibold text-[#1a8a62] uppercase tracking-wider">
              Conservative Yield
            </p>
          </div>
          <p className="text-3xl font-bold text-[#0f4d37]">
            {Math.round(firmYield).toLocaleString()}
          </p>
          <p className="text-sm text-[#1a8a62] mt-1">usable gallons/year</p>
        </div>

        {/* Tank Size */}
        <div className="bg-[#f0e8fd] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-9 h-9 rounded-full bg-white/70 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-[#8455d6]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 8c0-1.66 3.13-3 7-3s7 1.34 7 3m-14 0c0 1.66 3.13 3 7 3s7-1.34 7-3m-14 0v8c0 1.66 3.13 3 7 3s7-1.34 7-3V8"
                />
              </svg>
            </div>
            <p className="text-xs font-semibold text-[#6f48b8] uppercase tracking-wider">
              Tank Size
            </p>
          </div>
          <p className="text-3xl font-bold text-[#3d2766]">
            {recommendedTankSize.toLocaleString()}
          </p>
          <p className="text-sm text-[#6f48b8] mt-1">gallons recommended</p>
        </div>
      </div>

      {/* Inputs + Interpretation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#f7fafb] border border-border rounded-xl p-6">
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">
            Your Inputs
          </p>
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Catchment area</dt>
              <dd className="font-semibold text-foreground">
                {propertyData.roofArea.toLocaleString()} sq ft
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Water demand</dt>
              <dd className="font-semibold text-foreground">
                {Math.round(monthlyDemandAvg).toLocaleString()} gal/mo
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Roof type</dt>
              <dd className="font-semibold text-foreground">
                {roofTypeLabel} ({Math.round(efficiency * 100)}%)
              </dd>
            </div>
          </dl>
        </div>

        <div className="bg-[#f7fafb] border border-border rounded-xl p-6">
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">
            What This Means
          </p>
          <p className="text-sm text-foreground leading-relaxed">
            In {locationName}, your roof could capture about{" "}
            <strong>{Math.round(annualCapture).toLocaleString()}</strong>{" "}
            gallons of rainwater a year. After matching that supply to your
            household demand, roughly{" "}
            <strong>{Math.round(firmYield).toLocaleString()}</strong> gallons
            are realistically usable — covering about{" "}
            <strong>{selfSufficiencyPct}%</strong> of your needs, with capture
            exceeding demand in {surplusMonths} of 12 months. A{" "}
            <strong>{recommendedTankSize.toLocaleString()}-gallon</strong> tank
            is a sensible starting size to smooth supply across the year.
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white border border-border rounded-xl p-6">
        <RainfallChart
          monthlyRainfall={rainfallData.monthlyAverages}
          monthlyCapture={monthlyCapture}
          monthlyDemand={monthlyDemand}
          months={rainfallData.months}
        />
      </div>

      {/* Supply vs Demand Table */}
      <div className="bg-white border border-border rounded-xl p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Monthly Supply vs. Demand Analysis
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 font-medium text-muted">
                  Month
                </th>
                <th className="text-right py-2 px-3 font-medium text-muted">
                  Rainfall (in)
                </th>
                <th className="text-right py-2 px-3 font-medium text-muted">
                  Captured (gal)
                </th>
                <th className="text-right py-2 px-3 font-medium text-muted">
                  Demand (gal)
                </th>
                <th className="text-right py-2 px-3 font-medium text-muted">
                  Balance (gal)
                </th>
              </tr>
            </thead>
            <tbody>
              {rainfallData.months.map((month, i) => {
                const balance = monthlyCapture[i] - monthlyDemand[i];
                return (
                  <tr
                    key={month}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-2 px-3 font-medium">{month}</td>
                    <td className="py-2 px-3 text-right">
                      {rainfallData.monthlyAverages[i].toFixed(2)}
                    </td>
                    <td className="py-2 px-3 text-right">
                      {Math.round(monthlyCapture[i]).toLocaleString()}
                    </td>
                    <td className="py-2 px-3 text-right">
                      {Math.round(monthlyDemand[i]).toLocaleString()}
                    </td>
                    <td
                      className={`py-2 px-3 text-right font-medium ${
                        balance >= 0 ? "text-emerald-600" : "text-red-500"
                      }`}
                    >
                      {balance >= 0 ? "+" : ""}
                      {Math.round(balance).toLocaleString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-border font-semibold">
                <td className="py-2 px-3">Annual Total</td>
                <td className="py-2 px-3 text-right">
                  {rainfallData.annualAverage.toFixed(2)}
                </td>
                <td className="py-2 px-3 text-right">
                  {Math.round(annualCapture).toLocaleString()}
                </td>
                <td className="py-2 px-3 text-right">
                  {Math.round(annualDemand).toLocaleString()}
                </td>
                <td
                  className={`py-2 px-3 text-right ${
                    annualCapture - annualDemand >= 0
                      ? "text-emerald-600"
                      : "text-red-500"
                  }`}
                >
                  {annualCapture - annualDemand >= 0 ? "+" : ""}
                  {Math.round(
                    annualCapture - annualDemand
                  ).toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Details Card */}
      <div className="bg-white border border-border rounded-xl p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Calculation Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted">Location</p>
            <p className="font-medium">{locationName}</p>
          </div>
          <div>
            <p className="text-muted">Data Period</p>
            <p className="font-medium">{rainfallData.dataYears} (30 years)</p>
          </div>
          <div>
            <p className="text-muted">Roof Collection Area</p>
            <p className="font-medium">
              {propertyData.roofArea.toLocaleString()} sq ft
            </p>
          </div>
          <div>
            <p className="text-muted">Roof Type / Efficiency</p>
            <p className="font-medium">
              {propertyData.roofType.charAt(0).toUpperCase() +
                propertyData.roofType.slice(1)}{" "}
              ({Math.round(efficiency * 100)}%)
            </p>
          </div>
          <div>
            <p className="text-muted">Household Size</p>
            <p className="font-medium">
              {propertyData.householdSize}{" "}
              {propertyData.householdSize === 1 ? "person" : "people"}
            </p>
          </div>
          <div>
            <p className="text-muted">Daily Water Use</p>
            <p className="font-medium">
              {propertyData.dailyWaterUse} gal/person/day (
              {propertyData.dailyWaterUse * propertyData.householdSize}{" "}
              gal/day total)
            </p>
          </div>
          <div>
            <p className="text-muted">Annual Rainfall</p>
            <p className="font-medium">
              {rainfallData.annualAverage.toFixed(2)} inches
            </p>
          </div>
          <div>
            <p className="text-muted">Conversion Factor</p>
            <p className="font-medium">
              {GALLONS_PER_SQFT_PER_INCH} gal/sqft/inch
            </p>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <p className="text-sm text-amber-800">
          <strong>Disclaimer:</strong> Results are estimates for planning
          purposes only. Actual rainwater collection may vary based on local
          conditions, storm intensity patterns, system efficiency, first-flush
          diversion, and maintenance. Consult local regulations before
          installing a rainwater harvesting system.
        </p>
      </div>
    </div>
  );
}
