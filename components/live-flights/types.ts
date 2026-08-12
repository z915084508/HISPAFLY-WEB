export type PublicLiveFlight = {
  flightNumber: string;
  callsign: string;
  departureIcao: string;
  arrivalIcao: string;
  aircraftRegistration: string;
  aircraftType: string;
  phase: string;
  connectionStatus: "ONLINE" | "DELAYED" | "OFFLINE" | "COMPLETED";
  sessionStatus: string;
  lastHeartbeatAt: string;
  latitude: number | null;
  longitude: number | null;
  altitudeFeet: number | null;
  groundSpeedKnots: number | null;
  headingDegrees: number | null;
};
