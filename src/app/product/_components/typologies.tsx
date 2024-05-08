import React from "react";
import { individualProductType } from "../../../lib/productData";

function Typologies({ data }: { data: individualProductType }) {
  return (
    <div>
      {" "}
      <div className="grid grid-cols-12 justify-around gap-4">
        {data.typologies?.map((typology, index) => {
          return (
            <div className={"col-span-4 h-72 flex flex-col "} key={index}>
              <img
                src={typology.imageurl}
                alt=""
                className={"object-contain h-5/6 w-full " + typology.className}
              />
              <p className="text-center">{typology.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Typologies;
