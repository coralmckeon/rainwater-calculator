"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="mb-8">
        <Link href="/" className="text-primary hover:text-primary-dark text-sm">
          &larr; Back to Calculator
        </Link>
      </nav>

      <h1 className="text-4xl font-bold text-foreground mb-6">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-muted mb-6">
            Have questions about the calculator, suggestions for improvement, or
            want to report an issue? We would love to hear from you. Fill out the
            form and we will get back to you as soon as possible.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-primary mt-1 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <p className="font-medium text-foreground">Email</p>
                <p className="text-sm text-muted">
                  info@rainwatercalculator.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-primary mt-1 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <p className="font-medium text-foreground">Location</p>
                <p className="text-sm text-muted">United States</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-border rounded-xl p-6">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-white"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Subject
              </label>
              <select
                id="subject"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-white"
              >
                <option>General Inquiry</option>
                <option>Bug Report</option>
                <option>Feature Request</option>
                <option>Data Question</option>
                <option>Partnership</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-white resize-none"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="button"
              className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2.5 rounded-lg transition-colors"
              onClick={() => alert("Thank you for your message! This is a demo form.")}
            >
              Send Message
            </button>
            <p className="text-xs text-muted text-center">
              This is a demonstration form. Messages are not currently being collected.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
