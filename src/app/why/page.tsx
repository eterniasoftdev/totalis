"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCertificate,
  FaShieldAlt,
  FaTag,
  FaCogs,
  FaExpand,
  FaLeaf,
  FaTint,
  FaPalette,
  FaWrench,
} from "react-icons/fa";

import { SiAntdesign } from "react-icons/si";

function Page() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeIndex2, setActiveIndex2] = useState(-1);
  const [activeTab, setActiveTab] = useState(0); // 0 for the first tab, 1 for the second tab

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
      icon: FaCertificate,
    },
    {
      title: "Superior Strength & Durability",
      description:
        "Crafted from premium-grade aluminium extrusions by Hindalco",
      icon: FaShieldAlt,
    },
    {
      title: "Exceptional Design",
      description:
        "Our value-engineered products are meticulously designed to provide the best-in-class experience, ensuring both functionality and aesthetic appeal.",
      icon: SiAntdesign,
    },
    {
      title: "Mark of Authenticity",
      description:
        "Totalis windows and doors are equipped with authenticity holograms, serving as a visible proof of their genuine quality and origin.",
      icon: FaTag,
    },
    {
      title: "Effortless Operation",
      description:
        "Factory made and extensively tested for smooth and hassle-free operation.",
      icon: FaCogs,
    },
  ];

  const whyChooseData_2 = [
    {
      title: "Unparalleled Strength",
      description:
        "Manufactured from Hindalcos&apos; high-quality aluminium extrusions, providing unmatched strength as compared to other material windows.",
      icon: FaShieldAlt,
    },
    {
      title: "Superior Performance and High Durability",
      description:
        "Protection against diverse weather conditions like high winds, heavy rain, and extreme temperatures.",
      icon: FaExpand,
    },
    {
      title: "Sleek Aesthetics",
      description:
        "A sleek and modern appearance, enhancing the overall aesthetics of your space.",
      icon: FaPalette,
    },
    {
      title: "Environmentally Sustainable",
      description:
        "Highly sustainable, since aluminium is an eternally recyclable material.",
      icon: FaLeaf,
    },
    {
      title: "Versatile Design Options",
      description:
        "Factory made and extensively tested for smooth and hassle-free operation.",
      icon: FaTint,
    },
    {
      title: "Low Maintenance",
      description:
        "Resistant to rust, corrosion, and termite infestations, eliminating the need for frequent painting or staining.",
      icon: FaWrench,
    },
  ];

  return (
    <div className="flex flex-col gap-12 p-12 py-32 text-black">
      <h1 className="flex justify-center text-3xl font-semibold">
        Why Choose Totalis
      </h1>
      <div className="flex justify-center mb-8">
        <button
          className={`flex items-center px-4 py-2 text-lg font-semibold border-b-4 transition-colors ${
            activeTab === 0
              ? "bg-indigo-800 text-white border-green-600"
              : "bg-gray-300 text-black border-transparent"
          }`}
          onClick={() => setActiveTab(0)}
        >
          Over untested Windows?
        </button>
        <button
          className={`flex items-center ml-4 px-4 py-2 text-lg font-semibold border-b-4 transition-colors ${
            activeTab === 1
              ? "bg-indigo-800 text-white border-green-600"
              : "bg-gray-300 text-black border-transparent"
          }`}
          onClick={() => setActiveTab(1)}
        >
          Over Non-Aluminium Windows?
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 0 && (
          <motion.div
            key="tab1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:px-20 md:flex-row gap-12"
          >
            <div className="md:w-1/2 flex flex-col justify-start items-start gap-8">
              {whyChooseData.map((data, index) => (
                <div className="flex flex-col w-full text-sm gap-6" key={index}>
                  <div className="flex flex-col gap-2 flex-grow">
                    <p
                      className="text-indigo-800 font-medium cursor-pointer flex items-center"
                      onClick={() => toggleDescription(index)}
                    >
                      <data.icon className="mr-2" />
                      {data.title}
                    </p>
                    <p
                      className={`transition-opacity duration-500 ease-in-out ${
                        activeIndex === index
                          ? "opacity-100"
                          : "opacity-0 hidden"
                      }`}
                    >
                      {data.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 1 && (
          <motion.div
            key="tab2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-12 md:px-20"
          >
            <div className="md:w-1/2 flex flex-col justify-start items-start gap-8">
              {whyChooseData_2.map((data, index) => (
                <div className="flex flex-col w-full text-sm gap-6" key={index}>
                  <div className="flex flex-col gap-2 flex-grow">
                    <p
                      className="text-indigo-800 font-medium cursor-pointer flex items-center"
                      onClick={() => toggleDescription2(index)}
                    >
                      <data.icon className="mr-2" />
                      {data.title}
                    </p>
                    <p
                      className={`transition-opacity duration-500 ease-in-out ${
                        activeIndex2 === index
                          ? "opacity-100"
                          : "opacity-0 hidden"
                      }`}
                    >
                      {data.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Page;
