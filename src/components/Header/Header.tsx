"use client";
import React, { useState } from "react";
import { IoIosPin, IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
// import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";
import { DialogBasicDetail } from "./_components/FormDialog";

function Header() {
  const pathname = usePathname();
  const [isChecked, setIsChecked] = useState(false);
  const isOrigin = pathname == "/" || pathname == "";
  const [isScrolledDown, setIsScrolledDown] = React.useState(true);
  const [prevScrollPos, setPrevScrollPos] = React.useState<number>(0);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] =
    React.useState(false);
  const [isSlidingDropdownOpen, setIsSlidingDropdownOpen] =
    React.useState(false);
  const [isCasementDropdownOpen, setIsCasementDropdownOpen] =
    React.useState(false);

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

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  const toggleSlidingDropdown = () => {
    setIsSlidingDropdownOpen(!isSlidingDropdownOpen);
  };

  const toggleCasementDropdown = () => {
    setIsCasementDropdownOpen(!isCasementDropdownOpen);
  };
  console.log("is origin", isOrigin);
  return (
    <>
      {/* Desktop Header */}
      <div className={`w - screen`}>
        <div
          className={`fixed py-4 px-8 box-conatiner flex flex-row gap-x-16 w-screen bg-white z-50 text-black ${
            !isScrolledDown ? "flex" : isOrigin ? "flex md:hidden" : "flex"
          }`}
        >
          <div className="h-full">
            <Link href="/">
              <img
                src="/img/Totalis_Logo_crop.png"
                alt="Totalis Logo"
                className="h-12 w-auto object-contain"
                // style={{
                //   objectFit: "cover",
                // }}
              />
            </Link>
          </div>
          <div className="hidden md:flex flex-row gap-x-6 text-sm tracking-wider font-medium">
            <Link href="/why" className="flex items-center">
              Why Totalis{" "}
              {/* <div className="ml-1">
              <IoIosArrowDown />
            </div> */}
            </Link>
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
                </div>
              )}
            </div>
            {/* <Link
            href="https://www.hindalco.com/upload/pdf/totalis-brochure.pdf"
            target="_blank"
            className="flex items-center"
          >
            Brochure{" "}
          </Link> */}

            <DialogBasicDetail />

            <Link href="/contact" className="flex items-center">
              Enquiry{" "}
              {/* <div className="ml-1">
              <IoIosArrowDown />
            </div> */}
            </Link>
            <a
              href="https://help.totalis.in"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Help Portal
              {/* <div className="ml-1">
    <IoIosArrowDown />
  </div> */}
            </a>
          </div>

          <div className="hidden md:flex gap-x-8 flex-row ml-auto text-2xl font-semibold">
            <Link href="/store" className="flex flex-row gap-2 items-center">
              <IoIosPin />
              <p className="text-lg">Locator Us</p>
            </Link>
          </div>
          <div
            className="flex md:hidden ml-auto  items-center justify-center cursor-pointer text-black"
            onClick={() => {
              setIsChecked((prev) => !prev);
            }}
          >
            <RxHamburgerMenu />
          </div>
        </div>
        <div
          className={`${
            isChecked ? "fixed" : "hidden"
          } md:hidden w-screen h-screen bg-gray-800 z-40 opacity-50 transition-all duration-700`}
          onClick={() => setIsChecked(false)}
        ></div>
        <div
          className={`fixed translate-x-[-18rem] transition-all duration-700 text-black ${
            isChecked ? "translate-x-[0]" : ""
          } md:hidden w-[18rem] h-screen bg-white z-40 flex flex-col justify-center items-center text-black`}
        >
          {/* Mention the mobile header below */}
          <div
            className="flex flex-col items-center gap-4"
            onClick={() => setIsChecked(false)}
          >
            <Link href="/">Home</Link>
            <Link href="/why" className="flex items-center">
              Why Totalis{" "}
              <div className="ml-1">
                <IoIosArrowDown />
              </div>
            </Link>
            <div
              onClick={(e) => {
                e.stopPropagation();
                toggleSlidingDropdown();
              }}
              className="flex items-center cursor-pointer"
            >
              Sliding
              <div className="ml-1">
                <IoIosArrowDown />
              </div>
              {isSlidingDropdownOpen && (
                <div
                  className="absolute bg-white mt-1  flex flex-col gap-1 shadow-lg rounded-md transform translate-y-20"
                  onClick={() => setIsChecked(false)}
                >
                  <Link href="/product?product=Sliding&category=TOT-SD Lite">
                    <div className="cursor-pointer hover:bg-gray-100 px-8 py-2 rounded-md">
                      TOT-SD LITE
                    </div>
                  </Link>
                  <Link href="/product?product=Sliding&category=TOT-SD">
                    <div className="cursor-pointer hover:bg-gray-100 px-8 py-2 rounded-md">
                      TOT-SD
                    </div>
                  </Link>
                  <Link href="/product?product=Sliding&category=TOT-SD PLUS">
                    <div className="cursor-pointer hover:bg-gray-100 px-8 py-2 rounded-md">
                      TOT-SD PLUS
                    </div>
                  </Link>
                </div>
              )}
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation();
                toggleCasementDropdown();
              }}
              className="flex items-center cursor-pointer"
            >
              Casement
              <div className="ml-1">
                <IoIosArrowDown />
              </div>
              {isCasementDropdownOpen && (
                <div
                  className="absolute bg-white mt-1  flex flex-col gap-1 shadow-lg rounded-md transform translate-y-8"
                  onClick={() => setIsChecked(false)}
                >
                  <Link href="/product?product=Casement&category=TOT-CS">
                    <div className="cursor-pointer hover:bg-gray-100 px-8 py-2 rounded-md">
                      TOT-CS
                    </div>
                  </Link>
                </div>
              )}
            </div>
            {/* <Link
            href="https://www.hindalco.com/upload/pdf/totalis-brochure.pdf"
            target="_blank"
          >
            Brochure
          </Link> */}
            <DialogBasicDetail />
            <Link href="/contact">Contact Us</Link>
            <Link href="/store">Dealer Locator</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
