"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { geocodeAddress } from "@/lib/api";

interface GeoResult {
  displayName: string;
  lat: number;
  lng: number;
  state: string;
  city: string;
  county: string;
}

interface AddressInputProps {
  onLocationSelect: (location: GeoResult) => void;
  selectedLocation: GeoResult | null;
}

export default function AddressInput({
  onLocationSelect,
  selectedLocation,
}: AddressInputProps) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<GeoResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const searchAddress = useCallback(async (searchQuery: string) => {
    if (searchQuery.length < 3) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);
    try {
      const data = await geocodeAddress(searchQuery);
      setSuggestions(data);
      setShowSuggestions(true);
    } catch (error) {
      console.error("Geocoding error:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleInputChange = (value: string) => {
    setQuery(value);
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    debounceTimer.current = setTimeout(() => {
      searchAddress(value);
    }, 400);
  };

  const handleSelect = (result: GeoResult) => {
    setQuery(result.displayName);
    setShowSuggestions(false);
    onLocationSelect(result);
  };

  return (
    <div ref={wrapperRef} className="relative w-full">
      <label
        htmlFor="address-input"
        className="block text-sm font-medium text-foreground mb-2"
      >
        Enter your address or city
      </label>
      <div className="relative">
        <input
          id="address-input"
          type="text"
          value={query}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
          placeholder="e.g., 123 Main St, Austin, TX or Denver, Colorado"
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-white placeholder:text-gray-400"
        />
        {isLoading && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-border rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {suggestions.map((result, index) => (
            <li key={index}>
              <button
                type="button"
                onClick={() => handleSelect(result)}
                className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm text-foreground border-b border-gray-100 last:border-b-0"
              >
                <span className="font-medium">
                  {result.city || result.county}
                  {result.state ? `, ${result.state}` : ""}
                </span>
                <br />
                <span className="text-xs text-muted">{result.displayName}</span>
              </button>
            </li>
          ))}
        </ul>
      )}

      {selectedLocation && (
        <div className="mt-3 p-3 bg-teal-50 border border-teal-200 rounded-lg">
          <div className="flex items-start gap-2">
            <svg
              className="w-5 h-5 text-secondary mt-0.5 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="text-sm font-medium text-secondary">
                Selected Location
              </p>
              <p className="text-sm text-foreground">
                {selectedLocation.city || selectedLocation.county}
                {selectedLocation.state
                  ? `, ${selectedLocation.state}`
                  : ""}
              </p>
              <p className="text-xs text-muted mt-1">
                Coordinates: {selectedLocation.lat.toFixed(4)},{" "}
                {selectedLocation.lng.toFixed(4)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
