"use client";
import Button_Primary_Black from "@/atoms/Buttons/Button-Primary-Black";
import Link from "next/link";
import React, { useState } from "react";

type ImageProp = {
  thumbnail: string;
  text: string;
  downloadurl: string;
  name: string;
};

function ImageComponent({ text, thumbnail, downloadurl, name }: ImageProp) {
  return (
    <div
      className="h-full w-1/3 bg-contain flex items-center justify-center bg-no-repeat"
      style={{
        backgroundImage: thumbnail,
      }}
    >
      <div className="flex flex-col items-center gap-12 font-medium transform translate-x-56">
        <p className="text-center text-xl tracking-wider">{text}</p>
        <Link href={downloadurl} target="_blank">
          <Button_Primary_Black text="View" className="w-32" />
        </Link>
      </div>
    </div>
  );
}

function Page() {
  const options: Array<"Brochure"> = ["Brochure"];
  const optionDetail = {
    Brochure: [
      {
        text: "Explore the Decorative collection and experience the power of lighting.",
        name: "Totalis Brochure",
        thumbnail: `url("/img/totalis-cover-1.png")`,
        downloadurl: "https://www.hindalco.com/upload/pdf/totalis-brochure.pdf",
      },
    ],
  };
  const [SelectedOption, setSelectedOption] = useState<"Brochure">(options[0]);
  return (
    <div className="h-screen flex gap-12 p-12 px-36">
      <div className="w-1/2 items-center flex flex-col gap-12 py-12">
        <h4 className="uppercase tracking-widest text-sm text-gray-700 font-semibold">
          Downloads
        </h4>
        <ul className="text-4xl text-gray-500 font-medium flex flex-col gap-8 self-stretch text-center justify-center">
          {options.map((option) => (
            <li
              className={`cursor-pointer tracking-wide  ${
                option == SelectedOption ? "text-gray-900" : ""
              }`}
              onMouseEnter={() => setSelectedOption(option)}
            >
              <Link href={optionDetail[option][0]?.downloadurl} target="_blank">
                {option}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ImageComponent
        thumbnail={optionDetail[SelectedOption][0]?.thumbnail}
        text={optionDetail[SelectedOption][0]?.text}
        downloadurl={optionDetail[SelectedOption][0]?.downloadurl}
        name={optionDetail[SelectedOption][0]?.name}
      />
    </div>
  );
}

export default Page;
