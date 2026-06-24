"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface RainfallChartProps {
  monthlyRainfall: number[];
  monthlyCapture: number[];
  monthlyDemand: number[];
  months: string[];
}

export default function RainfallChart({
  monthlyRainfall,
  monthlyCapture,
  monthlyDemand,
  months,
}: RainfallChartProps) {
  const data = months.map((month, i) => ({
    month: month.substring(0, 3),
    rainfall: monthlyRainfall[i],
    capture: Math.round(monthlyCapture[i]),
    demand: Math.round(monthlyDemand[i]),
  }));

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Monthly Rainfall &amp; Water Capture
      </h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: "#64748b" }}
            />
            <YAxis
              yAxisId="left"
              tick={{ fontSize: 12, fill: "#64748b" }}
              label={{
                value: "Inches",
                angle: -90,
                position: "insideLeft",
                style: { fontSize: 12, fill: "#64748b" },
              }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tick={{ fontSize: 12, fill: "#64748b" }}
              label={{
                value: "Gallons",
                angle: 90,
                position: "insideRight",
                style: { fontSize: 12, fill: "#64748b" },
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                fontSize: "13px",
              }}
              formatter={(value: number, name: string) => {
                if (name === "rainfall")
                  return [`${value.toFixed(2)} in`, "Avg Rainfall"];
                if (name === "capture")
                  return [`${value.toLocaleString()} gal`, "Water Captured"];
                return [`${value.toLocaleString()} gal`, "Water Demand"];
              }}
            />
            <Legend
              formatter={(value: string) => {
                if (value === "rainfall") return "Avg Rainfall (in)";
                if (value === "capture") return "Water Captured (gal)";
                return "Water Demand (gal)";
              }}
            />
            <Bar
              yAxisId="left"
              dataKey="rainfall"
              fill="#2b78c4"
              radius={[2, 2, 0, 0]}
            />
            <Bar
              yAxisId="right"
              dataKey="capture"
              fill="#2d5f6e"
              radius={[2, 2, 0, 0]}
            />
            <Bar
              yAxisId="right"
              dataKey="demand"
              fill="#e88c30"
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
