import React from "react";

function Page() {
  return (
    <div className="flex flex-col md:flex-row gap-12 p-12 py-32">
      <div className="md:w-1/2 flex flex-col justify-start items-start gap-8">
        <div className="flex flex-col w-3/4 text-white">
          <h1 className="p-2 bg-indigo-800 text-start text-lg">
            Why Choose Totalis
          </h1>
          <h1 className="p-2 bg-green-600 text-start text-lg">
            Over untested Windows?
          </h1>
        </div>
        <div className="flex flex-col w-full text-sm gap-6">
          <div className="flex flex-col gap-2 flex-grow">
            <p className="text-indigo-800 font-medium">
              Rigorously Tested and Certified
            </p>
            <p className="">
              Totalis windows and doors undergo comprehensive testing for wind,
              water and air parameters matching global standards such as EN and
              ASTM.
            </p>
          </div>
          <div className="flex flex-col gap-2 flex-grow">
            <p className="text-indigo-800 font-medium">
              Superor Strength & Durability
            </p>
            <p className="">
              Crafted from premium-grade aluminium extrusions by Hindalco
            </p>
          </div>
          <div className="flex flex-col gap-2 flex-grow">
            <p className="text-indigo-800 font-medium">Exceptional Design</p>
            <p className="">
              Our value-engineered products are meticulously designed to provide
              the best-in-class experience, ensuring both functionality and
              aesthetic appeal.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-2 flex-grow">
            <p className="text-indigo-800 font-medium">Mark of Authenticity</p>
            <p className="">
              Totalis windows and doors are equipped with authenticity
              holograms, serving as a visible proof of their genuine quality and
              origin.
            </p>
          </div>
          <div className="flex flex-col gap-2 flex-grow">
            <p className="text-indigo-800 font-medium">Effortleff Operation</p>
            <p className="">
              Factory made and extensively tested for smooth and hassle-free
              operation.
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col justify-start items-start gap-8">
        <div className="flex flex-col w-3/4 text-white">
          <h1 className="p-2 bg-indigo-800 text-start text-lg">
            Why Choose Totalis
          </h1>
          <h1 className="p-2 bg-green-600 text-start text-lg">
            Over Non-Aluminium Windows?
          </h1>
        </div>
        <div className="flex flex-col w-full text-sm gap-6">
          <div className="flex flex-col gap-2 flex-grow">
            <p className="text-indigo-800 font-medium">
              Unparalleled Strength{" "}
            </p>
            <p className="">
              Manufactured from Hindalcos&apos; high-quality aluminium
              extrusions, providing unmatched strength as compared to other
              material windows.
            </p>
          </div>
          <div className="flex flex-col gap-2 flex-grow">
            <p className="text-indigo-800 font-medium">
              Superior Performance and High Durability
            </p>
            <p className="">
              Protection against diverese weather conditions like high winds,
              heavy rain, and extreme temperatures.
            </p>
          </div>
          <div className="flex flex-col gap-2 flex-grow">
            <p className="text-indigo-800 font-medium">Sleek Aesthetics</p>
            <p className="">
              Aleek and modern appearance, enhancing the overall aesthetics of
              your space.
            </p>
          </div>
          <div className="flex flex-col gap-2 flex-grow">
            <p className="text-indigo-800 font-medium">Low Maintenance</p>
            <p className="">
              Resistant to rust, corrosion, and termite infestations,
              eliminating the need for frequent painting or staining.
            </p>
          </div>
          <div className="flex flex-col gap-2 flex-grow">
            <p className="text-indigo-800 font-medium">
              Environmentally Sustainable
            </p>
            <p className="">
              Highly sustainable, since aluminium is an eternally recyclable
              material.
            </p>
          </div>
          <div className="flex flex-col gap-2 flex-grow">
            <p className="text-indigo-800 font-medium">
              versatile Design Options
            </p>
            <p className="">
              Choose from a wide range of colors, finishes, and hardware
              choices, enabling you to create a unique and personalised look for
              your spaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
