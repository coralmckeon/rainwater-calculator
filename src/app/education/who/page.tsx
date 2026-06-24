import Link from "next/link";

export default function WhoPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="mb-8">
        <Link href="/" className="text-primary hover:text-primary-dark text-sm">
          &larr; Back to Calculator
        </Link>
      </nav>

      <h1 className="text-4xl font-bold text-foreground mb-6">
        Who Can Benefit from Rainwater Harvesting?
      </h1>

      <p className="text-lg text-muted mb-8">
        Rainwater harvesting is not just for rural homesteaders or desert
        dwellers. People across the country, from suburban homeowners to
        commercial property managers, can benefit from collecting rainwater.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Homeowners
          </h2>
          <p className="text-muted text-sm mb-3">
            Whether you have a small suburban lot or a large rural property,
            rainwater harvesting can reduce your water bill and provide a
            reliable source for garden irrigation. Even a simple rain barrel
            setup can make a meaningful difference for garden watering.
          </p>
          <ul className="text-sm text-muted space-y-1">
            <li>&#8226; Garden and lawn irrigation</li>
            <li>&#8226; Car washing</li>
            <li>&#8226; Toilet flushing (with plumbing modifications)</li>
            <li>&#8226; Laundry (with basic filtration)</li>
            <li>&#8226; Emergency water reserve</li>
          </ul>
        </div>

        <div className="bg-white border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Gardeners &amp; Farmers
          </h2>
          <p className="text-muted text-sm mb-3">
            Anyone growing food or maintaining extensive landscaping benefits
            enormously from rainwater harvesting. Rainwater is free of chlorine
            and chemicals, making it ideal for organic gardening. Small farms
            and homesteads can offset significant irrigation costs.
          </p>
          <ul className="text-sm text-muted space-y-1">
            <li>&#8226; Drip irrigation systems</li>
            <li>&#8226; Greenhouse watering</li>
            <li>&#8226; Livestock watering</li>
            <li>&#8226; Aquaponics and hydroponics</li>
            <li>&#8226; Frost protection (stored water releases heat)</li>
          </ul>
        </div>

        <div className="bg-white border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Rural &amp; Off-Grid Properties
          </h2>
          <p className="text-muted text-sm mb-3">
            Properties without access to municipal water systems can use
            rainwater as a primary or supplemental water source. With proper
            filtration and treatment, rainwater can serve all household needs
            including drinking water.
          </p>
          <ul className="text-sm text-muted space-y-1">
            <li>&#8226; Primary water source with full treatment</li>
            <li>&#8226; Well water supplementation</li>
            <li>&#8226; Reduced well pump usage and energy costs</li>
            <li>&#8226; Backup supply during well maintenance</li>
            <li>&#8226; Fire suppression reserve</li>
          </ul>
        </div>

        <div className="bg-white border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Commercial Properties
          </h2>
          <p className="text-muted text-sm mb-3">
            Businesses, schools, churches, and other commercial buildings
            often have large roof areas ideal for rainwater collection.
            Captured water can be used for landscape maintenance, cooling
            systems, and toilet flushing, reducing operating costs.
          </p>
          <ul className="text-sm text-muted space-y-1">
            <li>&#8226; Landscape irrigation for campuses</li>
            <li>&#8226; Cooling tower makeup water</li>
            <li>&#8226; Restroom flushing</li>
            <li>&#8226; LEED certification credits</li>
            <li>&#8226; Stormwater management compliance</li>
          </ul>
        </div>

        <div className="bg-white border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Drought-Prone Regions
          </h2>
          <p className="text-muted text-sm mb-3">
            Residents in areas experiencing water scarcity or frequent drought
            conditions benefit from having a stored water supply. During water
            restrictions, harvested rainwater can maintain essential outdoor
            water uses.
          </p>
          <ul className="text-sm text-muted space-y-1">
            <li>&#8226; Maintaining landscapes during restrictions</li>
            <li>&#8226; Reducing dependence on strained aquifers</li>
            <li>&#8226; Buffer against supply disruptions</li>
            <li>&#8226; Community resilience</li>
          </ul>
        </div>

        <div className="bg-white border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Environmentally Conscious
          </h2>
          <p className="text-muted text-sm mb-3">
            Anyone looking to reduce their environmental footprint can benefit
            from rainwater harvesting. It reduces demand on overtaxed water
            supplies, decreases stormwater pollution, and lowers energy use
            associated with water treatment and distribution.
          </p>
          <ul className="text-sm text-muted space-y-1">
            <li>&#8226; Reduced carbon footprint from water pumping</li>
            <li>&#8226; Less stormwater runoff and erosion</li>
            <li>&#8226; Groundwater recharge</li>
            <li>&#8226; Sustainable living practices</li>
          </ul>
        </div>
      </div>

      <div className="bg-white border border-border rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Getting Started
        </h2>
        <p className="text-muted mb-4">
          No matter who you are, getting started with rainwater harvesting is
          easier than you might think. Here is a simple progression:
        </p>
        <div className="space-y-3">
          <div className="flex gap-3 items-start">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shrink-0 text-white text-sm font-bold">
              1
            </div>
            <p className="text-sm text-muted pt-1">
              <strong className="text-foreground">Start Small:</strong> A
              single rain barrel under a downspout costs $50-150 and takes
              30 minutes to set up. Use it for garden watering.
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shrink-0 text-white text-sm font-bold">
              2
            </div>
            <p className="text-sm text-muted pt-1">
              <strong className="text-foreground">Scale Up:</strong> Add more
              barrels or upgrade to a larger tank (250-500 gallons). Connect
              multiple downspouts.
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shrink-0 text-white text-sm font-bold">
              3
            </div>
            <p className="text-sm text-muted pt-1">
              <strong className="text-foreground">Go Big:</strong> Install a
              full system with a large cistern (1,000+ gallons), first-flush
              diverter, filtration, and pump for pressurized distribution.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-cyan-900 mb-2">
          Calculate Your Potential
        </h2>
        <p className="text-cyan-800 mb-4">
          Find out how much rainwater you could collect at your specific
          location. Our calculator uses 30 years of historical weather data
          for accurate estimates.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary hover:bg-primary-dark text-white font-medium px-6 py-2 rounded-lg transition-colors"
        >
          Use the Calculator
        </Link>
      </div>
    </div>
  );
}
