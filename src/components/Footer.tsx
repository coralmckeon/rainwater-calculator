import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#16323d] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <svg
                className="w-7 h-7 text-accent"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z" />
              </svg>
              <span className="text-lg font-bold text-white">
                Rainwater Calculator
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              A free tool for estimating rainwater harvesting potential at any
              US address. Uses 30 years of historical precipitation data for
              accurate, location-specific calculations.
            </p>
            <p className="text-xs text-slate-500 mt-4">
              Results are estimates for planning purposes only. Actual
              rainwater collection may vary based on local conditions, system
              design, and maintenance.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Learn More
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/education/what"
                  className="text-sm hover:text-white transition-colors"
                >
                  What is Rainwater Harvesting?
                </Link>
              </li>
              <li>
                <Link
                  href="/education/why"
                  className="text-sm hover:text-white transition-colors"
                >
                  Why Harvest Rainwater?
                </Link>
              </li>
              <li>
                <Link
                  href="/education/who"
                  className="text-sm hover:text-white transition-colors"
                >
                  Who Can Benefit?
                </Link>
              </li>
              <li>
                <Link
                  href="/regulations"
                  className="text-sm hover:text-white transition-colors"
                >
                  State Regulations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Site
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/resources"
                  className="text-sm hover:text-white transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} National Rainwater Harvesting
            Calculator. Data sourced from Open-Meteo historical weather
            archives. Geocoding powered by OpenStreetMap Nominatim.
          </p>
        </div>
      </div>
    </footer>
  );
}
