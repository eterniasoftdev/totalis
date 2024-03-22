import React from "react";

function Button_Secondary({ text }: { text: string }) {
  return (
    <button className="px-4 py-2 text-base text-gray-700 border border-gray-700 tracking-wider hover:bg-black hover:text-white">
      {text}
    </button>
  );
}

export default Button_Secondary;
