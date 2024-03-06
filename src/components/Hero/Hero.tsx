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
      className={`w-screen min-h-screen  h-screen flex flex-row overflow-x-hidden text-white`}
    >
      <div
        className={`min-w-full min-h-full bg-hero-pattern-1 bg-cover flex flex-row  duration-1000 transform`}
        style={{ transform: `translateX(${-currentImage * 100}%)` }}
      >
        <div className="w-2/3 flex flex-col px-20 items-start pt-24 pb-16 gap-12 ">
          <p className="text-6xl">The Rebel Black Flag </p>
          <p className="text-lg tracking-wide leading-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div className="m-8">
            <Button_Primary text={"Discover The Story"} />
          </div>
          <Dots currentIndex={currentImage} imageLength={imageLength} />
        </div>
        <div className=""></div>
      </div>
      <div
        className={`min-w-full min-h-full bg-hero-pattern-2 bg-cover flex flex-row  duration-1000 transform`}
        style={{ transform: `translateX(${-currentImage * 100}%)` }}
      >
        <div className="w-2/3 flex flex-col px-20 items-start pt-24 pb-16 gap-12 ">
          <p className="text-6xl">The Perelman Performing Arts Center</p>
          <p className="text-lg tracking-wide leading-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div className="m-8">
            <Button_Primary text={"Discover The Story"} />
          </div>
          <Dots currentIndex={currentImage} imageLength={imageLength} />
        </div>
        <div className=""></div>
      </div>
      <div
        className={`min-w-full min-h-full bg-hero-pattern-3 bg-cover flex flex-row  duration-1000 transform`}
        style={{ transform: `translateX(${-currentImage * 100}%)` }}
      >
        <div className="w-2/3 flex flex-col px-20 items-start pt-24 pb-16 gap-12 ">
          <p className="text-6xl">A light born of shadow</p>
          <p className="text-lg tracking-wide leading-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div className="m-8">
            <Button_Primary text={"Discover The Story"} />
          </div>
          <Dots currentIndex={currentImage} imageLength={imageLength} />
        </div>
        <div className=""></div>
      </div>
      <div
        className={`min-w-full min-h-full bg-hero-pattern-4 bg-cover flex flex-row  duration-1000 transform`}
        style={{ transform: `translateX(${-currentImage * 100}%)` }}
      >
        <div className="w-2/3 flex flex-col px-20 items-start pt-24 pb-16 gap-12 ">
          <p className="text-6xl">Gustave at Cromwell Place Café</p>
          <p className="text-lg tracking-wide leading-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div className="m-8">
            <Button_Primary text={"Discover The Story"} />
          </div>
          <Dots currentIndex={currentImage} imageLength={imageLength} />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

function Dots({
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
          ></div>
        );
      })}
    </div>
  );
}

export default Hero;
