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
    <>
      <SideNav
        aboutRef={aboutRef}
        homeRef={homeRef}
        projectsRef={projectsRef}
        workflowRef={workflowRef}
      />
      <HomeSection ref={homeRef} />
      <AboutSection ref={aboutRef} />
      <ProjectsSection ref={projectsRef} />
      <WorkflowSection ref={workflowRef} />
    </>
  );
}

export default App;
