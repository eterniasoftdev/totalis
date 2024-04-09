"use client";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoIosPin } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
function Header() {
  const [isScrolledDown, setIsScrolledDown] = React.useState(true);
  const [prevScrollPos, setPrevScrollPos] = React.useState<number>(0);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] =
    React.useState(false);

  // const [isContactDropdownOpen, setIsContactDropdownOpen] =
  //   React.useState(false);

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  // const toggleContactDropdown = () => {
  //   setIsContactDropdownOpen(!isContactDropdownOpen);
  // };

  let scrollTimer: ReturnType<typeof setTimeout>;

  const handleScroll = () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      let currentScrollPos = window.scrollY;
      setPrevScrollPos(currentScrollPos);
      if (currentScrollPos + 5 > prevScrollPos) {
        setIsScrolledDown(false);
      } else {
        setIsScrolledDown(true);
      }
    }, 150); // Adjust the timeout duration as needed
  };
  React.useEffect(() => {
    if (window) window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`fixed py-8 px-8 box-conatiner flex flex-row gap-x-16 w-screen bg-white z-50 ${
        !isScrolledDown ? "flex" : "hidden"
      }`}
    >
      <div className="">
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
      <div className="flex flex-row gap-x-6 text-sm tracking-wider font-medium">
        <div className="cursor-pointer flex items-center ">
          <Link href="/projects" className="flex items-center">
            Light Solutions{" "}
            <div className="ml-1">
              <IoIosArrowDown />
            </div>
          </Link>
        </div>
        {/* <div className="cursor-pointer flex items-center">Bespoke</div> */}
        <div
          className="cursor-pointer flex items-center"
          onClick={toggleProductsDropdown}
        >
          Products{" "}
          <div className="ml-1">
            <IoIosArrowDown />
          </div>
          {isProductsDropdownOpen && (
            <div className="absolute bg-white mt-1  flex flex-col gap-1 shadow-lg rounded-md transform translate-y-20">
              <Link href="/product?product=Sliding">
                <div className="cursor-pointer hover:bg-gray-100 px-8 py-2 rounded-md">
                  Sliding
                </div>
              </Link>
              <Link href="/product?product=Casement">
                <div className="cursor-pointer hover:bg-gray-100 px-8 py-2 rounded-md">
                  Casement
                </div>
              </Link>
              {/* <Link href="/product?product=Railing">
                <div className="cursor-pointer hover:bg-gray-100 px-8 py-2 rounded-md">
                  Railing
                </div>
              </Link> */}
            </div>
          )}
        </div>
        <Link href="/resource" className="flex items-center">
          Resources{" "}
          <div className="ml-1">
            <IoIosArrowDown />
          </div>
        </Link>

        <Link href="/contact" className="flex items-center">
          Contact Us{" "}
          <div className="ml-1">
            <IoIosArrowDown />
          </div>
        </Link>
      </div>

      <div className="flex gap-x-8 flex-row ml-auto text-2xl font-semibold">
        {/* <button>
          <IoIosSearch />
        </button> */}
        <button>
          <IoIosPin />
        </button>
        {/* <button>
          <FaUser />
        </button> */}
      </div>
      {/* <div className="text-gray-50">Hello</div> */}
    </div>
  );
}

export default Header;
