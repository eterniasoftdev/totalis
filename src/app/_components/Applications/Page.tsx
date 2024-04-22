"use client";
import Button_Primary from "@/atoms/Buttons/Button-Primary";
import Button_Primary_Black from "@/atoms/Buttons/Button-Primary-Black";
import { individualProductType, products } from "@/lib/productData";
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
  let productArray: individualProductType[] = [];
  Object.keys(products).forEach((productName) => {
    Object.keys(products[productName]).forEach((categoryName) => {
      productArray = [
        ...productArray,
        ...products?.[productName]?.[categoryName],
      ];
    });
  });
  return (
    <div className="p-6 grid grid-cols-3 sm:grid-cols-6 xl:grid-cols-12 gap-y-[2rem] gap-x-2 w-screen ">
      <h1 className="col-span-full text-4xl tracking-wider text-center mb-4 py-4 border-b">
        Products
      </h1>
      {productArray.map((product, index) => {
        return (
          <Link
            href={`/product?product=${product.category}&category=${product.name}`}
            className={`col-span-3 flex flex-col h-[26rem] gap-2 cursor-pointer`}
            key={index}
          >
            <div className=" h-5/6 w-full overflow-hidden">
              <img
                src={product.imageURL[0]}
                alt=""
                className="object-cover  w-full h-full overflow-hidden hover:transform hover:translate hover:scale-110 transition-all duration-700"
              />
            </div>
            <p className="text-center">{product.name}</p>
            {/* <p className="text-center text-xs">{product.title}</p> */}
          </Link>
        );
      })}
    </div>
  );
}

export default Applications;
