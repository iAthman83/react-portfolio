import { forwardRef } from "react";
import ProjectsCardComponent from "../components/ProjectsCardComponent";
import { projects } from "../data/projectsData";

const ProjectsSection = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="container mx-auto bg-grayBg md:flex flex-col space-y-20 py-20"
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-5xl text-sideBarText font-sofia font-extrabold">
          PROJECTS
        </h1>
        <p className="text-base mb-18 text-textGray">
          Have a look at some of my projects below, ranging from React to Vue
          and WordPress
        </p>
        <div className="border-b-8 border-zinc-400 w-28 text-sideBarBg">.</div>
      </div>
      <div className="carousel carousel-center space-x-6 md:flex md:flex-row md:flex-wrap md:space-x-4 md:justify-center md:space-y-10">
        {projects.map((project) => (
          <li
            className="list-none carousel-item md:first:mt-10 md:first:ml-4"
            key={project.id}
          >
            <ProjectsCardComponent
              title={project.title}
              image={project.image}
              description={project.description}
              stack={project.stack}
            />
          </li>
        ))}
      </div>
    </div>
  );
});

export default ProjectsSection;
