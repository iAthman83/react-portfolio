import { RiYoutubeFill, RiGithubFill, RiGlobalLine } from "react-icons/ri";

const ProjectsCardComponent = (props) => {
  return (
    <div className="bg-sideBarHighlight w-72 rounded-lg overflow-hidden cursor-pointer transition-all duration-100 hover:scale-105">
      {/* <img
        src="https://images.pexels.com/photos/12155032/pexels-photo-12155032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        srcset=""
      /> */}
      <div className="bg-linkedinBlue h-48 flex justify-center items-center overflow-hidden">
        {/* <RiYoutubeFill size={30} /> */}
        <img className="" src={props.image} alt="" srcset="" />
      </div>
      {/* Desccription */}
      <div className="px-2 my-6 flex flex-col space-y-4">
        <h1 className="text-sideBarText text-2xl font-sofia font-extrabold">
          {props.title}
        </h1>
        <p className="text-base">{props.description}</p>
      </div>
      {/* Stack */}
      <div className="flex flex-row my-6 px-2 space-x-2">
        {props.stack.map((item) => (
          <li
            className={`${item.color} px-2 rounded-md ${
              item.fontColor ? item.fontColor : "text-sideBarText"
            }`}
          >
            {item.name}
          </li>
        ))}
      </div>
      {/* Links */}
      <div className="flex flex-row my-6 px-2 space-x-2">
        <div className="flex rounded-md">
          <RiGithubFill size={30} />
        </div>
        <div className="flex rounded-md">
          <RiGlobalLine size={30} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCardComponent;
