"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { individualProductType, products } from "../../lib/productData";
import Specifications from "./_components/specifications";
import Assembly from "./_components/assembly";
import Typologies from "./_components/typologies";
import { Suspense } from "react";

const productCategory = ["Specifications", "Assembly", "Popular Typology"];
function GetComponent(
  selectedCategory: string,
  productDetail: individualProductType | undefined
) {
  if (!productDetail) return <></>;
  console.log("Selected product...", selectedCategory);
  switch (selectedCategory) {
    case (selectedCategory = productCategory[0]):
      return <Specifications data={productDetail} />;
    case (selectedCategory = productCategory[1]):
      return <Assembly data={productDetail} />;
    case (selectedCategory = productCategory[2]):
      return <Typologies data={productDetail} />;
    default:
      break;
  }
}

function Page() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product") || "";
  const category = searchParams.get("category") || "";

  const [currentProductCategory, setCurrentProductCategory] = React.useState(
    productCategory[0]
  );
  const [selectedProductName, setSelectedProductName] = React.useState<string>(
    category || ""
  );
  // const [productDetail, setProductDetail] =
  //   React.useState<individualProductType>();
  React.useEffect(() => {
    setCurrentProductCategory(productCategory[0]);
    setSelectedProductName(category || Object.keys(products[product])[0]);
  }, [product, category]);
  // React.useEffect(() => {
  //   console.log("selected product detail", product, selectedProductName);
  //   setProductDetail(products?.[product]?.[selectedProductName]?.[0]);
  // }, [selectedProductName, product]);
  const productDetail = products?.[product]?.[selectedProductName]?.[0];

  return (
    <Suspense>
      <div className="w-screen p-12 py-32 grid grid-cols-12 gap-y-12 gap-x-8">
        <h2 className="col-span-12 text-5xl font-semibold text-center tracking-widest text-black">
          {product?.slice(0, 1).toUpperCase() + product?.slice(1).toLowerCase()}
        </h2>
        <div className="col-span-2 hidden sm:flex flex-col gap-4 justify-start row-start-2 py-12 text-black">
          {Object.keys(products[product])?.map((category, index) => (
            <button
              className={`lg:px-4 py-3 text-sm lg:text-lg border border-gray-900 tracking-wider hover:bg-green-600 hover:text-white ${
                selectedProductName == category ? "text-white bg-green-600" : ""
              }`}
              key={index}
              onClick={() => setSelectedProductName(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="col-span-12 sm:col-span-10 flex flex-col gap-8">
          <Swiper
            className="border-b border-gray-600 flex  sm:flex-row gap-6 sm:gap-12 w-full justify-center"
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {productCategory.map((productCategory, index) => {
              return (
                <SwiperSlide key={index}>
                  <p
                    className={`text-base font-semibold text-gray-600 tracking-widest text-center p-2 cursor-pointer ${
                      productCategory == currentProductCategory
                        ? "md:border-b border-gray-900 text-green-600"
                        : ""
                    }`}
                    onClick={() => setCurrentProductCategory(productCategory)}
                    key={index}
                  >
                    {productCategory}
                  </p>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div>{GetComponent(currentProductCategory, productDetail)}</div>
        </div>
      </div>
    </Suspense>
  );
}

export default Page;
