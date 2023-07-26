import { groq } from "next-sanity";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "zctveqkg",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-07-25",
  token:
    "skMsraUHGKksUyMODxEeO9uIKN7bKoUql8GfrKR62McWheDwHJeiIr5wUecy9wj1UcSVKnbGsdTqMvDHruEW2TPaiCRLHfJD0vbRd0Emut3MhBETKyoc7Gf8gPw00B2tyy9XeRulO5VkqOh675wc1rTO2VM8P1arW5DGMDuK8ih6KdS3OrQV",
});

// uses GROQ
export async function getPosts() {
  const posts = await client.fetch(
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
  );
  const response = await posts;
  return response;
}
