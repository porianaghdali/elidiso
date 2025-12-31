import Link from "next/link";
import { PortableText } from '@portabletext/react'

import { client,  } from "../../../sanity/lib/client";
async function getData(slug) {
  const data = await client.fetch(`*[_type=="post" && slug.current == "${slug}"]{
    title,
    slug,body,
    publishedAt,author,"imageUrl": mainImage.asset->url
   
  }`);
  return data[0];
}
export default async function BlogPage({ params }) {
  const { slug } = await params;
 
 const article = await getData(slug);
 console.log(article, "articles");
  return (
    <div className="px-[5vw] py-[5vw]">
       <h1 className="text-4xl font-bold mb-4 text-white">{article.title}</h1> 
      <p className="text-white mb-6">{new Date(article.publishedAt).toLocaleDateString()}</p>

      <div className="space-y-6 text-white">
         <PortableText
          value={article.body}
          
        />
      </div>
    </div>
  )
}
