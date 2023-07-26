import { Link } from "react-router-dom";
import postImage from "../assets/robot.jpg";

const BlogCardComponent = ({ postData }) => {
  return (
    <>
      <div className="flex flex-col space-y-2 bg-primary-bg w-72 hover:cursor-pointer hover:scale-105 transition-transform duration-200 ease-out rounded overflow-hidden">
        <div>
          <img src={postData.image} alt="image" height={50} width={300} />
          {/* <img src={postImage} alt="image" height={50} width={300} /> */}
        </div>
        <div className="flex flex-row">
          <p className="font-semibold text-sm text-primary-brand">
            {postData.author.name}, {/* Abubakar Athman */}
            {/* {Date.now()} */}
            {Date(postData.publishedAt).substring(0, 10)}
          </p>
        </div>
        <div>
          <h1 className="text-xl font-bold">{postData.title}</h1>
          {/* <h1 className="text-xl font-bold">What is Robotics</h1> */}
        </div>
        <div>
          <p className="line-clamp-3">{postData.body}</p>
          {/* <p className="line-clamp-2">
            I'm baby tilde 8-bit taxidermy, cliche venmo mixtape farm-to-table
            narwhal yes plz.
          </p> */}
        </div>
        {/* <div className="flex flex-row flex-wrap space-x-2"> */}
        {postData.categories.map((category) => (
          <p
            key={category._id}
            className="border bg-primary-dark text-primary-bg py-1 px-2 text-xs rounded-full"
          >
            {category.title}
          </p>
        ))}
        {/* </div> */}
      </div>
    </>
  );
};

export default BlogCardComponent;
