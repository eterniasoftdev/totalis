import Button_Primary_Black from "@/atoms/Buttons/Button-Primary-Black";
import Link from "next/link";
import React from "react";

function Appointment() {
  return (
    <div className="h-auto md:h-96 flex flex-col gap-4 p-20 px-8 md:px-32 bg-gray-100 text-black">
      <h3 className="text-sm font-semibold tracking-widest uppercase">
        Submit an Enquiry
      </h3>
      <div className="flex flex-col md:flex-row gap-4 md:gap-20 my-2">
        <h1 className="text-4xl font-normal w-full md:w-1/2 tracking-wider">
          Are you someone looking for a windows partner?
        </h1>
        <div className="w-full md:w-1/2">
          <p className="text-lg text-semibold">
            Get in touch with our sales person!
          </p>
          <div className="mt-4 md:mt-12">
            <Link href="/contact">
              <Button_Primary_Black text="Submit an Enquiry" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
