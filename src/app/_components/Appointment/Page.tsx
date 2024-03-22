import Button_Primary_Black from "@/atoms/Buttons/Button-Primary-Black";
import React from "react";

function Appointment() {
  return (
    <div className="h-96 flex flex-col gap-4 p-20 px-32 bg-gray-100">
      <h3 className="text-sm font-semibold tracking-widest uppercase">
        Book an Appointment
      </h3>
      <div className="flex gap-20 my-2">
        <h1 className="text-4xl font-normal w-1/2 tracking-wider">
          Are you a professional and your project needs consulting and support?
        </h1>
        <div className="w-1/2">
          <p className="text-lg text-semibold">
            An exclusive one-in-one service for our professional clients
            providing specialist support and advice.
          </p>
          <div className="mt-12">
            <Button_Primary_Black text="Book An Appointment" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
