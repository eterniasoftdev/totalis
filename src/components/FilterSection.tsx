import React from "react";
import MultiSelect from "./MultiSelect";
import { MapPinned, X } from "lucide-react";

interface FilterSectionProps {
  stateList: string[];
  cityList: string[];
  selectedStates: string[];
  selectedCities: string[];
  setCityList: (cities: string[]) => void;
  setSelectedStates: (states: string[]) => void;
  setSelectedCities: (cities: string[]) => void;
  city: { [key: number]: string[] };
  state: string[];
}
console.log("Commit the uncommits");
const FilterSection: React.FC<FilterSectionProps> = ({
  stateList,
  cityList,
  selectedStates,
  selectedCities,
  setCityList,
  setSelectedStates,
  setSelectedCities,
  city,
  state,
}) => {
  const handleStateChange = (values: string[]) => {
    setSelectedStates(values);

    let newCityList: string[] = [];
    if (values.length > 0) {
      values.forEach((stateName) => {
        const stateIndex = state.indexOf(stateName);
        if (stateIndex >= 0 && city[stateIndex]) {
          newCityList = [...newCityList, ...city[stateIndex]];
        }
      });
      newCityList = Array.from(new Set(newCityList));
    }

    setCityList(newCityList);

    if (selectedCities.length > 0) {
      const validCities = selectedCities.filter((city) =>
        newCityList.includes(city)
      );
      setSelectedCities(validCities);
    }
  };

  const clearFilters = () => {
    setSelectedStates([]);
    setSelectedCities([]);
    setCityList([]);
  };

  const hasFilters = selectedStates.length > 0 || selectedCities.length > 0;

  return (
    <div className="w-full max-w-4xl mx-auto bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-xl shadow-lg p-8 md:p-10 mb-12 animate-fadeIn relative overflow-visible">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-lg shadow-md mr-4">
            <MapPinned className="text-white" size={28} />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Find Your Nearest Distributor
          </h1>
        </div>

        {hasFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <X size={16} className="mr-1" />
            Clear Filters
          </button>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select State
          </label>
          <MultiSelect
            options={stateList}
            selectedValues={selectedStates}
            onChange={handleStateChange}
            placeholder="Select states..."
          />
        </div>

        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select City
          </label>
          <MultiSelect
            options={cityList}
            selectedValues={selectedCities}
            onChange={setSelectedCities}
            placeholder="Select cities..."
            disabled={selectedStates.length === 0}
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500"></div>
    </div>
  );
};

export default FilterSection;
