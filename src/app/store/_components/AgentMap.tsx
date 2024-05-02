"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { AgentType } from "../page";
// delete Leaflet.Icon.Default.prototype._getIconUrl;
type props = {
  agents: AgentType[];
};
const AgentMap = ({ agents }: props) => {
  const defaultZoom = 4;

  return (
    <div className="pt-24" style={{ height: "600px", width: "100%" }}>
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={defaultZoom}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {agents.map((agent, index) => (
          <Marker key={index} position={agent.latlng}>
            <Popup>
              <strong>{agent.name}</strong>
              <br />
              {agent.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default AgentMap;
