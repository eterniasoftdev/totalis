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
      className={
        "px-4 py-3 text-lg text-white bg-black tracking-wider " + className
      }
    >
      {text}
    </button>
  );
}

export default Button_Primary_Black;
