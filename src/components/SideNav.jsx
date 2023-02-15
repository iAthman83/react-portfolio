import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineCube,
  HiOutlineDesktopComputer,
} from "react-icons/hi";
import {
  RiLinkedinFill,
  RiTwitterFill,
  RiYoutubeFill,
  RiGithubFill,
  RiMailFill,
} from "react-icons/ri";

function SideNav({ aboutRef, homeRef, projectsRef, workflowRef }) {
  return (
    <div className="fixed w-full bottom-0 z-10 md:fixed md:flex flex-row md:flex-col md:justify-between px-4 md:top-0 md:left-0 bg-sideBarBg md:h-screen md:w-48 md:flex-none py-2 md:py-6">
      {/* logo */}
      <div className="hidden md:flex md:items-center md:justify-center md:my-4 py-4 px-auto">
        <h1 className="hidden md:block">Program with Abu</h1>
      </div>
      {/* nav */}
      <nav className="hidden md:flex md:flex-col md:justify-center space-x-1 md:space-y-2">
        {/* home */}
        <section
          onClick={() => homeRef.current.scrollIntoView({ behavior: "smooth" })}
          className="flex space-x-2 items-center cursor-pointer text-white p-2 px-auto bg-sideBarHighlight rounded-lg hover:bg-zinc-700"
        >
          <HiOutlineHome size={20} className="text-sideBarText" />
          <h1 className="hidden md:block">Home</h1>
        </section>
        {/* about */}
        <section
          onClick={() =>
            aboutRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="flex space-x-2 items-center cursor-pointer text-white p-2 px-auto bg-sideBarHighlight rounded-lg hover:bg-zinc-700"
        >
          <HiOutlineUser size={20} className="text-sideBarText" />
          <h1 className="hidden md:block">About</h1>
        </section>
        {/* projects */}
        <section
          onClick={() =>
            projectsRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="flex space-x-2 items-center cursor-pointer text-white p-2 px-auto bg-sideBarHighlight rounded-lg hover:bg-zinc-700"
        >
          <HiOutlineCube size={20} className="text-sideBarText" />
          <h1 className="hidden md:block">Projects</h1>
        </section>
        {/* workflow */}
        <section
          onClick={() =>
            workflowRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="flex space-x-2 items-center cursor-pointer text-white p-2 px-auto bg-sideBarHighlight rounded-lg hover:bg-zinc-700"
        >
          <HiOutlineDesktopComputer size={20} className="text-sideBarText" />
          <h1 className="hidden md:block">Workflow</h1>
        </section>
      </nav>
      {/* socials */}
      <div className="flex justify-between md:flex-col md:justify-center space-x-1 md:space-y-2 my-2 md:mt-8">
        {/* Email */}
        <a
          href="mailto:abuathman83@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="flex space-x-2 items-center cursor-pointer text-white px-4 md:px-2 p-2 px-auto bg-sideBarHighlight rounded-lg hover:bg-zinc-700"
        >
          <RiMailFill size={20} className="text-mailBlue" />
          <h1 className="hidden md:block">Email Me</h1>
        </a>
        {/* YouTube */}
        <a
          href="https://www.youtube.com/@programwithabu"
          target="_blank"
          rel="noreferrer"
          className="flex space-x-2 items-center cursor-pointer text-white px-4 md:px-2 p-2 px-auto bg-sideBarHighlight rounded-lg hover:bg-zinc-700"
        >
          <RiYoutubeFill size={20} className="text-youtubeRed" />
          <h1 className="hidden md:block">YouTube</h1>
        </a>
        {/* Linkedin */}
        <a
          href="https://www.linkedin.com/in/abubakar-athman/"
          target="_blank"
          rel="noreferrer"
          className="flex space-x-2 items-center cursor-pointer text-white px-4 md:px-2 p-2 px-auto bg-sideBarHighlight rounded-lg hover:bg-zinc-700"
        >
          <RiLinkedinFill size={20} className="text-linkedinBlue" />
          <h1 className="hidden md:block">LinkedIn</h1>
        </a>
        {/* Github */}
        <a
          href="https://github.com/iAthman83"
          target="_blank"
          rel="noreferrer"
          className="flex space-x-2 items-center cursor-pointer text-white px-4 md:px-2 p-2 px-auto bg-sideBarHighlight rounded-lg hover:bg-zinc-700"
        >
          <RiGithubFill size={20} className="text-sideBarText" />
          <h1 className="hidden md:block">GitHub</h1>
        </a>
        {/* Twitter */}
        <a
          href="https://twitter.com/iathman83"
          target="_blank"
          rel="noreferrer"
          className="flex space-x-2 items-center cursor-pointer text-white px-4 md:px-2 p-2 px-auto bg-sideBarHighlight rounded-lg hover:bg-zinc-700"
        >
          <RiTwitterFill size={20} className="text-twitterBlue" />
          <h1 className="hidden md:block">Twitter</h1>
        </a>
      </div>
    </div>
  );
}

export default SideNav;
