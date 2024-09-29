import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React from "react";

interface IMapProps {
  coordinates: Array<{ lat: number; lng: number }>;
  google: string; // Replace 'any' with an accurate type if available
}

const containerStyle = {
  width: "100%",
  height: "400px", // Adjust the height as needed
};

const MapContainer: React.FC<IMapProps> = ({ coordinates, google }) => {
  const center = coordinates.length > 0 ? coordinates[0] : { lat: 0, lng: 0 };

  return (
    <LoadScript googleMapsApiKey={google}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {coordinates.map((coord, index) => (
          <Marker key={index} position={coord} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
