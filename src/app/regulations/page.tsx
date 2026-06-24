import Link from "next/link";

interface StateRegulation {
  state: string;
  summary: string;
  category: "very-permissive" | "permissive" | "some-restrictions" | "restrictive";
}

const regulations: StateRegulation[] = [
  { state: "Alabama", summary: "No state-level restrictions. Rainwater harvesting is generally permitted without regulation.", category: "very-permissive" },
  { state: "Alaska", summary: "No state-level restrictions. Harvesting is common in rural areas, especially where municipal water is unavailable.", category: "very-permissive" },
  { state: "Arizona", summary: "Actively encouraged. Some municipalities offer tax credits for rainwater harvesting systems. No permit required for residential use.", category: "very-permissive" },
  { state: "Arkansas", summary: "Legal with no state-level restrictions. The state encourages water conservation practices including rainwater collection.", category: "very-permissive" },
  { state: "California", summary: "Encouraged statewide. The Rainwater Capture Act of 2012 allows residential and commercial collection with no permit required. Some rebate programs available.", category: "very-permissive" },
  { state: "Colorado", summary: "Legal since 2016 for residential properties. Limited to two rain barrels with a combined maximum of 110 gallons. Must be used on the property where collected for outdoor purposes only.", category: "restrictive" },
  { state: "Connecticut", summary: "No state restrictions. Rainwater harvesting is permitted without a permit for residential use.", category: "very-permissive" },
  { state: "Delaware", summary: "No state-level restrictions. Generally permitted for residential and commercial properties.", category: "very-permissive" },
  { state: "Florida", summary: "Encouraged by state law. A 2017 law prohibits local governments from enacting ordinances that ban rainwater harvesting. Tax exemptions available for rainwater systems.", category: "very-permissive" },
  { state: "Georgia", summary: "Legal with guidelines. The state encourages rainwater harvesting. Local building codes may apply for systems connected to indoor plumbing.", category: "permissive" },
  { state: "Hawaii", summary: "Legal and common, especially on the Big Island where many homes rely on catchment systems as their primary water source. County-level regulations may apply.", category: "very-permissive" },
  { state: "Idaho", summary: "Generally permitted. No state-level restrictions on residential rainwater collection. Larger systems may need to comply with water rights laws.", category: "permissive" },
  { state: "Illinois", summary: "Legal statewide. The Illinois Green Infrastructure Grant Program provides incentives for stormwater management including rainwater harvesting.", category: "very-permissive" },
  { state: "Indiana", summary: "No state restrictions. Rainwater collection is legal and unregulated at the state level.", category: "very-permissive" },
  { state: "Iowa", summary: "No state-level restrictions. Rainwater harvesting is permitted without specific regulations.", category: "very-permissive" },
  { state: "Kansas", summary: "No state restrictions. Legal for residential and agricultural use without permits.", category: "very-permissive" },
  { state: "Kentucky", summary: "No state-level restrictions. Rainwater collection is generally permitted.", category: "very-permissive" },
  { state: "Louisiana", summary: "Legal with no restrictions. A 2017 law explicitly allows residential rainwater harvesting.", category: "very-permissive" },
  { state: "Maine", summary: "No state restrictions. Rainwater harvesting is permitted and encouraged for gardening and non-potable uses.", category: "very-permissive" },
  { state: "Maryland", summary: "Legal and encouraged. The state offers tax credits for rainwater harvesting systems. Some counties provide rebate programs.", category: "very-permissive" },
  { state: "Massachusetts", summary: "No state-level restrictions. Plumbing code compliance required for indoor use connections.", category: "permissive" },
  { state: "Michigan", summary: "No state restrictions. Rainwater collection is legal. Some local ordinances may apply.", category: "very-permissive" },
  { state: "Minnesota", summary: "Legal for non-potable uses. The state encourages rainwater harvesting as part of stormwater management strategies.", category: "permissive" },
  { state: "Mississippi", summary: "No state-level restrictions. Rainwater harvesting is permitted without regulation.", category: "very-permissive" },
  { state: "Missouri", summary: "Legal with no state restrictions. Some municipalities have green infrastructure incentive programs.", category: "very-permissive" },
  { state: "Montana", summary: "Generally legal for smaller systems. Larger collection systems may intersect with state water rights. A 2009 law allows rainwater harvesting for non-potable uses.", category: "some-restrictions" },
  { state: "Nebraska", summary: "No specific regulations. Rainwater harvesting is generally allowed for residential use.", category: "very-permissive" },
  { state: "Nevada", summary: "Legal for non-potable uses. The state passed legislation in 2017 explicitly permitting rainwater harvesting. Systems over a certain size may require permits.", category: "permissive" },
  { state: "New Hampshire", summary: "No state restrictions. Rainwater collection is legal and unregulated at the state level.", category: "very-permissive" },
  { state: "New Jersey", summary: "Legal and encouraged. The state promotes rainwater harvesting as part of stormwater management best practices.", category: "very-permissive" },
  { state: "New Mexico", summary: "Legal and encouraged. Some municipalities offer rebates. Santa Fe requires rainwater harvesting for new commercial development.", category: "very-permissive" },
  { state: "New York", summary: "Legal with no state-level restrictions. New York City has specific programs encouraging green infrastructure including rainwater capture.", category: "very-permissive" },
  { state: "North Carolina", summary: "Legal with guidelines. State law allows rainwater harvesting. Systems for potable use must meet water quality standards.", category: "permissive" },
  { state: "North Dakota", summary: "No specific state regulations. Rainwater collection is generally permitted for residential use.", category: "very-permissive" },
  { state: "Ohio", summary: "No state-level restrictions. Rainwater harvesting is generally permitted. Franklin County and other areas actively promote it.", category: "very-permissive" },
  { state: "Oklahoma", summary: "Legal without restrictions. A 2012 law clarified that rainwater harvesting is legal and encouraged.", category: "very-permissive" },
  { state: "Oregon", summary: "Legal with some conditions. Rainwater from rooftop surfaces can be collected without a permit. Collection from other surfaces may require a water right.", category: "some-restrictions" },
  { state: "Pennsylvania", summary: "No state restrictions. The state encourages rainwater harvesting as part of stormwater management.", category: "very-permissive" },
  { state: "Rhode Island", summary: "No state-level restrictions. Generally permitted for residential properties.", category: "very-permissive" },
  { state: "South Carolina", summary: "No state restrictions. Rainwater harvesting is legal and unregulated at the state level.", category: "very-permissive" },
  { state: "South Dakota", summary: "No specific regulations. Rainwater collection is generally permitted.", category: "very-permissive" },
  { state: "Tennessee", summary: "No state-level restrictions. Rainwater collection is legal for residential and commercial use.", category: "very-permissive" },
  { state: "Texas", summary: "Among the most permissive states. State law encourages rainwater harvesting with sales tax exemptions on equipment. Requires sellers of new homes to offer rainwater systems. Some municipalities offer property tax reductions.", category: "very-permissive" },
  { state: "Utah", summary: "Legal with registration. Residents can collect up to 2,500 gallons in underground storage or two containers of 100 gallons each without registration. Larger systems require free registration with the state.", category: "some-restrictions" },
  { state: "Vermont", summary: "No state restrictions. Rainwater collection is permitted without specific regulation.", category: "very-permissive" },
  { state: "Virginia", summary: "Legal and encouraged. A 2011 law directed the Department of Environmental Quality to promote rainwater harvesting.", category: "very-permissive" },
  { state: "Washington", summary: "Legal statewide. A 2009 law explicitly allows rainwater harvesting from rooftop surfaces. Large-scale collection may require compliance with local building codes.", category: "permissive" },
  { state: "West Virginia", summary: "No state-level restrictions. Rainwater harvesting is generally permitted.", category: "very-permissive" },
  { state: "Wisconsin", summary: "Legal but may be subject to local plumbing codes when connected to building systems. The state DNR encourages rainwater collection for conservation.", category: "permissive" },
  { state: "Wyoming", summary: "Legal for residential use since 2015. Limited to collecting rainwater from rooftops. Must be used on the property. Previously one of the most restrictive states.", category: "some-restrictions" },
];

