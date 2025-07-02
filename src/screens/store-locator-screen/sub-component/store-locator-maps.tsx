import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import router from "next/router";
import React, { useState } from "react";

//import { MapPinIcon } from "@/components";
import { GOOGLE_MAPS_CONFIG } from "@/config";
import { StoreLocator } from "@/interface";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 10.745,
  lng: 77.523,
};

interface StoreLocatorMapsProps {
  storesList: Array<StoreLocator>;
}

const StoreLocatorMaps: React.FC<StoreLocatorMapsProps> = ({ storesList }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAPS_CONFIG.apiKey,
  });

  const [maxZoom, setMaxZoom] = useState<number>(5);

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    // This is just an example of getting and using the map in:stance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setTimeout(() => setMaxZoom(25), 2000);
  }, []);

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    console.log(map);
  }, []);

  const handleClick = (code: string) => {
    router.push(`/store-detail/${code}`);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        zoom: 5,
        maxZoom,
      }}
    >
      {storesList.map((data) => (
        <>
          <Marker
            position={{
              lat: parseFloat(data.latitude),
              lng: parseFloat(data.longitude),
            }}
            title={data.name}
            key={data.id}
            onClick={() => handleClick(data.code)}
            icon={{
              url: "/MapPin.png",
              anchor: new google.maps.Point(5, 58),
            }}
          />

          {/* <InfoWindow
            position={{
              lat: parseFloat(data.latitude),
              lng: parseFloat(data.longitude),
            }}
          >
            <p>{data.name}</p>
          </InfoWindow> */}
        </>
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(StoreLocatorMaps);
