import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { PortableText } from "@portabletext/react";
import { client } from "../../lib/client";
import getYouTubeId from "get-youtube-id";
// import LiteYouTubeEmbed from "react-lite-youtube-embed";
// import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import YouTube from "react-youtube";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const serializers = {
  types: {
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return <YouTube videoId={id} opts={opts} />;
    },
  },
};

const SingleBlogPage = () => {
  const params = useParams();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == 'post']{
    _id,
    title,
    "slug": slug.current,
    "image": mainImage.asset->url,
    publishedAt,
    "body": pt::text(body),
    "author": *[_type == 'author' && _id == ^.author._ref][0]{
      _id,
      name,
      "slug": slug.current,
      },
      categories[]->{
      _id,
      title
    },
    "content": body,
  }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  if (posts.length < 0) return <div>Loading...</div>;
  else if (posts.length > 0) {
    const singlePost = posts.find((post) => post._id === params.postId);

    console.log(singlePost);
    return (
      <div className="flex space-y-8 my-8 flex-col lg:px-40 px-4 min-h-screen">
        <div className="w-full flex flex-col justify-center space-y-8 items-center">
          <h1 className="text-2xl text-primary-dark font-semibold drop-shadow-md">
            {singlePost.title}
          </h1>
          <img
            src={singlePost.image}
            width={600}
            height={200}
            alt={singlePost.title}
            className="backdrop-brightness-100"
          />
        </div>
        <div>
          <p>
            By{" "}
            <span className="font-semibold text-primary-brand">
              {singlePost.author.name},{" "}
              {Date(singlePost.publishedAt).substring(0, 10)}
            </span>
          </p>
        </div>
        <div>
          <PortableText value={singlePost.content} types={serializers} />
        </div>
      </div>
    );
  }
};

export default SingleBlogPage;
