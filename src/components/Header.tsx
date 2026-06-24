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
              className="w-8 h-8 text-primary"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
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
              <button className="px-3 py-2 text-sm font-medium text-muted hover:text-foreground rounded-md hover:bg-gray-50 transition-colors flex items-center gap-1">
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
              className="px-3 py-2 text-sm font-medium text-muted hover:text-foreground rounded-md hover:bg-gray-50 transition-colors"
            >
              Regulations
            </Link>
            <Link
              href="/resources"
              className="px-3 py-2 text-sm font-medium text-muted hover:text-foreground rounded-md hover:bg-gray-50 transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 text-sm font-medium text-muted hover:text-foreground rounded-md hover:bg-gray-50 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-muted hover:text-foreground rounded-md hover:bg-gray-50 transition-colors"
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
