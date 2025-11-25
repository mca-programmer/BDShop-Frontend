"use client";

import Marquee from "react-fast-marquee";
import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaWhatsappSquare,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center text-pink-500">
        Contact Us
      </h1>

      <div className="flex items-center justify-center gap-6 mb-8">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=100095485868640"
          className="text-blue-600 hover:text-blue-800 transition-colors duration-500 rounded-full p-2 hover:bg-blue-100"
        >
          <FaFacebook size={36} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/md-musarraf-hosen/"
          className="text-blue-500 hover:text-blue-700 transition-colors duration-500 rounded-full p-2 hover:bg-blue-100"
        >
          <FaLinkedinIn size={36} />
        </a>

        {/* Github */}
        <a
          href="https://github.com/mca-programmer"
          className="text-gray-800 hover:text-gray-900 transition-colors duration-500 rounded-full p-2 hover:bg-gray-200"
        >
          <FaGithub size={36} />
        </a>

        <a href="" className="text-green-500">
          <FaWhatsappSquare size={36} />
        </a>
      </div>

      <div className="max-w-2xl mx-auto bg-white text-black p-6 rounded-lg shadow-md mt-5">
        <form className="flex flex-col gap-4">
          <div>
            <label
              className="block mb-1 font-bold text-pink-600"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label
              className="block mb-1 font-bold text-pink-600"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label
              className="block mb-1 font-bold text-pink-600"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-md px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
