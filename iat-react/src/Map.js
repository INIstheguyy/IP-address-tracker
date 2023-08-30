import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './index.css'

import L from 'leaflet';
import iconUrl from './assets/images/marker-removebg-preview.png'; // Replace with your custom marker image URL

const customIcon = new L.Icon({
  iconUrl,
  iconSize: [32, 32], // Set the size of your custom marker icon
  iconAnchor: [16, 32], // Adjust the anchor point if needed
});


function MapComponent({ data }) {

  


  const lat = data?.location?.lat ? data?.location?.lat : 51.505;

  const lng = data?.location.lng ? data?.location?.lng : -0.09;



  const position = [lat, lng];

  const mapKey = position.join(",");

  console.log(position);

  return (
    <MapContainer
      key={mapKey}
      center={position}
      zoom={19}
      style={{ height: "100vh", width:"100%", zIndex:"-1", position: "absolute"}}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
  <Popup>
    A marker for the selected location.
  </Popup>
</Marker>

    </MapContainer>
  );
}

export default MapComponent;
