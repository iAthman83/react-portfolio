import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineCube,
  HiOutlineDesktopComputer,
} from "react-icons/hi";
function SideNav() {
  return (
    <div className="fixed top-0 left-0 bg-gray-800 h-screen w-20 flex-none py-6">
      {/* logo */}
      <div className="flex items-center justify-center my-4 py-4 p-4 px-auto border-b-2">
        logo
      </div>
      {/* nav */}
      <nav className="flex flex-col justify-center items-center space-y-6">
        {/* home */}
        <a
          href="#"
          className="text-white block p-4 px-auto bg-gray-700 rounded-full hover:bg-yellowAccent hover:rounded-3xl transition-all ease-in-out group relative"
        >
          <HiOutlineHome
            size={30}
            className="text-yellowAccent group-hover:text-white"
          />
          <span class="absolute flex-row w-auto p-2 m-2 px-4 rounded-md left-16 bottom-1 shadow-md text-gray-100 bg-blackBg font-semibold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
            Home
          </span>
        </a>
        {/* about */}
        <a
          href="#"
          className="text-white block p-4 px-auto bg-gray-700 rounded-full hover:bg-yellowAccent hover:rounded-3xl transition-all ease-in-out group relative"
        >
          <HiOutlineUser
            size={30}
            className="text-yellowAccent group-hover:text-white"
          />
          <span class="absolute flex-row w-auto p-2 m-2 px-4 rounded-md left-16 bottom-1 shadow-md text-gray-100 bg-blackBg font-semibold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
            About
          </span>
        </a>
        {/* projects */}
        <a
          href="#"
          className="text-white block p-4 px-auto bg-gray-700 rounded-full hover:bg-yellowAccent hover:rounded-3xl transition-all ease-in-out group relative"
        >
          <HiOutlineCube
            size={30}
            className="text-yellowAccent group-hover:text-white"
          />
          <span class="absolute flex-row w-auto p-2 m-2 px-4 rounded-md left-16 bottom-1 shadow-md text-gray-100 bg-blackBg font-semibold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
            Projects
          </span>
        </a>
        {/* workflow */}
        <a
          href="#"
          className="text-white block p-4 px-auto bg-gray-700 rounded-full hover:bg-yellowAccent hover:rounded-3xl transition-all ease-in-out group relative"
        >
          <HiOutlineDesktopComputer
            size={30}
            className="text-yellowAccent group-hover:text-white"
          />
          <span class="absolute flex-row w-auto p-2 m-2 px-4 rounded-md left-16 bottom-1 shadow-md text-gray-100 bg-blackBg font-semibold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
            Workflow
          </span>
        </a>
        {/* clients */}
      </nav>
    </div>
  );
}

export default SideNav;
