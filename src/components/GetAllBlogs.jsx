import { client } from "../../lib/client";
import { useState, useEffect } from "react";

const GetAllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
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
      .then((data) => setBlogs(data))
      .catch(console.error);
  }, []);
  return blogs;
};

export default GetAllBlogs;
