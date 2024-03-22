"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { productInterface, products } from "./data";

function Page() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product") || "";
  const [currentProductCategory, setCurrentProductCategory] = React.useState(
    Object.keys(products[product])[0] || ""
  );
  React.useEffect(() => {
    setCurrentProductCategory(Object.keys(products[product])[0] || "");
  }, [product]);
  return (
    <div className="p-12 py-32 flex flex-col gap-8">
      <h2 className="text-5xl font-semibold text-center tracking-widest">
        {product?.slice(0, 1).toUpperCase() + product?.slice(1).toLowerCase()}
      </h2>
      <Swiper
        className="border-b border-gray-600 flex flex-row gap-12 w-full justify-center"
        spaceBetween={20}
        slidesPerView={5}
      >
        {Object.keys(products[product as keyof productInterface]).map(
          (productCategory) => {
            return (
              <SwiperSlide>
                <p
                  className={`text-base font-semibold text-gray-600 tracking-widest text-center p-2 cursor-pointer ${
                    productCategory == currentProductCategory
                      ? "border-b border-gray-900 text-gray-900"
                      : ""
                  }`}
                  onClick={() => setCurrentProductCategory(productCategory)}
                >
                  {productCategory}
                </p>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
      <div className="flex flex-wrap p-12 gap-8">
        {products[product as keyof productInterface][
          currentProductCategory
        ]?.map((currentProduct) => {
          console.log(
            "current product",
            products[product as keyof productInterface][currentProductCategory],
            currentProduct
          );
          return (
            <>
              <div className="w-1/4 flex flex-col gap-2 h-60">
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  className="h-4/5 w-full cursor-grab"
                >
                  {currentProduct.imageURL.map((url) => {
                    return (
                      <SwiperSlide>
                        <img src={url} alt="" className="cover" />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <h3 className="text-center text-2xl ">
                  {currentProduct.title}
                </h3>
                <p className="text-center">{currentProduct.subtitle}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
