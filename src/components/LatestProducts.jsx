"use client";

import { useEffect, useState } from "react";
import LatestProductCards from "./LatestProductsCard";

export default function LatestProduct() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("https://bd-shop-backend.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProductList(data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  const handleDeleteFromUI = (_id) => {
    setProductList((prev) => prev.filter((p) => p._id !== _id));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
        Latest Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productList.length > 0 ? (
          productList.map((product) => (
            <LatestProductCards
              key={product._id}
              product={product}
              showButtons={true}
              onDelete={handleDeleteFromUI}
            />
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
