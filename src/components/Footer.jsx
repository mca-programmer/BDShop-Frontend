"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-pink-600 text-white py-12 rounded-md shadow-lg">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Links */}
        <div className="flex flex-wrap gap-6 justify-center md:justify-start font-medium">
          <Link
            href="/"
            className="transition-colors duration-300 hover:text-pink-200"
          >
            Home
          </Link>
          <Link
            href="/addProduct"
            className="transition-colors duration-300 hover:text-pink-200"
          >
            Add Product
          </Link>
          <Link
            href="/about"
            className="transition-colors duration-300 hover:text-pink-200"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="transition-colors duration-300 hover:text-pink-200"
          >
            Contact
          </Link>
        </div>

        {/* Center: Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/mca-programmer"
            target="_blank"
            className="transition-transform transform hover:scale-125 hover:text-gray-900"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100095485868640"
            target="_blank"
            className="transition-transform transform hover:scale-125 hover:text-blue-600"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/md-musarraf-hosen/"
            target="_blank"
            className="transition-transform transform hover:scale-125 hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-sm text-center md:text-right opacity-90">
          © 2025 BDShop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
