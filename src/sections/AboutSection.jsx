import { forwardRef } from "react";
import YouTube from "react-youtube";
import { RiYoutubeFill, RiMailFill } from "react-icons/ri";

const AboutSection = forwardRef((props, ref) => {
  const opts = {
    height: "360",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    <div ref={ref} className="container mx-auto bg-grayBg pb-20 px-12">
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
            developments. I also like to share my knowledge through video
            tutorials on my YouTube channel.
          </p>
          <div className="flex space-x-4">
            <a
              href="mailto:abuathman83@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex space-x-2 items-center cursor-pointer text-white p-2 px-auto bg-emerald-500 px-8 rounded-lg hover:bg-emerald-600"
            >
              {/* <RiMailFill size={25} className="text-mailBlue" /> */}
              <h1 className="text-lg">Work with me</h1>
            </a>
            <a
              href="https://www.youtube.com/@programwithabu"
              target="_blank"
              rel="noreferrer"
              className="flex space-x-2 items-center cursor-pointer text-white p-2 px-auto bg-sideBarHighlight px-14 rounded-lg hover:bg-zinc-700"
            >
              {/* <RiYoutubeFill size={25} className="text-youtubeRed" /> */}
              <h1 className="text-lg">Subscribe</h1>
            </a>
          </div>
        </div>
        <div className="flex flex-1 flex-col space-y-8">
          <h1 className="text-sideBarText text-2xl font-sofia font-extrabold">
            One of my many tutorials
          </h1>
          <YouTube
            className="rounded-lg overflow-hidden"
            videoId="_G5RxzxJz4A"
            opts={opts}
          />
        </div>
      </div>
    </div>
  );
});

export default AboutSection;
