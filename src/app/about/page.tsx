import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="mb-8">
        <Link href="/" className="text-primary hover:text-primary-dark text-sm">
          &larr; Back to Calculator
        </Link>
      </nav>

      <h1 className="text-4xl font-bold text-foreground mb-6">
        About the National Rainwater Harvesting Calculator
      </h1>

      <div className="space-y-8">
        <div className="bg-white border border-border rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Our Mission
          </h2>
          <p className="text-muted mb-4">
            The National Rainwater Harvesting Calculator is a free, open tool
            designed to help anyone in the United States estimate their rainwater
            harvesting potential. We believe that access to accurate, localized
            water data should be freely available to all, empowering individuals
            and communities to make informed decisions about water sustainability.
          </p>
          <p className="text-muted">
            Unlike other calculators that cover only a single state or require
            manual rainfall data entry, our tool works for any US address and
            automatically pulls precise historical weather data for your
            specific location.
          </p>
        </div>

        <div className="bg-white border border-border rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            How It Works
          </h2>
          <div className="space-y-4 text-muted">
            <p>
              Our calculator uses a three-step process to generate accurate
              rainwater harvesting estimates:
            </p>
            <div className="pl-4 border-l-2 border-primary space-y-3">
              <div>
                <p className="font-medium text-foreground">1. Location Geocoding</p>
                <p className="text-sm">
                  When you enter an address, we use OpenStreetMap&apos;s Nominatim
                  service to convert it to precise latitude/longitude coordinates.
                  This ensures we get the most accurate local weather data possible.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  2. Historical Precipitation Data
                </p>
                <p className="text-sm">
                  Using your coordinates, we query the Open-Meteo Historical
                  Weather API for 30 years of daily precipitation data
                  (1994-2023). We aggregate this into monthly averages,
                  providing a robust picture of typical rainfall patterns at
                  your location. The data is converted from metric (millimeters)
                  to US customary units (inches).
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  3. Harvesting Calculations
                </p>
                <p className="text-sm">
                  We apply the standard rainwater harvesting formula: Monthly
                  Capture (gallons) = Roof Area (sq ft) x Monthly Rainfall (inches)
                  x 0.623 (conversion factor) x Roof Efficiency. The 0.623
                  factor converts the volume of water collected per square foot
                  per inch of rainfall into gallons.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-border rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Data Sources
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-foreground">
                Open-Meteo Historical Weather API
              </h3>
              <p className="text-sm text-muted">
                Provides high-resolution historical weather data based on
                reanalysis datasets and weather station observations. We use
                daily precipitation sums spanning 1994-2023, aggregated into
                monthly averages. Open-Meteo provides global coverage with no
                data gaps.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground">
                OpenStreetMap Nominatim
              </h3>
              <p className="text-sm text-muted">
                Powers our address geocoding, converting text addresses into
                geographic coordinates. Nominatim is built on OpenStreetMap
                data, the world&apos;s largest collaborative mapping project.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-border rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Methodology Notes
          </h2>
          <div className="space-y-3 text-sm text-muted">
            <p>
              <strong className="text-foreground">Roof Efficiency Coefficients:</strong>{" "}
              We use industry-standard runoff coefficients: Metal (95%), Tile
              (90%), Asphalt Shingle (85%), and Flat (65%). These represent the
              percentage of rainfall that actually runs off the roof and can be
              collected, accounting for absorption, splash, and evaporation
              losses.
            </p>
            <p>
              <strong className="text-foreground">Tank Sizing:</strong> Our
              recommended tank size is calculated as 1.5 times the average
              monthly capture, rounded up to the nearest 100 gallons. This
              provides a buffer for above-average rainfall months while keeping
              costs reasonable.
            </p>
            <p>
              <strong className="text-foreground">Limitations:</strong> Our
              estimates do not account for first-flush diversion losses,
              evaporation from storage, seasonal demand variations, or extreme
              weather events. Actual results may vary by 10-20% from our
              estimates. For system design purposes, we recommend consulting
              with a local rainwater harvesting professional.
            </p>
          </div>
        </div>

        <div className="bg-white border border-border rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Technology
          </h2>
          <p className="text-sm text-muted mb-4">
            This calculator is built with modern web technologies:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Recharts",
              "Leaflet",
              "Open-Meteo API",
              "OpenStreetMap",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-center text-sm font-medium text-foreground"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
