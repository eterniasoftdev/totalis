import React from "react";
import { projectList } from "./data";

function Projects() {
  return (
    <div className="p-6  grid sm:grid-cols-6 md:grid-cols-12 md:grid-rows-* gap-y-[2rem] text-black">
      <h1 className="row-span-1 col-span-full text-4xl tracking-wider text-center mb-4 pb-4 border-b">
        Projects
      </h1>
      {projectList.map((project, index) => {
        const row = Math.floor(index / 4);
        const pos = index - row * 4;
        let rowSpan;
        if (pos == 0 || pos == 2) rowSpan = "md:row-span-12 md:h-[38rem]";
        if (pos == 1 || pos == 3) rowSpan = "md:row-span-6 md:h-[18rem]";
        return (
          <div
            className={`col-span-3 h-[18rem] md:col-span-4 flex flex-col px-4 `}
            key={index}
          >
            <div className="w-full h-5/6 overflow-hidden group">
              <img
                src={project.thumbnail}
                alt=""
                className="object-cover  w-full h-full overflow-hidden hover:transform hover:translate hover:scale-110 transition-all duration-700"
              />
              <div className="w-full h-20 py-8 box-border  bg-indigo-800 text-white flex flex-col items-center justify-center gap-1 opacity-90 group-hover:-translate-y-24 transition-all duration-700">
                <h3 className="text-2xl font-medium">Products Used</h3>
                {project.products_used.map((product, index) => (
                  <p className="text-sm" key={index}>
                    {product}
                  </p>
                ))}
              </div>
            </div>
            <p className="text-center">{project.name}</p>
            <p className="text-center text-xs">{project.location}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
