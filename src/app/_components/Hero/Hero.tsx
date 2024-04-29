"use client";
import Button_Primary from "@/atoms/Buttons/Button-Primary";
import React from "react";

function Hero() {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [transformString, setTranformString] = React.useState(
    `translate-x-${[100]}`
  );
  const imageLength = 4;
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((state) => {
        if (state < imageLength - 1) {
          setTranformString(`translate-x-${(state + 1) * 100}`);
          return state + 1;
        } else {
          setTranformString("translate-x-0");
          return 0;
        }
      });
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div
      className={`w-screen min-h-screen  h-screen flex flex-row overflow-hidden text-white`}
    >
      <div
        className={`min-w-full min-h-full bg-hero-pattern-1 bg-cover flex flex-row duration-1000 transform pt-8 md:pt-0`}
        style={{ transform: `translateX(${-currentImage * 100}%)` }}
      >
        <div className="w-full md:w-2/3 flex flex-col px-8 sm:px-20 items-start pt-24 pb-16 gap-12 ">
          <p className="text-4xl sm:text-6xl">
            Elevate Your Home with Totalis Aluminium Windows
          </p>
          <p className="text-lg tracking-wide leading-6">
            Elevate your home with Totalis Aluminium Windows - meticulously
            tested to global standards, graded premium in durability, and
            designed with precision. Experience authenticity marked for quality
            that speaks volumes about your commitment to excellence.
          </p>
          <div className="m-8">
            {/* <Button_Primary text={"Discover The Story"} /> */}
          </div>
          <Dots currentIndex={currentImage} imageLength={imageLength} />
        </div>
        <div className=""></div>
      </div>
      <div
        className={`min-w-full min-h-full bg-hero-pattern-2 bg-cover flex flex-row  duration-1000 transform pt-8 md:pt-0`}
        style={{ transform: `translateX(${-currentImage * 100}%)` }}
      >
        <div className="w-full md:w-2/3 flex flex-col px-8 sm:px-20 items-start pt-24 pb-16 gap-12 ">
          <p className="text-4xl sm:text-6xl">
            Experience the Advantages of Aluminium Windows
          </p>
          <p className="text-lg tracking-wide leading-6">
            Totalis Aluminium Windows, crafted for thoughtfully made homes,
            offer total customization, all-weather protection, supreme
            finishing, and are endlessly recyclable. Elevate your living space
            with Totalis.
          </p>
          <div className="m-8">
            {/* <Button_Primary text={"Discover The Story"} /> */}
          </div>
          <Dots currentIndex={currentImage} imageLength={imageLength} />
        </div>
        <div className=""></div>
      </div>
      <div
        className={`min-w-full min-h-full bg-hero-pattern-3 bg-cover flex flex-row  duration-1000 transform pt-8 md:pt-0`}
        style={{ transform: `translateX(${-currentImage * 100}%)` }}
      >
        <div className="w-full md:w-2/3 flex flex-col px-8 sm:px-20 items-start pt-24 pb-16 gap-12 ">
          <p className="text-4xl sm:text-6xl">Tested, Certified, and Trusted</p>
          <p className="text-lg tracking-wide leading-6">
            Withstand external noise, air leakage, cyclonic winds, heavy rains,
            and dust with ease. Trust in the only company with the mark of
            authenticity, the world&apos;s largest recycler, for unmatched
            quality and performance.
          </p>
          <div className="m-8">
            {/* <Button_Primary text={"Discover The Story"} /> */}
          </div>
          <Dots currentIndex={currentImage} imageLength={imageLength} />
        </div>
        <div className=""></div>
      </div>
      <div
        className={`min-w-full min-h-full bg-hero-pattern-4 bg-cover flex flex-row  duration-1000 transform pt-8 md:pt-0`}
        style={{ transform: `translateX(${-currentImage * 100}%)` }}
      >
        <div className="w-full md:w-2/3 flex flex-col px-8 sm:px-20 items-start pt-24 pb-16 gap-12 ">
          <p className="text-4xl sm:text-6xl">Join the Totalis Experience</p>
          <p className="text-lg tracking-wide leading-6">
            Totalis Aluminium Windows offer end-to-end software support during
            purchase, tested and certified materials, and the highest quality at
            a reasonable price. Make Totalis your partner in enhancing the
            beauty and efficiency of your home
          </p>
          <div className="sm:m-8">
            {/* <Button_Primary text={"Discover The Story"} /> */}
          </div>
          <Dots currentIndex={currentImage} imageLength={imageLength} />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export function Dots({
  currentIndex,
  imageLength,
}: {
  currentIndex: number;
  imageLength: number;
}) {
  return (
    <div className="flex gap-1">
      {new Array(imageLength).fill(0).map((_, index) => {
        return (
          <div
            className={`h-2 rounded-full ${
              index == currentIndex ? "w-16" : "w-2"
            } ${index == currentIndex ? "animate-progress" : "bg-white"}`}
            key={index}
          ></div>
        );
      })}
    </div>
  );
}

export default Hero;
