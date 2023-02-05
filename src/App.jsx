import { useRef } from "react";
import SideNav from "./components/SideNav";
import AboutSection from "./sections/AboutSection";
import HomeSection from "./sections/HomeSection";
import ProjectsSection from "./sections/ProjectsSection";
import WorkflowSection from "./sections/WorkflowSection";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const workflowRef = useRef(null);
  return (
    <div className="bg-grayBg">
      <SideNav
        aboutRef={aboutRef}
        homeRef={homeRef}
        projectsRef={projectsRef}
        workflowRef={workflowRef}
      />
      <div className="md:ml-48">
        <HomeSection ref={homeRef} />
        <AboutSection ref={aboutRef} />
        <ProjectsSection ref={projectsRef} />
        <WorkflowSection ref={workflowRef} />
      </div>
    </div>
  );
}

export default App;
