"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomSelect from "../../ui/customSelect";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./products/list.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const selectItems=[
    {label:"Default sorting",value:1},
    {label:"Sort by popularity",value:2},
    {label:"Sort by average rating",value:3},
    {label:"Sort by latest",value:4},
    {label:"Sort by price: low to high",value:5},
    {label:"Sort by price: high to low",value:6},
  ]
  return (
    <div className="w-[90%] my-[10vw] mx-auto">
      <div className="flex justify-between items-center">
        <p className="my-[1vw] text-white font-semibold text-3xl">
          printer card
        </p>
      <CustomSelect options={selectItems} />
      </div>
      <div
        className="gap-4  
      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
     lg:grid-cols-4"
      >
        {products.map((item, index) => (
          <div key={index} className="p-3 bg-white rounded-xl">
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={250}
              className="rounded-lg"
            />
            <div className="text-[#212121] flex justify-between items-center">
              <Link
                href={`/product/${item.id}`}
                className="px-3 py-2 rounded-md  w-fit border text-xs hover:bg-gray-200"
              >
                READ MORE
              </Link>
              <h2 className="font-medium text-sm">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
