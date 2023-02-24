import { forwardRef } from "react";
import image from "../assets/man-desk.png";
import portrait from "../assets/portrait.png";

const HomeSection = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="md:container md:mx-auto md:flex md:h-screen bg-grayBg md:pb-20 md:pt-10 md:items-center md:px-12 flex flex-col-reverse md:flex-row px-4 md:my-4"
    >
      <div className="flex flex-1 flex-col space-y-8">
        <h1 className="md:text-2xl text-textGray">Hi, I am</h1>
        <h1 className="text-6xl text-sideBarText font-sofia font-extrabold">
          Abu <span className="text-teal-400">Athman</span>
        </h1>
        <h1 className="md:text-2xl text-textGray">
          A dynamic{" "}
          <span className="text-orange-400">full stack software developer</span>{" "}
          with a talent for creating innovative solutions that drive business
          success.
        </h1>
        <h1 className="md:text-2xl text-textGray">
          Proficient in <span className="text-emerald-400">ReactJS,</span>{" "}
          <span className="text-yellow-400">React Native,</span>{" "}
          <span className="text-red-400">VueJS,</span>{" "}
          <span className="text-blue-400">NodeJS,</span>{" "}
          <span className="text-green-400">MongoDB</span> and{" "}
          <span className="text-purple-400">WordPress.</span> I use these skills
          in building dynamic and scalable web applications.
        </h1>
      </div>
      <div className="flex flex-1 justify-center">
        <img className="h-96 rounded-box" src={portrait} alt="" srcset="" />
      </div>
    </div>
  );
});

export default HomeSection;
