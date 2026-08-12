"use client";

import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { PublicLiveFlight } from "./types";

const icon = (status: string, heading: number | null) => L.divIcon({
  className: "live-public-marker-host",
  html: `<div class="live-public-marker live-public-${status.toLowerCase()}" style="transform:rotate(${heading ?? 0}deg)">✈</div>`,
  iconSize: [38, 38],
  iconAnchor: [19, 19],
});

export default function PublicLiveMap({ flights }: { flights: PublicLiveFlight[] }) {
  const visible = flights.filter((flight) => flight.latitude !== null && flight.longitude !== null);
  return <MapContainer className="h-[520px] w-full" center={[40.2, -3.7]} zoom={5} scrollWheelZoom>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="© OpenStreetMap contributors" />
    {visible.map((flight) => <Marker key={`${flight.flightNumber}-${flight.callsign}`} position={[flight.latitude!, flight.longitude!]} icon={icon(flight.connectionStatus, flight.headingDegrees)}>
      <Popup><strong>{flight.flightNumber}</strong><br />{flight.departureIcao} → {flight.arrivalIcao}<br />{flight.aircraftRegistration} · {flight.phase}<br />{flight.altitudeFeet?.toFixed(0) ?? "—"} ft</Popup>
    </Marker>)}
  </MapContainer>;
}
