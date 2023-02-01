import { forwardRef } from "react";
import YouTube from "react-youtube";

const AboutSection = forwardRef((props, ref) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    <div ref={ref} className="container mx-auto h-screen bg-grayBg my-8">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-5xl text-sideBarText font-sofia font-extrabold">
          ABOUT ME
        </h1>
        <p className="text-base mb-18 text-textGray">
          Have a look at some of my projects below, ranging from React to Vue
          and WordPress
        </p>
        <div className="border-b-8 border-zinc-400 w-28 text-sideBarBg">.</div>
      </div>
      <div className="flex mt-28">
        <div className="flex flex-1 flex-col pr-8 space-y-8">
          <h1 className="text-sideBarText text-2xl font-sofia font-extrabold">
            Who am I?
          </h1>
          <p className="text-textGray text-lg">
            As a highly motivated and skilled software developer, I have a
            passion for creating efficient and effective solutions to complex
            problems. I am confident in my ability to deliver high-quality
            results on time and within budget.
          </p>
          <p className="text-textGray text-lg">
            My love for technology and programming drives me to continuously
            learn and stay up to date with the latest industry trends and
            developments. I am excited to bring my technical expertise and
            problem-solving skills to new projects and opportunities.
          </p>
        </div>
        <div className="flex flex-1 rounded-lg overflow-hidden">
          <YouTube videoId="_G5RxzxJz4A" opts={opts} />
        </div>
      </div>
    </div>
  );
});

export default AboutSection;
