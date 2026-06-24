import Link from "next/link";

export default function WhatPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="mb-8">
        <Link href="/" className="text-primary hover:text-primary-dark text-sm">
          &larr; Back to Calculator
        </Link>
      </nav>

      <h1 className="text-4xl font-bold text-foreground mb-6">
        What is Rainwater Harvesting?
      </h1>

      <div className="prose max-w-none">
        <p className="text-lg text-muted mb-6">
          Rainwater harvesting is the practice of collecting and storing
          rainwater that falls on roofs, land surfaces, or other catchment
          areas for later use. It is one of the oldest and most sustainable
          methods of water supply, used by civilizations for thousands of
          years.
        </p>

        <div className="bg-white border border-border rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            How It Works
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center shrink-0">
                <span className="text-primary font-bold">1</span>
              </div>
              <div>
                <h3 className="font-medium text-foreground">Collection</h3>
                <p className="text-muted text-sm">
                  Rain falls on your roof or other catchment surface. The
                  larger and smoother the surface, the more water you can
                  collect. A 1,000 sq ft roof in an area with 30 inches of
                  annual rainfall can capture approximately 18,000 gallons per
                  year.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center shrink-0">
                <span className="text-primary font-bold">2</span>
              </div>
              <div>
                <h3 className="font-medium text-foreground">Conveyance</h3>
                <p className="text-muted text-sm">
                  Gutters and downspouts channel rainwater from the roof to a
                  storage system. First-flush diverters remove the initial
                  runoff, which may contain debris and contaminants from the
                  roof surface.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center shrink-0">
                <span className="text-primary font-bold">3</span>
              </div>
              <div>
                <h3 className="font-medium text-foreground">Storage</h3>
                <p className="text-muted text-sm">
                  Water is stored in tanks, cisterns, or barrels. Storage
                  vessels range from simple 55-gallon rain barrels to
                  underground cisterns holding thousands of gallons. Tanks
                  should be opaque and sealed to prevent algae growth and
                  mosquito breeding.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center shrink-0">
                <span className="text-primary font-bold">4</span>
              </div>
              <div>
                <h3 className="font-medium text-foreground">
                  Treatment &amp; Distribution
                </h3>
                <p className="text-muted text-sm">
                  Depending on the intended use, water may be filtered and
                  treated. For irrigation use, minimal treatment is needed. For
                  indoor non-potable use (toilets, laundry), basic filtration
                  is recommended. For potable use, full treatment including UV
                  sterilization or reverse osmosis is necessary.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-border rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Types of Systems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-foreground mb-2">
                Simple Rain Barrel
              </h3>
              <p className="text-sm text-muted">
                The most basic setup. A barrel (typically 55 gallons) placed
                under a downspout. Great for garden watering. Low cost ($50-150)
                and easy to install. Limited capacity means it fills quickly
                during heavy rain.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">
                Dry System
              </h3>
              <p className="text-sm text-muted">
                Pipes from gutters lead directly to a storage tank positioned
                next to the house. Called &quot;dry&quot; because the pipes
                empty completely between rainfalls. Simple and affordable,
                suitable for areas with infrequent but heavy rainfall.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">
                Wet System
              </h3>
              <p className="text-sm text-muted">
                Underground pipes connect multiple downspouts to a central
                tank that may be located away from the house. Pipes remain
                full of water (hence &quot;wet&quot;). More flexible tank
                placement but higher installation cost.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">
                Complete Potable System
              </h3>
              <p className="text-sm text-muted">
                A full system with first-flush diversion, large cistern
                storage, multi-stage filtration, UV treatment, and pressure
                pump. Can serve as a primary water source. Most expensive but
                provides the most water independence.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-border rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Key Factors Affecting Collection
          </h2>
          <ul className="space-y-3 text-muted">
            <li className="flex gap-2">
              <span className="text-primary font-bold">&bull;</span>
              <span>
                <strong className="text-foreground">Rainfall Amount:</strong>{" "}
                Your location&apos;s annual precipitation is the biggest
                factor. Areas receiving 30+ inches per year have excellent
                harvesting potential.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">&bull;</span>
              <span>
                <strong className="text-foreground">
                  Roof Area &amp; Material:
                </strong>{" "}
                Larger roofs collect more water. Metal roofs are the most
                efficient (95% runoff coefficient), while flat roofs are the
                least efficient (65%).
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">&bull;</span>
              <span>
                <strong className="text-foreground">
                  Rainfall Distribution:
                </strong>{" "}
                Evenly distributed rainfall throughout the year is more
                useful than the same total concentrated in a few months.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">&bull;</span>
              <span>
                <strong className="text-foreground">Storage Capacity:</strong>{" "}
                You need enough storage to capture water during rainy periods
                for use during dry periods. Under-sizing your tank means lost
                potential; over-sizing wastes money.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">&bull;</span>
              <span>
                <strong className="text-foreground">
                  First-Flush Loss:
                </strong>{" "}
                The first rain after a dry period washes debris off the roof.
                Most systems divert this initial flow (typically the first 1
                gallon per 100 sq ft of roof), reducing actual collection
                slightly.
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-cyan-900 mb-2">
            Ready to Calculate Your Potential?
          </h2>
          <p className="text-cyan-800 mb-4">
            Use our free calculator to estimate how much rainwater you can
            harvest based on your specific location and property details.
          </p>
          <Link
            href="/"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-medium px-6 py-2 rounded-lg transition-colors"
          >
            Go to Calculator
          </Link>
        </div>
      </div>
    </div>
  );
}
