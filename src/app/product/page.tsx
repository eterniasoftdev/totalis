"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { individualProductType, products } from "../../lib/productData";
import Specifications from "./_components/specifications";
import Assembly from "./_components/assembly";
import Typologies from "./_components/typologies";

const productCategory = ["Specifications", "Assembly", "Popular Typology"];
function GetComponent(
  selectedCategory: string,
  productDetail: individualProductType
) {
  if (!productDetail) return <></>;
  console.log("Selected product...", selectedCategory);
  switch (selectedCategory) {
    case (selectedCategory = productCategory[0]):
      return <Specifications data={productDetail} />;
      break;
    case (selectedCategory = productCategory[1]):
      return <Assembly data={productDetail} />;
      break;
    case (selectedCategory = productCategory[2]):
      return <Typologies data={productDetail} />;
      break;
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
  React.useEffect(() => {
    setCurrentProductCategory(productCategory[0]);
    setSelectedProductName(category || Object.keys(products[product])[0]);
  }, [product, category]);
  const productDetail = products?.[product]?.[selectedProductName]?.[0];
  console.log("product detail", productDetail);
  return (
    <>
      <div className="w-screen p-12 py-32 grid grid-cols-12 gap-y-12 gap-x-8">
        <h2 className="col-span-12 text-5xl font-semibold text-center tracking-widest">
          {product?.slice(0, 1).toUpperCase() + product?.slice(1).toLowerCase()}
        </h2>
        <div className="col-span-2 hidden sm:flex flex-col gap-4 justify-start row-start-2 py-12">
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
            {productCategory.map((productCategory) => {
              return (
                <SwiperSlide>
                  <p
                    className={`text-base font-semibold text-gray-600 tracking-widest text-center p-2 cursor-pointer ${
                      productCategory == currentProductCategory
                        ? "md:border-b border-gray-900 text-green-600"
                        : ""
                    }`}
                    onClick={() => setCurrentProductCategory(productCategory)}
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
    </>
  );
}

export default Page;

{
  /* <div className="flex flex-wrap p-12 gap-8">
{products[product as keyof productInterface][
  currentProductCategory
]?.map((currentProduct) => {
  console.log(
    "current product",
    products[product as keyof productInterface][
      currentProductCategory
    ],
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
</div> */
}
