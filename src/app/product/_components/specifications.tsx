"use client";
import React from "react";
import { individualProductType } from "../../../lib/productData";

function Specifications({ data }: { data: individualProductType }) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row h-screen p-12 gap-4">
        <div className="hidden lg:block w-1/4 h-full">
          <img
            src={data.imageURL[0]}
            alt=""
            className="w-full object-cover h-3/4"
          />
        </div>
        <div className=" flex flex-col w-full lg:w-3/4 h-full gap-4">
          <div className="flex justify-end">
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-medium tracking-wider">
                Product Specifications
              </h3>
              <div className="text-xs tracking-wider leading-5 flex flex-col justify-end items-end">
                {data.specification.map((spec, index) => (
                  <p key={index}>{spec}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="flex h-full w-full gap-8">
            <img
              src={data.imageURL[1]}
              alt=""
              className="h-2/3 w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row h-screen px-12 gap-4">
        <div className=" flex flex-col w-full lg:w-3/4 h-full gap-4">
          <div className="flex justify-start">
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-medium tracking-wider">
                Performance Parameters
              </h3>
              <div className="text-xs tracking-wider leading-5">
                {data.performanceParameters.map((spec, index) => (
                  <p key={index}>
                    {spec.value}{" "}
                    <span className="text-xs text-gray-600">
                      {spec.subValue}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="flex w-full gap-8 h-full">
            <img
              src={data.imageURL[2]}
              alt=""
              className="h-2/3 w-full object-cover"
            />
          </div>
        </div>
        <div className="hidden lg:block w-1/4 h-full">
          <img
            src={data.imageURL[3]}
            alt=""
            className=" w-full object-cover h-3/4"
          />
        </div>
      </div>
    </div>
  );
}

export default Specifications;
