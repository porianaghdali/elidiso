import Link from "next/link";
import { client, urlFor } from "../../lib/sanity";

export default async function BlogPage() {
  const articles = await client.fetch(`*[_type == "article"]{
  title,
  slug,
  publishedAt,
  coverImage
}`);

  return (
    <div className="px-[5vw] py-[5vw]">
      <h1 className="text-3xl font-bold mb-6 text-white">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {articles.map((art) => (
          <Link key={art.slug.current} href={`/blog/${art.slug.current}`}>
            <div className="  rounded-xl overflow-hidden bg-white cursor-pointer">
              <img
                src={urlFor(art.coverImage).width(400).height(250).url()}
                alt={art.title}
                className=" w-full  object-cover row-span-2"
              />
              <div className="p-4">
              <h2 className="font-semibold text-lg">{art.title}</h2>
              <p className="text-sm">
                {new Date(art.publishedAt).toLocaleDateString()}
              </p></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
