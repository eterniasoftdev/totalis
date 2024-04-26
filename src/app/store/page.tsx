"use client";
import React from "react";
import { city, state } from "@/lib/stateData";
import { storeData, storeIndividualInterface } from "@/lib/data";

function Page() {
  const [selectedState, setSelectedState] = React.useState<string | null>(null);
  const [selectedCity, setSelectedCity] = React.useState<string | null>(null);
  const [cityList, setCityList] = React.useState<string[]>([]);
  let stateList = Object.keys(storeData.India);
  let initialStoreList: storeIndividualInterface[] = [];
  Object.keys(storeData).forEach((country) => {
    Object.keys(storeData[country]).forEach((stateName) => {
      Object.keys(storeData[country][stateName]).forEach((cityName) => {
        initialStoreList = [
          ...initialStoreList,
          ...storeData[country][stateName][cityName],
        ];
      });
    });
  });
  const [storeList, setStoreList] =
    React.useState<storeIndividualInterface[]>(initialStoreList);
  React.useEffect(() => {
    setStoreList([]);
    if (!selectedState) {
      Object.keys(storeData).forEach((country) => {
        Object.keys(storeData[country]).forEach((stateName) => {
          Object.keys(storeData[country][stateName]).forEach((cityName) => {
            setStoreList((prev) => [
              ...prev,
              ...storeData[country][stateName][cityName],
            ]);
          });
        });
      });
    }
    if (selectedState) {
      const country = "India";
      if (!selectedCity) {
        Object.keys(storeData?.[country]?.[selectedState] || {}).forEach(
          (cityName) => {
            setStoreList((prev) => [
              ...prev,
              ...(storeData?.[country]?.[selectedState]?.[cityName] || []),
            ]);
          }
        );
      } else {
        setStoreList((prev) => [
          ...prev,
          ...(storeData?.[country]?.[selectedState]?.[selectedCity] || []),
        ]);
      }
    }
  }, [selectedState, selectedCity]);
  // console.log("store list....", storeList);
  return (
    <div className="flex flex-col py-32 px-12 gap-12">
      <div className="flex flex-col bg-stone-100 p-12 gap-8 items-center">
        <h1 className="text-2xl font-semibold uppercase tracking-wider">
          Find the distributor nearest to you
        </h1>
        <div className="flex flex-col sm:flex-row gap-8">
          <select
            className="w-full rounded-md py-3 px-4 bg-white border text-sm outline-[#007bff]"
            name="state"
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setSelectedState(event.target.value);
              setCityList(city[stateList.indexOf(event.target.value)] || []);
              setSelectedCity(null);
            }}
          >
            <option value="" disabled selected>
              Select State
            </option>
            {stateList.map((data, index) => (
              <option value={data} className="text-black" key={index}>
                {data}
              </option>
            ))}
          </select>
          <select
            value={selectedCity || ""}
            className="w-full rounded-md py-3 px-4 bg-white border text-sm outline-[#007bff]"
            name="city"
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
              setSelectedCity(event.target.value)
            }
          >
            <option value="" disabled selected>
              Select City
            </option>
            {cityList.map((data, index) => (
              <option value={data} className="text-black" key={index}>
                {data}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* <h1 className="text-center text-2xl font-medium">All Stores</h1> */}
      {!storeList.length ? (
        <p className="text-sm text-center">No store found</p>
      ) : (
        ""
      )}
      <div className="grid grid-cols-12 gap-1">
        {storeList?.map((store, index) => {
          return (
            <div
              className="col-span-12 sm:col-span-6 md:col-span-4 h-48 bg-stone-100 py-8 px-4 flex flex-col gap-4 justify-start hyphens-auto overflow-y-auto"
              key={index}
            >
              <h3 className="text-xl font-semibold tracking-wide hyphens-auto">
                {store.storeName
                  .split(" ")
                  .map(
                    (el) =>
                      el.slice(0, 1).toUpperCase() + el.slice(1).toLowerCase()
                  )
                  .join(" ")}
              </h3>
              <div className="flex flex-col gap-1">
                <h4 className="text-lg font-semibold">Location</h4>
                <p className="text-sm font-medium">
                  {store.city}, {store.state}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
