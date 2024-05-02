"use client";
import React from "react";
// import AgentMap from "./_components/AgentMap";
import { LatLngExpression } from "leaflet";
import dynamic from "next/dynamic";
const AgentMap = dynamic(() => import("./_components/AgentMap"), {
  ssr: false,
});
export type AgentType = {
  name: string;
  latlng: LatLngExpression;
  description: string;
};
const agents: AgentType[] = [
  {
    name: "Bharat Polyzone Private Limited",
    latlng: [28.536795394594428, 77.15845149999998],
    description: "Delhi",
  },
  {
    name: "JK COATING CENTRE",
    latlng: [19.164785000000006, 72.85322660000001],
    description: "Mumbai",
  },
  {
    name: "STRONGHOLD TECHNICAL SERVICES",
    latlng: [22.32498480000001, 73.14569929999999],
    description: "Gujarat",
  },
  {
    name: "POLARIS INFRASOLUTIONS PVT LTD",
    latlng: [13.054177700000016, 80.24629009999998],
    description: "Chennai",
  },
  {
    name: "HARDWARE WORLD",
    latlng: [15.922096438576768, 80.76101639999997],
    description: "Vijayawada",
  },
  {
    name: "METAL HOUSE",
    latlng: [17.412453260202874, 78.40804555000001],
    description: "Hyderabad",
  },
  {
    name: "CHHATTISGARH WOOD INDUSTRIES",
    latlng: [21.889680200000015, 83.3549837],
    description: "Raigarh",
  },
  {
    name: "Sadi Ram Vishwa Prakash",
    latlng: [26.845002200000014, 80.92745929999998],
    description: "Lucknow",
  },
  // Add more agents as needed
];
function Page() {
  return (
    <div>
      <AgentMap agents={agents} />
    </div>
  );
}

export default Page;
