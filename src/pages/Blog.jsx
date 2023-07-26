import BlogCardComponent from "../components/BlogCardComponent";
import { getPosts, client } from "../../lib/client";
import { useState, useEffect } from "react";

const Blog = () => {
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
  return (
    <div className="flex flex-col lg:px-24 px-4">
      <div className="flex justify-center my-4">
        <h1 className="capitalize text-5xl font-semibold">Blogs</h1>
      </div>
      <ul className="flex flex-row flex-wrap justify-evenly space-y-8">
        {posts.map((post) => (
          <li key={post._id} className="first:mt-8">
            <BlogCardComponent postData={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
