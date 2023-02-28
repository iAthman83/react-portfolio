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
import portrait from "../assets/portrait-rounded.png";

function SideNav({ aboutRef, homeRef, projectsRef, workflowRef }) {
  return (
    <div className="fixed w-full bottom-0 z-10 md:fixed md:flex flex-row md:flex-col  px-4 md:top-0 md:left-0 bg-sideBarBg md:h-screen md:w-96 md:flex-none py-2 md:py-2">
      {/* logo */}
      <div className="hidden md:flex md:flex-col md:items-center md:justify-center md:my-2 py-2 space-y-4 px-auto">
        <img
          className="h-52 border-8 border-gray-700 rounded-full"
          src={portrait}
          alt=""
        />
        <h1 className="hidden md:block text-3xl font-semibold text-white">
          Abu Athman
        </h1>
      </div>
      {/* socials */}
      <div className="flex first:p-2 justify-between md:justify-center space-x-3 my-2">
        {/* Email */}
        <a
          href="mailto:abuathman83@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="flex space-x-2 items-center cursor-pointer text-white px-4 md:px-2 p-2 px-auto bg-zinc-700 rounded-lg md:rounded-full hover:bg-mailBlue"
        >
          <RiMailFill size={20} className="text-mailBlue md:text-white" />
          <h1 className="hidden">Email Me</h1>
        </a>
        {/* YouTube */}
        <a
          href="https://www.youtube.com/@programwithabu"
          target="_blank"
          rel="noreferrer"
          className="flex space-x-2 items-center cursor-pointer text-white px-4 md:px-2 p-2 px-auto bg-zinc-700 rounded-lg md:rounded-full hover:bg-youtubeRed"
        >
          <RiYoutubeFill size={20} className="text-youtubeRed md:text-white" />
          <h1 className="hidden">YouTube</h1>
        </a>
        {/* Linkedin */}
        <a
          href="https://www.linkedin.com/in/abubakar-athman/"
          target="_blank"
          rel="noreferrer"
          className="flex space-x-2 items-center cursor-pointer text-white px-4 md:px-2 p-2 px-auto bg-zinc-700 rounded-lg md:rounded-full hover:bg-linkedinBlue"
        >
          <RiLinkedinFill
            size={20}
            className="text-linkedinBlue md:text-white"
          />
          <h1 className="hidden">LinkedIn</h1>
        </a>
        {/* Github */}
        <a
          href="https://github.com/iAthman83"
          target="_blank"
          rel="noreferrer"
          className="flex space-x-2 items-center cursor-pointer text-white px-4 md:px-2 p-2 px-auto bg-zinc-700 rounded-lg md:rounded-full hover:bg-black"
        >
          <RiGithubFill size={20} className="text-sideBarText md:text-white" />
          <h1 className="hidden">GitHub</h1>
        </a>
        {/* Twitter */}
        <a
          href="https://twitter.com/iathman83"
          target="_blank"
          rel="noreferrer"
          className="flex space-x-2 items-center cursor-pointer text-white px-4 md:px-2 p-2 px-auto bg-zinc-700 rounded-lg md:rounded-full hover:bg-twitterBlue"
        >
          <RiTwitterFill size={20} className="text-twitterBlue md:text-white" />
          <h1 className="hidden">Twitter</h1>
        </a>
      </div>
      {/* nav */}
      <nav className="hidden md:flex md:flex-col md:justify-center space-x-1 md:space-x-0 md:space-y-2 md:ml-14 mt-12">
        {/* home */}
        <section
          onClick={() => homeRef.current.scrollIntoView({ behavior: "smooth" })}
          className="flex space-x-4 items-center cursor-pointer text-white p-2 px-auto rounded-lg hover:bg-zinc-700"
        >
          <HiOutlineHome size={22} className="text-zinc-400" />
          <h1 className="hidden md:block text-zinc-400 text-lg">Home</h1>
        </section>
        {/* about */}
        <section
          onClick={() =>
            aboutRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="flex space-x-4 items-center cursor-pointer text-zinc-400 p-2 px-auto rounded-lg hover:bg-zinc-700"
        >
          <HiOutlineUser size={22} className="text-zinc-400" />
          <h1 className="hidden md:block">About</h1>
        </section>

        {/* projects */}
        <section
          onClick={() =>
            projectsRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="flex space-x-4 items-center cursor-pointer text-white p-2 px-auto rounded-lg hover:bg-zinc-700"
        >
          <HiOutlineCube size={22} className="text-zinc-400" />
          <h1 className="hidden md:block text-zinc-400">Projects</h1>
        </section>
        {/* workflow */}
        <section
          onClick={() =>
            workflowRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="flex space-x-4 items-center cursor-pointer text-white p-2 px-auto rounded-lg hover:bg-zinc-700"
        >
          <HiOutlineDesktopComputer size={22} className="text-zinc-400" />
          <h1 className="hidden md:block text-zinc-400">Workflow</h1>
        </section>
      </nav>
    </div>
  );
}

export default SideNav;
