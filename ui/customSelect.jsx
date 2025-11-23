// components/CustomSelect.jsx
"use client"; // required in Next.js 13+ app directory for client components
import { useState } from "react";

export default function CustomSelect({ options, placeholder = "Select an option", onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onChange) onChange(option);
  };

  return (
    <div className="relative w-64">
      {/* Selected / Placeholder */}
      <div
        className="border rounded-md p-2 cursor-pointer bg-white flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected ? selected.label : placeholder}</span>
        <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full border rounded-md
         bg-white mt-1 z-10  shadow-lg">
          {options.map((option) => (
            <li
              key={option.value}
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