const categoryLabels = {
  "very-permissive": { label: "Very Permissive", color: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  permissive: { label: "Permissive with Conditions", color: "bg-blue-100 text-blue-800 border-blue-200" },
  "some-restrictions": { label: "Some Restrictions", color: "bg-amber-100 text-amber-800 border-amber-200" },
  restrictive: { label: "Restrictive", color: "bg-red-100 text-red-800 border-red-200" },
};

export default function RegulationsPage() {
  const grouped = {
    "very-permissive": regulations.filter((r) => r.category === "very-permissive"),
    permissive: regulations.filter((r) => r.category === "permissive"),
    "some-restrictions": regulations.filter((r) => r.category === "some-restrictions"),
    restrictive: regulations.filter((r) => r.category === "restrictive"),
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="mb-8">
        <Link href="/" className="text-primary hover:text-primary-dark text-sm">
          &larr; Back to Calculator
        </Link>
      </nav>

      <h1 className="text-4xl font-bold text-foreground mb-6">
        Rainwater Harvesting Regulations by State
      </h1>

      <p className="text-lg text-muted mb-4">
        Rainwater harvesting regulations vary significantly across the United
        States. While most states have no restrictions and actively encourage
        collection, a few states have specific rules about how much you can
        collect or how the water can be used. Always check your local county
        and city ordinances as they may have additional requirements.
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {Object.entries(categoryLabels).map(([key, { label, color }]) => (
          <span
            key={key}
            className={`px-3 py-1 rounded-full text-xs font-medium border ${color}`}
          >
            {label} ({grouped[key as keyof typeof grouped].length} states)
          </span>
        ))}
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
        <p className="text-sm text-amber-800">
          <strong>Disclaimer:</strong> This information is provided for general
          reference only and may not reflect the most current laws. Regulations
          can change, and local ordinances may impose additional requirements.
          Always verify current regulations with your state and local
          government before installing a rainwater harvesting system.
        </p>
      </div>

      <div className="space-y-8">
        {(
          Object.entries(grouped) as [keyof typeof grouped, StateRegulation[]][]
        ).map(([category, states]) => (
          <div key={category}>
            <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <span
                className={`inline-block w-3 h-3 rounded-full ${
                  categoryLabels[category].color.split(" ")[0]
                }`}
              />
              {categoryLabels[category].label}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {states.map((reg) => (
                <div
                  key={reg.state}
                  className={`border rounded-lg p-4 ${categoryLabels[reg.category].color}`}
                >
                  <h3 className="font-semibold text-lg mb-1">{reg.state}</h3>
                  <p className="text-sm opacity-90">{reg.summary}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-cyan-50 border border-cyan-200 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-cyan-900 mb-2">
          Ready to Calculate?
        </h2>
        <p className="text-cyan-800 mb-4">
          Now that you know your state&apos;s regulations, find out how much
          rainwater you could harvest at your location.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary hover:bg-primary-dark text-white font-medium px-6 py-2 rounded-lg transition-colors"
        >
          Go to Calculator
        </Link>
      </div>
    </div>
  );
}
