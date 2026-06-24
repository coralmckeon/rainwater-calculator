import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <svg
                className="w-7 h-7 text-accent"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
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
