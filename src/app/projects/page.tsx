import React from "react";
import { projectList } from "./data";

function Page() {
  return (
    <div className="py-32 px-16  grid grid-col-12 grid-rows-* gap-y-[2rem]">
      <h1 className="row-span-1 col-span-12 text-4xl tracking-wider text-center mb-12 py-4 border-b">
        Projects
      </h1>
      {projectList.map((project, index) => {
        const row = Math.floor(index / 4);
        const pos = index - row * 4;
        let rowSpan;
        if (pos == 0 || pos == 2) rowSpan = "row-span-12 h-[38rem]";
        if (pos == 1 || pos == 3) rowSpan = "row-span-6 h-[18rem]";
        return (
          <div className={`col-span-4 flex flex-col px-4 ` + rowSpan}>
            <img
              src={project.thumbnail}
              alt=""
              className="object-cover h-5/6 w-full"
            />
            <p className="text-center">{project.name}</p>
            <p className="text-center text-xs">{project.location}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Page;
