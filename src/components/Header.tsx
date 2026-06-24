"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [educationDropdownOpen, setEducationDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <svg
              className="w-7 h-7 text-primary"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z" />
            </svg>
            <span className="text-xl font-bold text-foreground">
              Rainwater Calculator
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setEducationDropdownOpen(true)}
              onMouseLeave={() => setEducationDropdownOpen(false)}
            >
              <button className="px-3 py-2 text-[15px] font-medium text-slate-700 hover:text-primary rounded-md hover:bg-gray-50 transition-colors flex items-center gap-1">
                Education
                <svg
                  className={`w-4 h-4 transition-transform ${
                    educationDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {educationDropdownOpen && (
                <div className="absolute left-0 mt-0 w-56 bg-white border border-border rounded-lg shadow-lg py-1 z-50">
                  <Link
                    href="/education/what"
                    className="block px-4 py-2 text-sm text-muted hover:text-foreground hover:bg-gray-50"
                  >
                    What is Rainwater Harvesting?
                  </Link>
                  <Link
                    href="/education/why"
                    className="block px-4 py-2 text-sm text-muted hover:text-foreground hover:bg-gray-50"
                  >
                    Why Harvest Rainwater?
                  </Link>
                  <Link
                    href="/education/who"
                    className="block px-4 py-2 text-sm text-muted hover:text-foreground hover:bg-gray-50"
                  >
                    Who Can Benefit?
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/regulations"
              className="px-3 py-2 text-[15px] font-medium text-slate-700 hover:text-primary rounded-md hover:bg-gray-50 transition-colors"
            >
              Regulations
            </Link>
            <Link
              href="/resources"
              className="px-3 py-2 text-[15px] font-medium text-slate-700 hover:text-primary rounded-md hover:bg-gray-50 transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 text-[15px] font-medium text-slate-700 hover:text-primary rounded-md hover:bg-gray-50 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-[15px] font-medium text-slate-700 hover:text-primary rounded-md hover:bg-gray-50 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-muted hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-1">
              <p className="px-3 py-1 text-xs font-semibold text-muted uppercase tracking-wider">
                Education
              </p>
              <Link
                href="/education/what"
                className="block px-3 py-2 text-sm text-muted hover:text-foreground hover:bg-gray-50 rounded-md pl-6"
                onClick={() => setMobileMenuOpen(false)}
              >
                What is Rainwater Harvesting?
              </Link>
              <Link
                href="/education/why"
                className="block px-3 py-2 text-sm text-muted hover:text-foreground hover:bg-gray-50 rounded-md pl-6"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why Harvest Rainwater?
              </Link>
              <Link
                href="/education/who"
                className="block px-3 py-2 text-sm text-muted hover:text-foreground hover:bg-gray-50 rounded-md pl-6"
                onClick={() => setMobileMenuOpen(false)}
              >
                Who Can Benefit?
              </Link>
              <Link
                href="/regulations"
                className="block px-3 py-2 text-sm text-muted hover:text-foreground hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Regulations
              </Link>
              <Link
                href="/resources"
                className="block px-3 py-2 text-sm text-muted hover:text-foreground hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-sm text-muted hover:text-foreground hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-sm text-muted hover:text-foreground hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
