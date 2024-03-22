import Button_Primary_Black from "@/atoms/Buttons/Button-Primary-Black";
import React from "react";
import { LuLaptop, LuCalendar } from "react-icons/lu";

function Page() {
  return (
    <div className="flex flex-col">
      <div className="h-screen p-12 py-24 flex flex-col gap-12 items-center bg-hero-pattern-6 bg-cover">
        <h1 className="text-6xl font-semibold w-4/5 text-white tracking-widest text-center">
          Book an appointment
        </h1>
        <div className="w-1/2 p-12 h-full bg-orange-50 flex flex-col items-center gap-4 ">
          <p className="text-gray-900 text-sm tracking-wider font-sans">
            Are you looking for advice? We'd be happy to help you find a
            lighting solution!
          </p>
          <div className="">
            <Button_Primary_Black text="SHOWROOM APPOINTMENT" />
          </div>
          <div className="">
            <Button_Primary_Black text="VIRTUAL APPOINTMENT" />
          </div>
        </div>
      </div>
      <div className="h-screen flex flex-col px-12 py-24 gap-4">
        <div className="flex justify-end ">
          <div className="flex flex-col gap-4 w-1/2">
            <h3 className="text-3xl font-medium tracking-wider">
              Project Consultancy
            </h3>
            <p className="text-xs tracking-wider leading-5">
              The Totalis sales team provides consultancy on the selection and
              combination of different products, whether for small spaces such
              as private homes or large-scale projects such as hotels, museums,
              and retail spaces.
            </p>
          </div>
        </div>
        <div className="h-full flex gap-8">
          <img
            src="/img/iwood-R5v8Xtc0ecg-unsplash.jpg"
            alt=""
            height={400}
            className=" w-1/4 object-cover transform -translate-y-8"
          />
          <img
            src="/img/lotus-design-n-print--Vfa35ueUCo-unsplash.jpg"
            alt=""
            className="w-3/4 h-4/5 self-end object-cover"
          />
        </div>
      </div>
      <div className="h-screen flex flex-col px-12 py-24 gap-4 mt-8">
        <div className="flex justify-start ">
          <div className="flex flex-col gap-4 w-1/3">
            <h3 className="text-3xl font-medium tracking-wider">
              Product Consultancy
            </h3>
            <p className="text-xs tracking-wider leading-5">
              We can help with the assembly of complex products and provide
              technical assistance on any aspect of light design.
            </p>
          </div>
        </div>
        <div className="h-full flex gap-8">
          <img
            src="/img/r-architecture-rOk4VSMS3Ck-unsplash.jpg"
            alt=""
            className="w-3/4 h-4/5 self-end object-cover"
          />
          <img
            src="/img/olga-simonova-M4ho-kpi6VQ-unsplash.jpg"
            alt=""
            height={400}
            className=" w-1/4 object-cover transform -translate-y-8"
          />
        </div>
      </div>
      <div className="p-12 py-24 flex flex-col bg-stone-100 mt-12 gap-12">
        <h1 className="text-4xl font-medium tracking-wide ">
          What type of appointment would you like to book?
        </h1>
        <div className="flex gap-16">
          <div className="w-1/2 h-48 flex bg-white p-12 hover:border hover:border-black box-border cursor-pointer">
            <div className="flex w-2/3 flex-col gap-4">
              <h2 className="text-2xl tracking-wide font-medium">
                Virtual appointment
              </h2>
              <p className="text-sm tracking-wider">
                Book an online appointment with our team, who will contact you
                via phone, video chat, or email.
              </p>
            </div>
            <div className="w-1/3 flex justify-center text-4xl">
              <LuLaptop />
            </div>
          </div>
          <div className="w-1/2 h-48 flex bg-white p-12 hover:border hover:border-black box-border cursor-pointer">
            <div className="flex w-2/3 flex-col gap-4">
              <h2 className="text-2xl tracking-wide font-medium">
                Showroom appointment
              </h2>
              <p className="text-sm tracking-wider">
                Book a private visit to your nearest totalis showroom
              </p>
            </div>
            <div className="w-1/3 flex justify-center text-4xl">
              <LuCalendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
