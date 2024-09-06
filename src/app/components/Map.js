// src/app/components/Map.js

"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = () => {
  const containerStyle = { width: "100%", height: "400px" };
  const center = { lat: 40.7128, lng: -74.006 }; // Example coordinates for New York

  return (
    <LoadScript googleMapsApiKey="AIzaSyAFPide0eJeQt6iR5g51UCIwscklCsS_nI">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
