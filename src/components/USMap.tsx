"use client";

import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

// Fix default marker icon issue with webpack
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface USMapProps {
  onLocationSelect: (lat: number, lng: number) => void;
  selectedPosition: [number, number] | null;
}

function MapClickHandler({
  onLocationSelect,
}: {
  onLocationSelect: (lat: number, lng: number) => void;
}) {
  useMapEvents({
    click(e) {
      onLocationSelect(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

export default function USMap({
  onLocationSelect,
  selectedPosition,
}: USMapProps) {
  const [markerPos, setMarkerPos] = useState<[number, number] | null>(
    selectedPosition
  );

  const handleClick = (lat: number, lng: number) => {
    setMarkerPos([lat, lng]);
    onLocationSelect(lat, lng);
  };

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden border border-border">
      <MapContainer
        center={[39.8283, -98.5795]}
        zoom={4}
        className="w-full h-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapClickHandler onLocationSelect={handleClick} />
        {(markerPos || selectedPosition) && (
          <Marker
            position={markerPos || selectedPosition!}
            icon={defaultIcon}
          />
        )}
      </MapContainer>
    </div>
  );
}
