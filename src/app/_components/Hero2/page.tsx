import Button_Primary from "@/atoms/Buttons/Button-Primary";
import React from "react";

function Hero2() {
  return (
    <div className="w-screen h-screen bg-black flex">
      <div className="w-2/5 p-16 text-white gap-4 flex justify-items-end">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="text-6xl text-bold">Bespoke</h1>
          <p className="text-lg text-semibold">
            Made-to-order solutions, advanced technologies, and multiple
            customization levels.
          </p>
          <div className="mt-8">
            <Button_Primary text={"Unlock Solutions"} />
          </div>
        </div>
      </div>
      <img src="/img/bespoke.webp" alt="" className="w-3/5 object-cover" />
    </div>
  );
}

export default Hero2;
