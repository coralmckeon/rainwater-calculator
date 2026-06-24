import Link from "next/link";

export default function WhyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="mb-8">
        <Link href="/" className="text-primary hover:text-primary-dark text-sm">
          &larr; Back to Calculator
        </Link>
      </nav>

      <h1 className="text-4xl font-bold text-foreground mb-6">
        Why Harvest Rainwater?
      </h1>

      <p className="text-lg text-muted mb-8">
        Rainwater harvesting offers compelling benefits for homeowners,
        communities, and the environment. Here are the top reasons to consider
        collecting rainwater at your property.
      </p>

      <div className="space-y-8">
        <div className="bg-white border border-border rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Reduce Water Bills</h2>
              <p className="text-muted">
                Municipal water costs continue to rise across the country. By supplementing your water
                supply with harvested rainwater, you can significantly reduce monthly utility bills.
                Even using rainwater solely for irrigation can save 30-50% on water costs for
                homeowners with landscaping. In some areas, water rates have increased 40% or more
                over the past decade, making rainwater harvesting an increasingly smart financial
                decision.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-border rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Environmental Benefits</h2>
              <p className="text-muted">
                Collecting rainwater reduces stormwater runoff, which is a major source of pollution
                in waterways. When rain hits impervious surfaces like roofs and driveways, it picks
                up pollutants and rushes into storm drains, carrying chemicals, sediments, and debris
                into rivers and lakes. By capturing this water, you reduce erosion, decrease flooding
                risk, and help protect local water quality. You also reduce the energy required to
                treat and pump municipal water.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-border rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Water Independence</h2>
              <p className="text-muted">
                Having a stored supply of water provides resilience against droughts, water main
                breaks, and other disruptions to municipal supply. In areas prone to water
                restrictions during dry periods, a rainwater system can keep your garden alive
                and provide backup water for essential uses. For rural properties not connected
                to municipal water, rainwater harvesting can be a primary water source when
                properly designed and filtered.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-border rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Better for Plants</h2>
              <p className="text-muted">
                Rainwater is naturally soft and free of chlorine, fluoride, and other chemicals
                found in treated municipal water. Plants generally prefer rainwater over tap water,
                and many gardeners report healthier plants and better yields when using rainwater
                for irrigation. The slightly acidic pH of rainwater (around 5.6) is ideal for most
                plants and can help maintain proper soil pH levels.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-border rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Increase Property Value</h2>
              <p className="text-muted">
                A well-designed rainwater harvesting system can increase your property value,
                particularly in water-scarce regions. As water becomes an increasingly precious
                resource, homes with water self-sufficiency features are more attractive to buyers.
                Some states, like Texas, offer tax incentives for rainwater harvesting equipment,
                further improving the financial return.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-border rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Reduce Infrastructure Strain</h2>
              <p className="text-muted">
                When many homes in a community harvest rainwater, it collectively reduces the demand
                on municipal water treatment and distribution systems. This can delay or eliminate
                the need for expensive infrastructure upgrades, benefiting the entire community.
                It also reduces the load on stormwater management systems during heavy rainfall events.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-cyan-50 border border-cyan-200 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-cyan-900 mb-2">
          See How Much You Could Save
        </h2>
        <p className="text-cyan-800 mb-4">
          Use our calculator to estimate your rainwater harvesting potential and
          see how it compares to your household water demand.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary hover:bg-primary-dark text-white font-medium px-6 py-2 rounded-lg transition-colors"
        >
          Calculate Your Potential
        </Link>
      </div>
    </div>
  );
}
