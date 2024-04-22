import React from "react";
import { individualProductType } from "../../../lib/productData";

function Assembly({ data }: { data: individualProductType }) {
  return (
    <div className="flex flex-wrap justify-around gap-8">
      <img
        src={data.assembly[0].imageurl}
        alt=""
        className="object-contain h-96"
      />
      <img
        src={data.assembly[1].imageurl}
        alt=""
        className="object-contain h-96"
      />
    </div>
  );
}

export default Assembly;
