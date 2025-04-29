import React from "react";

function Button_Primary_Black({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <button
      className={`px-4 py-3 text-lg text-white tracking-wider rounded-none
         bg-[#2C2472]/90 hover:bg-[#2C2472] transition-colors duration-200
         border border-[#2C2472]/30 hover:border-[#2C2472]/50 ${className}`}
    >
      {text}
    </button>
  );
}

export default Button_Primary_Black;
