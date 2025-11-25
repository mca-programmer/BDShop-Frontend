"use client";

import Link from "next/link";
import { FaInfoCircle } from "react-icons/fa";

export default function LatestProductCards({ product }) {
  const { _id, category, imageUrl, price, priority, shortDescription, title } =
    product;

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105 p-4 flex flex-col items-center text-center relative">
      <img
        src={imageUrl || "https://via.placeholder.com/300x200"}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      <p className="text-sm font-medium text-pink-600 mb-2">{category}</p>
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h3>

      <p className="text-gray-600 text-sm md:text-base mb-4">
        {shortDescription || "No description available."}
      </p>

      <div className="flex items-center justify-between w-full px-2 mb-4">
        <span className="text-pink-600 font-bold text-lg">${price || 0}</span>
        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
          {priority || "Normal"}
        </span>
      </div>

      {/* Only Details Button */}
      <div className="flex justify-center w-full mt-auto text-xl">
        <Link
          href={`/productsDetails/${_id}`}
          className="text-blue-600 hover:text-blue-800 p-2 rounded-full hover:bg-blue-100 transition"
          title="See Details"
        >
          <FaInfoCircle />
        </Link>
      </div>
    </div>
  );
}
