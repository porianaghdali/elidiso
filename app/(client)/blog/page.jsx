import Link from "next/link";
import { client } from "../../../sanity/lib/client";

async function getData() {
  const data = await client.fetch(`*[_type=="post"]{
    title,
    slug,
    publishedAt,author->{
  name,
  bio,
  image
}
,"imageUrl": mainImage.asset->url
   
  }`);
  return data;
}

export const revalidate = 60; 

export default async function BlogPage() {
  const articles = await getData();
  console.log(articles);
  return (
    <div className="px-[5vw] py-[5vw]">
      <h1 className="text-3xl font-bold mb-6 text-white">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {articles.map((art, index) => {
          const slug = art.slug?.current || `article-${index}`;
          const imageUrl = art.imageUrl || "/fallback.jpg";

          return (
            <Link key={slug} href={`/blog/${slug}`}>
              <div className="rounded-xl overflow-hidden bg-white cursor-pointer">
                <img
                  src={imageUrl}
                  alt={art.title}
                  className="w-full object-cover row-span-2"
                />
                <div className="p-4">
                  <h2 className="font-semibold text-lg">{art.title}</h2>
                  <p className="text-sm">
                    {new Date(art.publishedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
