import React from "react";
import { IoIosSearch, IoIosPin, IoIosArrowDown } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [isScrolledDown, setIsScrolledDown] = React.useState(true);
  const [prevScrollPos, setPrevScrollPos] = React.useState<number>(0);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] =
    React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Header */}
      <div
        className={`fixed py-8 px-8 box-conatiner flex flex-row gap-x-16 w-screen bg-white z-50 ${
          !isScrolledDown ? "flex" : "hidden"
        } md:flex`}
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
          <Link href="/store" className="flex flex-row gap-2 items-center">
            <IoIosPin />
            <p className="text-xs">Dealer Locator</p>
          </Link>
        </div>
      </div>

      {/* Mobile Header */}
      <div
        className={`fixed w-screen bg-white z-50 md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        {/* Hamburger Button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        {/* Mobile Navigation Links */}
        <div className="flex flex-col items-center">
          <Link href="/">Home</Link>
          <Link href="/product?product=Sliding">Sliding</Link>
          <Link href="/product?product=Casement">Casement</Link>
          <Link href="/resource">Resources</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/store">Dealer Locator</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
