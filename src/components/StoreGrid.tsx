import React from "react";
import { storeIndividualInterface } from "../lib/data";
import StoreCard from "./StoreCard";
import { Search as MapSearch } from "lucide-react";

interface StoreGridProps {
  storeList: storeIndividualInterface[];
  loading: boolean;
}

const StoreGrid: React.FC<StoreGridProps> = ({ storeList, loading }) => {
  console.log("Store list in store grid", storeList);

  // Sort stores alphabetically by storeName
  const sortedStores = [...storeList].sort((a, b) =>
    a.storeName.localeCompare(b.storeName, undefined, { sensitivity: "base" })
  );

  if (loading) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-16 animate-fadeIn">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-100 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-t-4 border-blue-500 rounded-full animate-spin"></div>
          </div>
        </div>
        <p className="text-gray-600 mt-4 font-medium">
          Finding distributors...
        </p>
      </div>
    );
  }

  if (!sortedStores.length) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-16 animate-fadeIn">
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-inner mb-6">
          <MapSearch size={48} className="text-blue-400" />
        </div>
        <h3 className="text-2xl font-bold text-gray-700 mb-3">
          No stores found
        </h3>
        <p className="text-gray-500 text-center max-w-md">
          Try adjusting your filters or selecting different locations to find
          available distributors.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-12 gap-6">
      {sortedStores.map((store, index) => (
        <StoreCard
          key={`${store.storeName}-${index}`}
          store={store}
          index={index}
        />
      ))}
    </div>
  );
};

export default StoreGrid;
