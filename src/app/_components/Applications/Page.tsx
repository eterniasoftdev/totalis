"use client";
import Button_Primary from "@/atoms/Buttons/Button-Primary";
import Button_Primary_Black from "@/atoms/Buttons/Button-Primary-Black";
import Link from "next/link";
import React, { useState } from "react";

type ImageProp = {
  text: string;
  imageURL: string;
  link: string;
};

function ImageComponent({ text, imageURL, link }: ImageProp) {
  return (
    <div
      className="h-full w-1/3 bg-cover flex items-center justify-center"
      style={{
        backgroundImage: imageURL,
      }}
    >
      <div className="flex flex-col items-center gap-12 font-medium transform translate-x-56">
        <p className="text-center text-xl w-2/3 tracking-wider">{text}</p>
        <Link href={link}>
          <Button_Primary_Black text="Discover Now" />
        </Link>
      </div>
    </div>
  );
}

function Applications() {
  const options: Array<"Sliding" | "Casement" | "Railing"> = [
    "Sliding",
    "Casement",
    // "Railing",
  ];
  const optionDetail = {
    Casement: {
      imageURL: `url("/img/Collaterals/stock-photo-happy-young-boy-kid-opening-the-sliding-door-on-rooftop-patio-area-at-home-1246210324.jpg")`,
      text: "Explore the Decorative collection and experience the power of lighting.",
      link: "",
    },
    Sliding: {
      imageURL: `url("/img/Collaterals/stock-photo-aluminum-window-with-cock-spur-window-handle-on-an-aluminium-window-with-mountain-view-782963743.jpg")`,
      text: "Explore the Outdoor collection and experience the power of lighting.",
      link: "",
    },
    Railing: {
      imageURL: `url("/img/Collaterals/stock-photo-modern-architecture-terrace-aluminum-rail-and-fall-protection-tempered-glass-1125992282.jpg")`,
      text: "Explore the Architectural collection and experience the power of lighting.",
      link: "",
    },
  };
  const [option, setOption] = useState<"Casement" | "Sliding" | "Railing">(
    options[0]
  );
  return (
    <div className="h-screen flex gap-12 p-12 px-32">
      <div className="w-1/2 items-center flex flex-col gap-12">
        <h4 className="uppercase tracking-widest text-sm text-gray-700 font-semibold">
          Browse Applications
        </h4>
        <ul className="text-4xl text-gray-500 font-medium flex flex-col gap-8 self-stretch text-center">
          <li
            className={`cursor-pointer tracking-wide  ${
              option == options[0] ? "text-gray-900" : ""
            }`}
            onMouseEnter={() => setOption(options[0])}
          >
            <Link href={"/product?product=Sliding"}>Sliding</Link>
          </li>
          <li
            className={`cursor-pointer tracking-wide ${
              option == options[1] ? "text-gray-900" : ""
            }`}
            onMouseEnter={() => setOption(options[1])}
          >
            <Link href={"/product?product=Casement"}>Casement</Link>
          </li>
          {/* <li
            className={`cursor-pointer tracking-wide ${
              option == options[2] ? "text-gray-900" : ""
            }`}
            onMouseEnter={() => setOption(options[2])}
          >
            Railing
          </li> */}
        </ul>
      </div>
      <ImageComponent
        imageURL={optionDetail[option]?.imageURL}
        text={optionDetail[option]?.text}
        link={`/product?product=${option}`}
      />
    </div>
  );
}

export default Applications;
