import Button_Primary from "@/atoms/Buttons/Button-Primary";
import Button_Primary_Black from "@/atoms/Buttons/Button-Primary-Black";
import Link from "next/link";
import React from "react";
import { FaHandsHelping } from "react-icons/fa";
function StickyNav() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link href={"/contact"}>
        <Button_Primary_Black
          text="Contact Us"
          className="w-56 px-4 bg-indigo-800"
        />
        {/* <div className="h-10 w-10 rounded-full bg-stone-200 flex items-center justify-center cursor-pointer">
          <FaHandsHelping />
        </div> */}
      </Link>
      {/* <div className="w-screen h-screen p-8 flex items-end justify-end absolute">
   
      </div> */}
    </div>
  );
}

export default StickyNav;
