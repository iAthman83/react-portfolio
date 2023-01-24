import { forwardRef } from "react";

const ProjectsSection = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="container mx-auto h-screen flex flex-col">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-5xl text-sideBarText font-sofia font-extrabold">
          PROJECTS
        </h1>
        <p className="text-base mb-12">
          Have a look at some of my projects below, ranging from React to Vue
          and WordPress
        </p>
        <div className="border-b-4 w-32"></div>
      </div>
    </div>
  );
});

export default ProjectsSection;
