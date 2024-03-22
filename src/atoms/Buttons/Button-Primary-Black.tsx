import React from "react";

function Button_Primary_Black({ text }: { text: string }) {
  return (
    <button className="px-4 py-3 text-lg text-white bg-black tracking-wider">
      {text}
    </button>
  );
}

export default Button_Primary_Black;
