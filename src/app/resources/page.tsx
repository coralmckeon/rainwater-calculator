import Link from "next/link";

export default function ResourcesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="mb-8">
        <Link href="/" className="text-primary hover:text-primary-dark text-sm">
          &larr; Back to Calculator
        </Link>
      </nav>

      <h1 className="text-4xl font-bold text-foreground mb-6">Resources</h1>

      <p className="text-lg text-muted mb-8">
        Explore these resources to learn more about rainwater harvesting, find
        equipment suppliers, and access official data sources.
      </p>

      <div className="space-y-8">
        <div className="bg-white border border-border rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Official Data Sources
          </h2>
          <ul className="space-y-3">
            <li>
              <a
                href="https://www.weather.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark font-medium"
              >
                NOAA National Weather Service
              </a>
              <p className="text-sm text-muted">
                Official US weather data, forecasts, and climate information.
              </p>
            </li>
            <li>
              <a
                href="https://www.ncei.noaa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark font-medium"
              >
                NOAA National Centers for Environmental Information
              </a>
              <p className="text-sm text-muted">
                Historical climate data, including precipitation records
                dating back decades.
              </p>
            </li>
            <li>
              <a
                href="https://open-meteo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark font-medium"
              >
                Open-Meteo
              </a>
              <p className="text-sm text-muted">
                Free weather API providing historical and forecast data. Powers
                this calculator&apos;s precipitation data.
              </p>
            </li>
            <li>
              <a
                href="https://www.epa.gov/watersense"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark font-medium"
              >
                EPA WaterSense Program
              </a>
              <p className="text-sm text-muted">
                Resources on water conservation, efficiency standards, and
                the WaterSense label program.
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-border rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Rainwater Harvesting Organizations
          </h2>
          <ul className="space-y-3">
            <li>
              <a
                href="https://www.arcsa.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark font-medium"
              >
                American Rainwater Catchment Systems Association (ARCSA)
              </a>
              <p className="text-sm text-muted">
                The leading US organization promoting rainwater harvesting.
                Offers certification, education, and networking.
              </p>
            </li>
            <li>
              <a
                href="https://www.harvesth2o.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark font-medium"
              >
                HarvestH2O
              </a>
              <p className="text-sm text-muted">
                Community resource for rainwater harvesting information,
                guides, and supplier directories.
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-border rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Equipment &amp; Supplies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-foreground mb-2">Rain Barrels</h3>
              <p className="text-sm text-muted">
                Simple 55-gallon barrels are available at most home improvement
                stores. Many municipalities offer subsidized rain barrels through
                conservation programs. Check with your local water utility for
                discounts.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">
                Large Storage Tanks
              </h3>
              <p className="text-sm text-muted">
                Polyethylene tanks from 100 to 10,000+ gallons are available
                from agricultural suppliers and rainwater-specific retailers.
                Common brands include Bushman, Snyder, and Norwesco.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">
                First-Flush Diverters
              </h3>
              <p className="text-sm text-muted">
                Essential for water quality. Diverts the first flush of
                contaminated roof runoff before clean water enters storage.
                Available from rainwater supply specialists.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">
                Filtration Systems
              </h3>
              <p className="text-sm text-muted">
                From basic screen filters for irrigation use to multi-stage
                systems with UV treatment for potable water. Match your
                filtration level to your intended water use.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-border rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Further Reading
          </h2>
          <ul className="space-y-3">
            <li>
              <p className="font-medium text-foreground">
                &quot;Rainwater Harvesting for Drylands and Beyond&quot; by Brad Lancaster
              </p>
              <p className="text-sm text-muted">
                Comprehensive guide covering earthworks, cisterns, and
                integrated water harvesting design. Two volumes available.
              </p>
            </li>
            <li>
              <p className="font-medium text-foreground">
                &quot;Water Storage: Tanks, Cisterns, Aquifers, and Ponds&quot; by Art Ludwig
              </p>
              <p className="text-sm text-muted">
                Practical guide focused on water storage options for
                residential and small commercial properties.
              </p>
            </li>
            <li>
              <p className="font-medium text-foreground">
                Texas Water Development Board - Rainwater Harvesting Manual
              </p>
              <p className="text-sm text-muted">
                Free PDF guide from the state of Texas covering system design,
                water quality, and maintenance. Applicable beyond Texas.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
