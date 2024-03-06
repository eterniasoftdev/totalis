import React from "react";

function Footer() {
  return (
    <div className="w-screen h-screen bg-black p-20 mt-12 flex flex-col">
      <div className="text-white flex flex-row gap-12 font-mono">
        <div className="text-4xl flex flex-col gap-12 items-start w-1/2 justify-items-start ">
          <div className="">e-Shop</div>
          <div className="">About Totlis</div>
          <div className="">Downloads</div>
          <div className="">Contacts</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
