"use client";
import React, { useState, useEffect } from "react";
import { city, state } from "@/lib/stateData";
import { storeData, storeIndividualInterface } from "@/lib/data";
import StoreGrid from "@/components/StoreGrid";
import FilterSection from "@/components/FilterSection";

function Page() {
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [cityList, setCityList] = useState<string[]>([]);
  const [storeList, setStoreList] = useState<storeIndividualInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Get all state names from storeData
  const stateList = Object.keys(storeData.India);

  // Update cityList when selectedStates change
  useEffect(() => {
    let newCityList: string[] = [];
    if (selectedStates.length > 0) {
      selectedStates.forEach((stateName) => {
        // Find the state index in the imported state array to get cities from city object
        const stateIndex = state.indexOf(stateName);
        if (stateIndex >= 0 && city[stateIndex]) {
          newCityList = [...newCityList, ...city[stateIndex]];
        }
      });
      newCityList = Array.from(new Set(newCityList)); // Remove duplicates
    }
    setCityList(newCityList);
  }, [selectedStates]);

  useEffect(() => {
    const fetchStores = () => {
      setLoading(true);

      // Simulate API call with timeout
      setTimeout(() => {
        let filteredStores: storeIndividualInterface[] = [];
        const country = "India";

        if (selectedStates.length === 0) {
          // If no state is selected, show all stores
          Object.keys(storeData).forEach((countryName) => {
            Object.keys(storeData[countryName]).forEach((stateName) => {
              Object.keys(storeData[countryName][stateName]).forEach(
                (cityName) => {
                  filteredStores = [
                    ...filteredStores,
                    ...storeData[countryName][stateName][cityName],
                  ];
                }
              );
            });
          });
        } else {
          // Filter by selected states
          selectedStates.forEach((stateName) => {
            if (selectedCities.length === 0) {
              // If no cities selected, show all cities in selected states
              Object.keys(storeData[country][stateName] || {}).forEach(
                (cityName) => {
                  filteredStores = [
                    ...filteredStores,
                    ...(storeData[country][stateName][cityName] || []),
                  ];
                }
              );
            } else {
              // Filter by selected cities
              selectedCities.forEach((cityName) => {
                if (storeData[country][stateName][cityName]) {
                  filteredStores = [
                    ...filteredStores,
                    ...storeData[country][stateName][cityName],
                  ];
                }
              });
            }
          });
        }
        console.log("Filtered Stores...", filteredStores);
        setStoreList(filteredStores);
        setLoading(false);
      }, 600); // Simulate loading delay for better UX
    };

    fetchStores();
  }, [selectedStates, selectedCities]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="animate-fadeIn mt-10">
          <FilterSection
            stateList={stateList}
            cityList={cityList}
            selectedStates={selectedStates}
            selectedCities={selectedCities}
            setCityList={setCityList}
            setSelectedStates={setSelectedStates}
            setSelectedCities={setSelectedCities}
            city={city}
            state={state}
          />

          <StoreGrid storeList={storeList} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default Page;
