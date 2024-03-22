"use client";
import React from "react";
import Highlight from "./Highlight";
import Studios from "./Studios";
import Experiences from "./Experiences";

function Stories() {
  const options = ["studios", "highlights", "experienes"];
  const [selectedStory, setSelectedStory] = React.useState("studios");
  function selectCategory() {
    switch (selectedStory) {
      case options[0]:
        return <Studios key={1} />;
      case options[1]:
        return <Highlight key={2} />;
      case options[2]:
        return <Experiences key={3} />;
    }
  }
  return (
    <div className="flex flex-col h-screen px-8 py-12 gap-y-12 items-center ">
      <h3 className="text-center text-2xl text-gray-800 tracking-wide font-serif">
        Latest Stories
      </h3>
      <div className=" flex justify-items-center gap-8 items-center">
        <h2
          className={`${
            selectedStory == options[0]
              ? "text-5xl text-gray-900"
              : "text-3xl text-gray-600"
          } tracking-wide cursor-pointer`}
          onClick={() => setSelectedStory(options[0])}
        >
          Totalis Studios
        </h2>
        <h2
          className={`${
            selectedStory == options[1]
              ? "text-5xl text-gray-900"
              : "text-3xl text-gray-600"
          } tracking-wide cursor-pointer`}
          onClick={() => setSelectedStory(options[1])}
        >
          Product Highlights
        </h2>
        <h2
          className={`${
            selectedStory == options[2]
              ? "text-5xl text-gray-900"
              : "text-3xl text-gray-600"
          } tracking-wide cursor-pointer`}
          onClick={() => setSelectedStory(options[2])}
        >
          Flos Experiences
        </h2>
      </div>
      <div className="w-full w-max-full cursor-grab">{selectCategory()}</div>
    </div>
  );
}

export default Stories;
