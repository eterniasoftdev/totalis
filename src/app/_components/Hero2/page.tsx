import Button_Primary from "@/atoms/Buttons/Button-Primary";
import React from "react";
function Hero2() {
  return (
    <div className="w-screen h-screen flex my-8">
      {/* <div className="w-2/5 p-16 text-white gap-4 flex justify-items-end">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="text-6xl text-bold">Bespoke</h1>
          <p className="text-lg text-semibold">
            Made-to-order solutions, advanced technologies, and multiple
            customization levels.
          </p>
          <div className="mt-8">
            <Button_Primary text={"Unlock Solutions"} className="" />
          </div>
        </div>
      </div> */}

      <img
        src="/img/Totalis_Leaflet_product.jpg"
        alt=""
        className="w-full object-contain"
      />
    </div>
  );
}

export default Hero2;
