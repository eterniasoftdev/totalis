"use client";
import React, { useState } from "react";

function Page() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeIndex2, setActiveIndex2] = useState(-1);
  const toggleDescription = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };
  const toggleDescription2 = (index: number) => {
    setActiveIndex2(activeIndex2 === index ? -1 : index);
  };
  const whyChooseData = [
    {
      title: "Rigorously Tested and Certified",
      description:
        "Totalis windows and doors undergo comprehensive testing for wind, water and air parameters matching global standards such as EN and ASTM.",
    },
    {
      title: "Superior Strength & Durability",
      description:
        "Crafted from premium-grade aluminium extrusions by Hindalco",
    },
    {
      title: "Exceptional Design",
      description:
        "Our value-engineered products are meticulously designed to provide the best-in-class experience, ensuring both functionality and aesthetic appeal.",
    },
    {
      title: "Mark of Authenticity",
      description:
        "Totalis windows and doors are equipped with authenticity holograms, serving as a visible proof of their genuine quality and origin.",
    },
    {
      title: "Effortless Operation",
      description:
        "Factory made and extensively tested for smooth and hassle-free operation.",
    },
  ];

  const whyChooseData_2 = [
    {
      title: "Unparalleled Strength",
      description:
        "Manufactured from Hindalcos&apos; high-quality aluminium extrusions, providing unmatched strength as compared to other material windows.",
    },
    {
      title: "Superior Performance and High Durability",
      description:
        "Protection against diverese weather conditions like high winds, heavy rain, and extreme temperatures.",
    },
    {
      title: "Sleek Aesthetics",
      description:
        "Aleek and modern appearance, enhancing the overall aesthetics of your space.",
    },
    {
      title: " Environmentally Sustainable",
      description:
        "Highly sustainable, since aluminium is an eternally recyclable material.",
    },
    {
      title: "versatile Design Options",
      description:
        "Factory made and extensively tested for smooth and hassle-free operation.",
    },
    {
      title: "Low Maintenance",
      description:
        "Resistant to rust, corrosion, and termite infestations, eliminating the need for frequent painting or staining.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-12 p-12 py-32 text-black">
      <div className="md:w-1/2 flex flex-col justify-start items-start gap-8">
        <div className="flex flex-col w-3/4 text-white">
          <h2 className="p-2 bg-indigo-800 text-start text-lg">
            Why Choose Totalis
          </h2>
          <h1 className="p-2 bg-green-600 text-start text-lg">
            Over untested Windows?
          </h1>
        </div>
        {whyChooseData.map((data, index) => (
          <div className="flex flex-col w-full text-sm gap-6" key={index}>
            <div className="flex flex-col gap-2 flex-grow">
              <p
                className="text-indigo-800 font-medium cursor-pointer"
                onClick={() => toggleDescription(index)}
              >
                {data.title}
              </p>
              <p
                className={`transition-opacity duration-500 ease-in-out ${
                  activeIndex === index ? "opacity-100" : "opacity-0 hidden"
                }`}
              >
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="md:w-1/2 flex flex-col justify-start items-start gap-8">
        <div className="flex flex-col w-3/4 text-white">
          <h2 className="p-2 bg-indigo-800 text-start text-lg">
            Why Choose Totalis
          </h2>
          <h1 className="p-2 bg-green-600 text-start text-lg">
            Over Non-Aluminium Windows?
          </h1>
        </div>
        {whyChooseData_2.map((data, index) => (
          <div className="flex flex-col w-full text-sm gap-6" key={index}>
            <div className="flex flex-col gap-2 flex-grow">
              <p
                className="text-indigo-800 font-medium cursor-pointer"
                onClick={() => toggleDescription2(index)}
              >
                {data.title}
              </p>
              <p
                className={`transition-opacity duration-500 ease-in-out ${
                  activeIndex2 === index ? "opacity-100" : "opacity-0 hidden"
                }`}
              >
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
