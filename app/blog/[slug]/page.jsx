import Link from "next/link";
import { PortableText } from '@portabletext/react'

import { client, urlFor } from "../../../lib/sanity";

export default async function BlogPage({ params }) {
  const { slug } = await params;
 
  const article = await client.fetch(
    `*[_type == "article" && slug.current == $slug][0]{
      title,
      sections,
      publishedAt
    }`,
    { slug }
  );
  console.log(article);
  return (
    <div className="px-[5vw] py-[5vw]">
      <h1 className="text-4xl font-bold mb-4 text-white">{article.title}</h1>
      <p className="text-white mb-6">{new Date(article.publishedAt).toLocaleDateString()}</p>

      <div className="space-y-6 text-white">
        <PortableText
          value={article.sections}
          components={{
            types: {
              image: ({ value }) => (
                <img
                  src={urlFor(value.asset).width(400).height(400).url()}
                  alt={article.title}
                  className="rounded-xl"
                />
              ),
            },
            marks: {
              strong: ({ children }) => <strong className="font-bold">{children}</strong>,
              em: ({ children }) => <em>{children}</em>,
              // میتونی لینک و بقیه markها هم اضافه کنی
            },
          }}
        />
      </div>
    </div>
  )
}
