"use client";
import React, { useState, useEffect } from "react";
import { storeData, storeIndividualInterface } from "@/lib/data";
import StoreGrid from "@/components/StoreGrid";
import FilterSection from "@/components/FilterSection";

function Page() {
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [cityList, setCityList] = useState<string[]>([]);
  const [storeList, setStoreList] = useState<storeIndividualInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Get states from storeData that have stores
  const stateList = Object.keys(storeData.India).filter((stateName) => {
    const stateStores = storeData.India[stateName];
    return Object.keys(stateStores).some(
      (city) => stateStores[city].length > 0
    );
  });

  // Update city list when selected states change
  useEffect(() => {
    let newCityList: string[] = [];

    if (selectedStates.length > 0) {
      selectedStates.forEach((stateName) => {
        // Get all cities from this state that have stores
        const citiesInState = Object.keys(
          storeData.India[stateName] || {}
        ).filter((cityName) => storeData.India[stateName][cityName].length > 0);

        newCityList = [...newCityList, ...citiesInState];
      });

      // Remove duplicates
      newCityList = Array.from(new Set(newCityList));
    }

    setCityList(newCityList);

    // Filter selected cities to only include those available in the new city list
    if (selectedCities.length > 0) {
      const validCities = selectedCities.filter((city) =>
        newCityList.includes(city)
      );
      setSelectedCities(validCities);
    }
  }, [selectedStates]);

  // Fetch stores based on selected states and cities
  useEffect(() => {
    const fetchStores = () => {
      setLoading(true);

      setTimeout(() => {
        let filteredStores: storeIndividualInterface[] = [];
        const country = "India";

        if (selectedStates.length === 0) {
          // If no state is selected, show all stores
          Object.keys(storeData[country]).forEach((stateName) => {
            Object.keys(storeData[country][stateName]).forEach((cityName) => {
              if (storeData[country][stateName][cityName].length > 0) {
                filteredStores = [
                  ...filteredStores,
                  ...storeData[country][stateName][cityName],
                ];
              }
            });
          });
        } else {
          // Filter by selected states
          selectedStates.forEach((stateName) => {
            if (selectedCities.length === 0) {
              // If no cities selected, show all cities in selected states with stores
              Object.keys(storeData[country][stateName] || {}).forEach(
                (cityName) => {
                  if (storeData[country][stateName][cityName].length > 0) {
                    filteredStores = [
                      ...filteredStores,
                      ...storeData[country][stateName][cityName],
                    ];
                  }
                }
              );
            } else {
              // Filter by selected cities
              selectedCities.forEach((cityName) => {
                if (storeData[country][stateName][cityName]?.length > 0) {
                  filteredStores = [
                    ...filteredStores,
                    ...storeData[country][stateName][cityName],
                  ];
                }
              });
            }
          });
        }

        setStoreList(filteredStores);
        setLoading(false);
      }, 600);
    };

    fetchStores();
  }, [selectedStates, selectedCities]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="animate-fadeIn mt-10 flex flex-col">
          <FilterSection
            stateList={stateList}
            cityList={cityList}
            selectedStates={selectedStates}
            selectedCities={selectedCities}
            setSelectedStates={setSelectedStates}
            setSelectedCities={setSelectedCities}
          />

          <StoreGrid storeList={storeList} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default Page;
