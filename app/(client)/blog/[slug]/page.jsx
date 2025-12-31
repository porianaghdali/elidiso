import Link from "next/link";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

import { client } from "../../../../sanity/lib/client";
async function getData(slug) {
  const data =
    await client.fetch(`*[_type=="post" && slug.current == "${slug}"]{
    title,
    slug,body,
    publishedAt,
    author->{
  name,
  bio,
  image
}
,
    "imageUrl": mainImage.asset->url
   
  }`);
  return data[0];
}

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// --- کامپوننت PortableText ---
const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;

      const url = urlFor(value).url();
      const [w, h] = value.asset._ref
        .match(/-(\d+)x(\d+)-/)
        .slice(1, 3)
        .map(Number);

      const alignClass = {
        center: "mx-auto",
        right: "ml-auto mr-0",
        left: "mr-auto ml-0",
      };

      return (
        <div className="">
          <Image
            src={url}
            alt={value.alt || ""}
            width={w}
            height={h}
            className={`rounded-lg object-cover ${alignClass[value.align || "center"]}`}
            style={{ maxWidth: value.maxWidth || "100%" }}
          />
        </div>
      );
    },

    code: ({ value }) => (
      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto my-4">
        <code>{value.code}</code>
      </pre>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold my-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold my-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold my-2">{children}</h3>
    ),
    normal: ({ children }) => <p className="my-2 text-gray-200">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => (
      <ul className="list-disc ml-6 space-y-1 text-gray-200">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal ml-6 space-y-1 text-gray-200">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target ? "noopener noreferrer" : undefined}
          className="text-blue-400 hover:underline"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
  },
};

export default async function BlogPage({ params }) {
  const { slug } = await params;

  const article = await getData(slug);
  console.log(article.author._ref);
  return (
    <div className="px-[5vw] py-[5vw]">
      <h1 className="text-4xl font-bold mb-4 text-white">{article.title}</h1>
     

      <div className=" text-white max-w-[900px] mx-auto">
        <div className="mb-4 text-gray-400 text-sm flex items-center gap-2">
          <p className="">
            {new Date(article.publishedAt).toLocaleDateString()}
          </p>
          <p>{article.author.name}</p>
        </div>
        <PortableText components={ptComponents} value={article.body} />
      </div>
    </div>
  );
}
