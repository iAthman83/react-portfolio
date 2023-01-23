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
} from "react-icons/ri";

function SideNav({ aboutRef, homeRef, projectsRef, workflowRef }) {
  return (
    <div className="fixed top-0 left-0 bg-gray-800 h-screen w-20 flex-none py-6">
      {/* logo */}
      <div className="flex items-center justify-center my-4 py-4 p-4 px-auto border-b-2">
        logo
      </div>
      {/* nav */}
      <nav className="flex flex-col justify-center items-center space-y-2">
        {/* home */}
        <section
          onClick={() => homeRef.current.scrollIntoView({ behavior: "smooth" })}
          className="cursor-pointer text-white block p-4 px-auto bg-gray-700 rounded-full hover:bg-yellowAccent hover:rounded-3xl transition-all ease-in-out group relative"
        >
          <HiOutlineHome
            size={24}
            className="text-yellowAccent group-hover:text-white"
          />
          <span className="absolute flex-row w-auto p-2 m-2 px-4 rounded-md left-16 bottom-1 shadow-md text-gray-100 bg-blackBg font-semibold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
            Home
          </span>
        </section>
        {/* about */}
        <section
          onClick={() =>
            aboutRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-pointer text-white block p-4 px-auto bg-gray-700 rounded-full hover:bg-yellowAccent hover:rounded-3xl transition-all ease-in-out group relative"
        >
          <HiOutlineUser
            size={24}
            className="text-yellowAccent group-hover:text-white"
          />
          <span className="absolute flex-row w-auto p-2 m-2 px-4 rounded-md left-16 bottom-1 shadow-md text-gray-100 bg-blackBg font-semibold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
            About
          </span>
        </section>
        {/* projects */}
        <section
          onClick={() =>
            projectsRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-pointer text-white block p-4 px-auto bg-gray-700 rounded-full hover:bg-yellowAccent hover:rounded-3xl transition-all ease-in-out group relative"
        >
          <HiOutlineCube
            size={24}
            className="text-yellowAccent group-hover:text-white"
          />
          <span className="absolute flex-row w-auto p-2 m-2 px-4 rounded-md left-16 bottom-1 shadow-md text-gray-100 bg-blackBg font-semibold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
            Projects
          </span>
        </section>
        {/* workflow */}
        <section
          onClick={() =>
            workflowRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-pointer text-white block p-4 px-auto bg-gray-700 rounded-full hover:bg-yellowAccent hover:rounded-3xl transition-all ease-in-out group relative"
        >
          <HiOutlineDesktopComputer
            size={24}
            className="text-yellowAccent group-hover:text-white"
          />
          <span className="absolute flex-row w-auto p-2 m-2 px-4 rounded-md left-16 bottom-1 shadow-md text-gray-100 bg-blackBg font-semibold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
            Workflow
          </span>
        </section>
      </nav>
      {/* socials */}
      <div className="flex flex-col justify-center items-center space-y-2 mt-8">
        {/* YouTube */}
        <a
          href="https://www.youtube.com/@programwithabu"
          target="_blank"
          rel="noreferrer"
          className="text-white block p-4 px-auto bg-gray-700 rounded-full hover:bg-yellowAccent hover:rounded-3xl transition-all ease-in-out group relative"
        >
          <RiYoutubeFill
            size={24}
            className="text-yellowAccent group-hover:text-white"
          />
          <span className="absolute flex-row w-auto p-2 m-2 px-4 rounded-md left-16 bottom-1 shadow-md text-gray-100 bg-blackBg font-semibold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
            YouTube
          </span>
        </a>
        {/* Linkedin */}
        <a
          href="https://www.linkedin.com/in/abubakar-athman/"
          target="_blank"
          rel="noreferrer"
          className="text-white block p-4 px-auto bg-gray-700 rounded-full hover:bg-yellowAccent hover:rounded-3xl transition-all ease-in-out group relative"
        >
          <RiLinkedinFill
            size={24}
            className="text-yellowAccent group-hover:text-white"
          />
          <span className="absolute flex-row w-auto p-2 m-2 px-4 rounded-md left-16 bottom-1 shadow-md text-gray-100 bg-blackBg font-semibold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
            Linkedin
          </span>
        </a>
        {/* Github */}
        <a
          href="https://github.com/iAthman83"
          target="_blank"
          rel="noreferrer"
          className="text-white block p-4 px-auto bg-gray-700 rounded-full hover:bg-yellowAccent hover:rounded-3xl transition-all ease-in-out group relative"
        >
          <RiGithubFill
            size={24}
            className="text-yellowAccent group-hover:text-white"
          />
          <span className="absolute flex-row w-auto p-2 m-2 px-4 rounded-md left-16 bottom-1 shadow-md text-gray-100 bg-blackBg font-semibold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
            Github
          </span>
        </a>
        {/* Twitter */}
        <a
          href="https://twitter.com/iathman83"
          target="_blank"
          rel="noreferrer"
          className="text-white block p-4 px-auto bg-gray-700 rounded-full hover:bg-yellowAccent hover:rounded-3xl transition-all ease-in-out group relative"
        >
          <RiTwitterFill
            size={24}
            className="text-yellowAccent group-hover:text-white"
          />
          <span className="absolute flex-row w-auto p-2 m-2 px-4 rounded-md left-16 bottom-1 shadow-md text-gray-100 bg-blackBg font-semibold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
            Twitter
          </span>
        </a>
      </div>
    </div>
  );
}

export default SideNav;
