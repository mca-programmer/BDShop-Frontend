"use client";

import { useEffect, useState } from "react";
import { FaInfoCircle, FaTrash } from "react-icons/fa";
import Link from "next/link";
import Swal from "sweetalert2";
import axios from "axios";

export default function AllProducts() {
  const [products, setProducts] = useState([]);

  // Fetch all products
  useEffect(() => {
    fetch("https://bd-shop-backend.vercel.app/allProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  // Delete product from UI and backend
  const handleDelete = async (_id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(
          `https://bd-shop-backend.vercel.app/deleteImportProduct/${_id}`
        );
        Swal.fire("Deleted!", "Product has been deleted.", "success");

        // Remove from UI
        setProducts((prev) => prev.filter((p) => p._id !== _id));
      } catch (err) {
        console.error(err);
        Swal.fire("Error!", "Failed to delete product.", "error");
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 text-center mb-6">
        All Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => {
            const {
              _id,
              title,
              category,
              price,
              priority,
              shortDescription,
              imageUrl,
            } = product;

            return (
              <div
                key={_id}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105 p-4 flex flex-col items-center text-center relative"
              >
                <img
                  src={imageUrl || "https://via.placeholder.com/300x200"}
                  alt={title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />

                <p className="text-sm font-medium text-pink-600 mb-2">
                  {category}
                </p>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  {title}
                </h3>

                <p className="text-gray-600 text-sm md:text-base mb-4">
                  {shortDescription || "No description available."}
                </p>

                <div className="flex items-center justify-between w-full px-2 mb-4">
                  <span className="text-pink-600 font-bold text-lg">
                    ${price || 0}
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    {priority || "Normal"}
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-3 w-full mt-auto text-xl">
                  <Link
                    href={`/productsDetails/${_id}`}
                    className="text-blue-600 hover:text-blue-800 p-2 rounded-full hover:bg-blue-100 transition"
                    title="See Details"
                  >
                    <FaInfoCircle />
                  </Link>

                  <button
                    onClick={() => handleDelete(_id)}
                    className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-100 transition"
                    title="Delete Product"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center col-span-3 text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
