"use client";
import Button_Primary from "@/atoms/Buttons/Button-Primary";
import Button_Secondary from "@/atoms/Buttons/Button-Secondary";
import React from "react";
import { SolutionData } from "./data";

function Solutions() {
  const solutionCategory = [
    "Cultural and Public Spaces",
    "Working Spaces",
    "Residential",
    "Hospitality",
    "Retail",
  ];
  const [category, setCategory] = React.useState(solutionCategory[0]);
  return (
    <div className="flex flex-col p-20 px-32 gap-8">
      <h1 className="text-5xl font-medium tracking-widest">
        Explore our Projects
      </h1>
      <div className="flex flex-row items-center">
        <p className="w-4/5 text-base text-gray-700">
          Step inside the spaces, homes, environments and lives that Flos has
          touched.
        </p>
        <div className="w-1/5">
          {/* <Button_Secondary text="VIEW ALL" /> */}
        </div>
      </div>
      <div className="flex flex-row gap-12">
        <ul className="w-1/2 flex flex-col gap-8 text-4xl font-medium items-start tracking-wider">
          {solutionCategory.map((el, index) => (
            <li
              className={`cursor-pointer w-full ${
                el == category ? "text-black" : "text-gray-400"
              }`}
              key={index}
              onMouseEnter={() => setCategory(el)}
            >
              {el}
            </li>
          ))}
        </ul>
        <div className="w-1/2 flex flex-row gap-4">
          {SolutionData.filter((el) => el.category == category)
            .slice(0, 2)
            .map((solution, index) => {
              return (
                <div className="flex flex-col gap-4" key={index}>
                  <img
                    src={solution.imageurl}
                    alt=""
                    className="object-cover w-full h-80"
                  />
                  <p className="tracking-wider">{solution.caption}</p>
                  <p className="text-gray-600">
                    {/* {solution.place} ({solution.country}) */}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Solutions;
