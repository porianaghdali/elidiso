"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const list = [
    { name: "Home", link: "/" },
    { name: "product", link: "/product" },
    { name: "About", link: "/aboutUs" },
    // { name: "SL300", link: "#SL300" },
    // { name: "SNLxx", link: "#SNLxx" },
    // { name: "IoT Software", link: "#IoT" },
    // { name: "Applications", link: "#Applications" },
    // { name: "Contact", link: "/contact" },
    { name: "blog", link: "/blog" },
  ];

  return (
    <header className="sticky top-0 left-0 w-full z-50 ">
      {/* Menu icon */}
      <div className="w-[90%] mx-auto pt-8 px-2 flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1 w-[34px] items-center transition-all duration-300"
        >
          {/* Top bar */}
          <div
            className={`h-1.5 w-4/5 bg-white rounded-md transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2 bg-red-400" : ""
            }`}
          ></div>

          {/* Middle bar */}
          <div
            className={`h-1.5 w-full bg-[#809FFF] rounded-md transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></div>

          {/* Bottom bar */}
          <div
            className={`h-1.5 w-4/5 bg-white rounded-md transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2 bg-red-400" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* Menu list */}
      <div
        className={`fixed top-0 left-0 w-full h-full
             bg-black/60 backdrop-blur-sm transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-[#1C1C1F] text-white p-6 shadow-xl transition-all duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mt-20 flex flex-col gap-6 text-lg">
          {list.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="hover:text-[#809FFF] transition text-center"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
