import Button_Primary from "@/atoms/Buttons/Button-Primary";
import React from "react";

function About() {
  return (
    <div className="w-screen h-auto bg-green-600 flex flex-col items-center gap-8 text-white p-12 py-16 ">
      <h1 className="text-4xl tracking-wider text-center mb-4 pb-4 border-b">
        About Totalis
      </h1>
      <div className="flex flex-col justify-start gap-4 text-sm px-8 md:px-16">
        {" "}
        <p className="">
          Totalis – Doors and Windows by Hindalco, are crafted from eternally
          recyclable aluminium and undergo rigorous testing against wind load,
          water penetration, and air infiltration. This commitment to testing
          ensures that customers can place their trust in the durability and
          reliability of Totalis products.
        </p>
        <p className="">
          Engineered and designed by a team of experts, Totalis – Doors and
          Windows offer an impeccable and unparalleled finish for your home.
          With complete customization options in terms of size, color finishes,
          typologies, and glass thickness, Totalis provides customers with a
          wide range of choices to suit their preferences.
        </p>
        <p>
          Totalis – Doors and Windows serve as the ultimate solution for all
          your needs, eliminating the risks associated with substandard and
          non-specification products.
        </p>
      </div>
    </div>
  );
}

export default About;
