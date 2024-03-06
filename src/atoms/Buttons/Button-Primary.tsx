import React from "react";

function Button_Primary({ text }: { text: string }) {
  return (
    <button className="px-4 py-2 border-2 border-white text-lg hover:bg-white hover:text-gray-900">
      {text}
    </button>
  );
}

export default Button_Primary;
