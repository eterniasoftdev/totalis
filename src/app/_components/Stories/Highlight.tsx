import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function Highlight() {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="flex flex-col p-4 items-center justify-items-start gap-2 cursor-pointer">
          <img
            src="/img/francesca-tosolini-6japTIjUQoI-unsplash.jpg"
            alt="placeholder"
            className="mb-4 object-fill h-44 w-full"
          />
          <h3 className="text-sm font-semibold mb-800 tracking-widest">
            Product Highlights
          </h3>
          <h2 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide text-center">
            Light Shadow Spots
          </h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col p-4 items-center justify-items-start gap-2">
          <img
            src="/img/iwood-R5v8Xtc0ecg-unsplash.jpg"
            alt="placeholder"
            className="mb-4 object-fill h-44 w-full"
          />
          <h3 className="text-sm font-semibold mb-800 tracking-widest">
            Product Highlights
          </h3>
          <h2 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide text-center">
            My Circuit: Design your own path
          </h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col p-4 items-center justify-items-start gap-2">
          <img
            src="/img/lotus-design-n-print--Vfa35ueUCo-unsplash.jpg"
            alt="placeholder"
            className="mb-4 object-fill h-44 w-full"
          />
          <h3 className="text-sm font-semibold mb-800 tracking-widest">
            Product Highlights
          </h3>
          <h2 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide text-center">
            Captain Flint Outdoor
          </h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col p-4 items-center justify-items-start gap-2">
          <img
            src="/img/marin-huang-0_RDFjGqasU-unsplash.jpg"
            alt="placeholder"
            className="mb-4 object-fill h-44 w-full"
          />
          <h3 className="text-sm font-semibold mb-800 tracking-widest">
            Product Highlights
          </h3>
          <h2 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide text-center">
            Light Shadow Spots
          </h2>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Highlight;
