import React from "react";
import MultiSelect from "./MultiSelect";
import { MapPinned, X } from "lucide-react";

interface FilterSectionProps {
  stateList: string[];
  cityList: string[];
  selectedStates: string[];
  selectedCities: string[];
  setSelectedStates: (states: string[]) => void;
  setSelectedCities: (cities: string[]) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  stateList,
  cityList,
  selectedStates,
  selectedCities,
  setSelectedStates,
  setSelectedCities,
}) => {
  const clearFilters = () => {
    setSelectedStates([]);
    setSelectedCities([]);
  };

  const hasFilters = selectedStates.length > 0 || selectedCities.length > 0;

  return (
    <div className="w-full max-w-4xl bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-12 align-self-start">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="bg-gray-100 p-3 rounded-lg mr-4">
            <MapPinned className="text-gray-600" size={28} />
          </div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Find Your Nearest Distributor
          </h1>
        </div>

        {hasFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors duration-200"
          >
            <X size={16} className="mr-1.5" />
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
            onChange={setSelectedStates}
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
    </div>
  );
};

export default FilterSection;
