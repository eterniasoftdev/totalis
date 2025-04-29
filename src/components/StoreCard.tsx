import React from "react";
import { MapPin, Building2, Mail } from "lucide-react";
import { storeIndividualInterface } from "../lib/data";

interface StoreCardProps {
  store: storeIndividualInterface;
  index: number;
}

const StoreCard: React.FC<StoreCardProps> = ({ store, index }) => {
  console.log("Storinggggg index...", store);
  return (
    <div
      className="relative col-span-12 sm:col-span-6 md:col-span-4 bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl group"
      style={{
        animationDelay: `${index * 0.05}s`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

      <div className="absolute top-4 right-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center">
          <Building2 size={24} className="text-blue-600" />
        </div>
      </div>

      <div className="p-6 pt-8 flex flex-col gap-4 h-full">
        <div>
          <h3 className="text-xl font-bold text-gray-800 tracking-wide group-hover:text-blue-600 transition-colors duration-300 pr-14">
            {store.storeName
              .split(" ")
              .map(
                (el) => el.slice(0, 1).toUpperCase() + el.slice(1).toLowerCase()
              )
              .join(" ")}
          </h3>
          <div className="mt-2 w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transform origin-left transition-all duration-300 group-hover:w-24"></div>
        </div>

        <div className="flex flex-col gap-4 mt-auto">
          <div className="flex items-start">
            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
              <MapPin size={18} className="text-blue-600" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-600">Location</h4>
              <p className="text-gray-800 font-medium">
                {store.city}, {store.state}
              </p>
              {store.address && (
                <p className="text-sm text-gray-600 mt-1">{store.address}</p>
              )}
            </div>
          </div>

          {store.email && (
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                <Mail size={18} className="text-blue-600" />
              </div>
              <span className="text-sm text-gray-700 font-medium">
                {store.email}
              </span>
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </div>
    </div>
  );
};

export default StoreCard;
