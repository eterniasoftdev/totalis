import React from "react";
import { individualProductType } from "../data";

function Specifications({ data }: { data: individualProductType }) {
  return (
    <div className="flex flex-col w-full">
      <div className="h-screen flex flex-col p-12 ">
        <div className="flex justify-end ">
          <div className="flex flex-col gap-4 w-1/2">
            <h3 className="text-3xl font-medium tracking-wider">
              Specifications
            </h3>
            <p className="text-xs tracking-wider leading-5">
              {data.specification.map((spec) => (
                <p>{spec}</p>
              ))}
            </p>
          </div>
        </div>
        <div className="h-full flex gap-8">
          <img
            src={data.imageURL[0]}
            alt=""
            height={400}
            className=" w-1/4 object-cover transform -translate-y-8"
          />
          <img
            src={data.imageURL[1]}
            alt=""
            className="w-3/4 h-5/6 self-end object-cover"
          />
        </div>
      </div>
      <div className="h-screen flex flex-col p-12 mt-12">
        <div className="flex justify-start ">
          <div className="flex flex-col gap-4 w-1/2">
            <h3 className="text-3xl font-medium tracking-wider">
              Performance Parameters
            </h3>
            <p className="text-xs tracking-wider leading-5">
              {data.performanceParameters.map((spec) => (
                <p>
                  {spec.value}{" "}
                  <span className="text-xs text-gray-600">{spec.subValue}</span>
                </p>
              ))}
            </p>
          </div>
        </div>
        <div className="h-full flex gap-8">
          <img
            src={data.imageURL[2]}
            alt=""
            className="w-3/4 h-5/6 self-end object-cover"
          />
          <img
            src={data.imageURL[3]}
            alt=""
            height={400}
            className=" w-1/4 object-cover transform -translate-y-8"
          />
        </div>
      </div>
    </div>
  );
}

export default Specifications;
