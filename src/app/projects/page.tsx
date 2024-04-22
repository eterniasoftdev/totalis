import React from "react";
import { projectList } from "./data";

function Projects() {
  return (
    <div className="p-6  grid sm:grid-cols-6 md:grid-cols-12 md:grid-rows-* gap-y-[2rem]">
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
            className={
              `col-span-3 h-[18rem] md:col-span-4 flex flex-col px-4 ` + rowSpan
            }
          >
            <div className="w-full h-5/6 overflow-hidden">
              <img
                src={project.thumbnail}
                alt=""
                className="object-cover  w-full h-full overflow-hidden hover:transform hover:translate hover:scale-110 transition-all duration-700"
              />
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
