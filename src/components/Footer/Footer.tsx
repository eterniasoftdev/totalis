import Button_Primary from "@/atoms/Buttons/Button-Primary";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

function Footer() {
  return (
    <div className="w-screen h-auto bg-black p-8 md:p-20 mt-12 flex flex-col gap-12">
      <div className="text-white flex flex-col sm:flex-row gap-12">
        <div className="text-4xl flex flex-col gap-12 items-start sm:w-1/2 justify-items-start ">
          <Link href="/static/about">
            <div className="hover:underline hover:underline-offset-2 cursor-pointer">
              About Totalis
            </div>
          </Link>
          <div className="hover:underline hover:underline-offset-2 cursor-pointer">
            <Link
              href="https://www.hindalco.com/upload/pdf/totalis-brochure.pdf"
              target="_blank"
            >
              Downloads
            </Link>
          </div>
          <div className="hover:underline hover:underline-offset-2 cursor-pointer">
            <Link href="/contact">Contacts</Link>
          </div>
        </div>
        <div className="flex flex-col sm:items-start w-5/6 sm:w-1/4">
          <div className="flex sm:flex-col gap-4">
            <p>Are you looking for any help? Connect With us </p>
            <Link href="/contact">
              <Button_Primary text="Connect" className="w-full" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between sm:w-1/4">
          <div className="flex flex-col sm:gap-4">
            <Link href="/store" className="flex gap-4">
              <i className="text-2xl">
                <FaLocationPin />
              </i>
              <p className="text-xl">Locate Us</p>
            </Link>
            <div className="mt-8">
              <h1 className="text-xl">Follow us</h1>
              <div className="flex gap-4">
                {/* <i className="text-3xl">
                <FaFacebook />
              </i>
              <i className="text-3xl">
                <FaInstagram />
              </i>
              <i className="text-3xl">
                <FaTwitter />
              </i> */}
                <i className="text-3xl">
                  <FaLinkedin />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t"></div>
      <div className="flex flex-row gap-12 justify-between">
        <ul className="flex gap-8 text-gray-300 list-disc">
          <li className="hover:underline hover:underline-offset-2 cursor-pointer">
            <Link href="/static/t&c">
              General Terms and Conditions of Sale and Guarantees
            </Link>
          </li>
          <li className="hover:underline hover:underline-offset-2 cursor-pointer">
            <Link href="/static/privacy">Privacy & Legal Notices</Link>
          </li>
        </ul>
        <div className="bg-white p-2">
          <Link href="/">
            <Image
              src="/img/Totalis_Logo_crop.png"
              alt="Totalis Logo"
              width={166}
              height={44}
              priority={true}
              objectFit="contain"
              style={{
                objectFit: "cover",
              }}
            />
          </Link>
        </div>
      </div>
      <div className="">
        <p className="text-gray-300 text-xs">
          Disclaimer: Totalis provides only system – Aluminium + Hardware.
          Fabrication and Installation of the windows is the sole responsibility
          of the fabricators. Hindalco does not provide any warranty or
          guarantee on Totalis products{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
