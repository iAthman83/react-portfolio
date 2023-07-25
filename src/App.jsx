import { useRef } from "react";
import SideNav from "./components/SideNav";
import AboutSection from "./sections/AboutSection";
import HomeSection from "./sections/HomeSection";
import PortfolioSection from "./sections/PortfolioSection";
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
      <div className="md:ml-80">
        <HomeSection ref={homeRef} />
        <AboutSection ref={aboutRef} />
        <PortfolioSection ref={projectsRef} />
        <WorkflowSection ref={workflowRef} />
      </div>
    </div>
  );
}

export default App;
