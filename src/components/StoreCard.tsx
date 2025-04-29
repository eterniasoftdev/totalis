import React from "react";
import { MapPin, Building2, Mail } from "lucide-react";
import { storeIndividualInterface } from "../lib/data";
import Link from "next/link";

interface StoreCardProps {
  store: storeIndividualInterface;
  index: number;
}

const StoreCard: React.FC<StoreCardProps> = ({ store, index }) => {
  return (
    <div
      className="relative col-span-12 sm:col-span-6 md:col-span-4 bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md group border border-gray-100"
      style={{
        animationDelay: `${index * 0.05}s`,
      }}
    >
      {/* Top accent bar - using your dark purple */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-[#2E2671]"></div>

      {/* Company icon with subtle brand colors */}
      <div className="absolute top-4 right-4">
        <div className="w-12 h-12 bg-[#2E2671]/10 rounded-lg flex items-center justify-center border border-[#2E2671]/20">
          <Building2 size={24} className="text-[#2E2671]" />
        </div>
      </div>

      <div className="p-6 pt-8 flex flex-col gap-4 h-full">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 tracking-wide group-hover:text-[#2E2671] transition-colors duration-300 pr-14">
            {store.storeName
              .split(" ")
              .map(
                (el) => el.slice(0, 1).toUpperCase() + el.slice(1).toLowerCase()
              )
              .join(" ")}
          </h3>
          {/* Underline accent - using your green */}
          <div className="mt-2 w-12 h-1 bg-[#77B528] rounded-full transform origin-left transition-all duration-300 group-hover:w-24"></div>
        </div>

        <div className="flex flex-col gap-4 mt-auto">
          <div className="flex items-start">
            <div className="w-8 h-8 bg-[#2E2671]/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 border border-[#2E2671]/20">
              <MapPin size={18} className="text-[#2E2671]" />
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
              <div className="w-8 h-8 bg-[#2E2671]/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 border border-[#2E2671]/20">
                <Mail size={18} className="text-[#2E2671]" />
              </div>
              <span className="text-sm text-gray-700 font-medium">
                {store.email}
              </span>
            </div>
          )}
        </div>
        <Link href={"/contact"}>
          <button className="mt-4 px-4 py-2 bg-[#2E2671] text-white rounded-lg font-medium hover:bg-[#1a1548] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#2E2671] focus:ring-opacity-50">
            Reach out
          </button>
        </Link>
        {/* Bottom hover accent - using your green */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#77B528] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </div>
    </div>
  );
};

export default StoreCard;
