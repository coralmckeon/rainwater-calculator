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

  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-200 rounded-xl p-5">
          <p className="text-xs font-medium text-cyan-700 uppercase tracking-wider">
            Annual Capture
          </p>
          <p className="text-2xl font-bold text-cyan-900 mt-1">
            {Math.round(annualCapture).toLocaleString()}
          </p>
          <p className="text-sm text-cyan-700">gallons/year</p>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 rounded-xl p-5">
          <p className="text-xs font-medium text-teal-700 uppercase tracking-wider">
            Recommended Tank
          </p>
          <p className="text-2xl font-bold text-teal-900 mt-1">
            {recommendedTankSize.toLocaleString()}
          </p>
          <p className="text-sm text-teal-700">gallons capacity</p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-5">
          <p className="text-xs font-medium text-blue-700 uppercase tracking-wider">
            Self-Sufficiency
          </p>
          <p className="text-2xl font-bold text-blue-900 mt-1">
            {selfSufficiencyPct}%
          </p>
          <p className="text-sm text-blue-700">of water needs met</p>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 rounded-xl p-5">
          <p className="text-xs font-medium text-emerald-700 uppercase tracking-wider">
            Surplus Months
          </p>
          <p className="text-2xl font-bold text-emerald-900 mt-1">
            {surplusMonths}
          </p>
          <p className="text-sm text-emerald-700">of 12 months</p>
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
