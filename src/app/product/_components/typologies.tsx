import React from "react";
import { individualProductType } from "../../../lib/productData";

function Typologies({ data }: { data: individualProductType }) {
  return (
    <div>
      {" "}
      <div className="flex flex-wrap justify-around gap-4">
        {data.typologies?.map((typology, index) => {
          return (
            <img
              src={typology.imageurl}
              alt=""
              className="object-contain h-96"
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Typologies;
