"use client";

interface PropertyData {
  roofArea: number;
  roofType: "metal" | "tile" | "asphalt" | "flat";
  householdSize: number;
  dailyWaterUse: number;
}

interface PropertyFormProps {
  data: PropertyData;
  onChange: (data: PropertyData) => void;
}

const roofTypeLabels: Record<PropertyData["roofType"], string> = {
  metal: "Metal Roof (95% efficiency)",
  tile: "Tile Roof (90% efficiency)",
  asphalt: "Asphalt Shingle (85% efficiency)",
  flat: "Flat Roof (65% efficiency)",
};

export default function PropertyForm({ data, onChange }: PropertyFormProps) {
  const updateField = <K extends keyof PropertyData>(
    field: K,
    value: PropertyData[K]
  ) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <label
          htmlFor="roof-area"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Roof Collection Area (sq ft)
        </label>
        <input
          id="roof-area"
          type="number"
          value={data.roofArea || ""}
          onChange={(e) =>
            updateField("roofArea", parseFloat(e.target.value) || 0)
          }
          placeholder="e.g., 1500"
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-white"
          min="0"
          step="100"
        />
        <p className="text-xs text-muted mt-1">
          Tip: A typical single-story home has about 1,000-1,500 sq ft of roof
          area. For a multi-story home, use the footprint area only (ground
          floor).
        </p>
      </div>

      <div>
        <label
          htmlFor="roof-type"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Roof Type
        </label>
        <select
          id="roof-type"
          value={data.roofType}
          onChange={(e) =>
            updateField("roofType", e.target.value as PropertyData["roofType"])
          }
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-white"
        >
          {Object.entries(roofTypeLabels).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <p className="text-xs text-muted mt-1">
          Different roof materials have different runoff coefficients. Metal
          roofs capture the most water.
        </p>
      </div>

      <div>
        <label
          htmlFor="household-size"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Number of People in Household
        </label>
        <input
          id="household-size"
          type="number"
          value={data.householdSize || ""}
          onChange={(e) =>
            updateField("householdSize", parseInt(e.target.value) || 0)
          }
          placeholder="e.g., 4"
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-white"
          min="1"
          max="20"
        />
      </div>

      <div>
        <label
          htmlFor="daily-water"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Daily Water Usage (gallons per person)
        </label>
        <input
          id="daily-water"
          type="number"
          value={data.dailyWaterUse || ""}
          onChange={(e) =>
            updateField("dailyWaterUse", parseFloat(e.target.value) || 0)
          }
          placeholder="e.g., 80"
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-white"
          min="0"
          step="5"
        />
        <p className="text-xs text-muted mt-1">
          The average American uses about 80-100 gallons per day. For
          non-potable use only (irrigation, toilets, laundry), estimate 30-50
          gallons per person per day.
        </p>
      </div>
    </div>
  );
}
