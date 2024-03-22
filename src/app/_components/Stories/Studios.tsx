import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function Studios() {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="flex flex-col p-4 items-center justify-items-start gap-2 cursor-pointer">
          <img
            src="/img/randy-fath-csK5XPO87lI-unsplash.jpg"
            alt="placeholder"
            className="mb-4 object-fill h-44 w-full transform hover:scale-105 transition-all"
          />
          <h3 className="text-sm font-semibold mb-800 tracking-widest">
            Totalis Studios
          </h3>
          <h2 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide">
            Seam Design
          </h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col p-4 items-center justify-items-start gap-2">
          <img
            src="/img/toa-heftiba-FV3GConVSss-unsplash.jpg"
            alt="placeholder"
            className="mb-4 object-fill h-44 w-full transform hover:scale-105 transition-all"
          />
          <h3 className="text-sm font-semibold mb-800 tracking-widest">
            Totalis Studios
          </h3>
          <h2 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide text-center">
            Light is More
          </h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col p-4 items-center justify-items-start gap-2">
          <img
            src="/img/spacejoy-9M66C_w_ToM-unsplash.jpg"
            alt="placeholder"
            className="mb-4 object-fill h-44 w-full transform hover:scale-105 transition-all"
          />
          <h3 className="text-sm font-semibold mb-800 tracking-widest">
            Totalis Studios
          </h3>
          <h2 className="text-2xl font-semibold text-gray-900 uppercase tracking-wider text-center">
            Laura Gonzalez
          </h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col p-4 items-center justify-items-start gap-2">
          <img
            src="/img/marin-huang-0_RDFjGqasU-unsplash.jpg"
            alt="placeholder"
            className="mb-4 object-fill h-44 w-full transform hover:scale-105 transition-all"
          />
          <h3 className="text-sm font-semibold mb-800 tracking-widest">
            Totalis Studios
          </h3>
          <h2 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide">
            Light Shadow Spots
          </h2>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Studios;
