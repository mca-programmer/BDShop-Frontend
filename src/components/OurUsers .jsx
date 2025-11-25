"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Ethan Miller",
    feedback:
      "This platform made importing products absolutely hassle-free. Everything felt smooth and efficient!",
    image: "https://i.postimg.cc/k4VkWQDD/AL-AMIN-Seduo.jpg",
  },
  {
    id: 2,
    name: "Noah Anderson",
    feedback:
      "Excellent UI with real-time updates. Everything works seamlessly, and the experience feels truly modern.",
    image: "https://i.postimg.cc/0ysPxBjK/MCA-300.jpg",
  },
  {
    id: 3,
    name: "Ryan Cooper",
    feedback:
      "Very easy to navigate, responsive, and secure. A reliable platform for anyone who wants efficiency.",
    image: "https://i.postimg.cc/tCbMgQdx/Web-Developer-Logo.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: "spring" },
  }),
};

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-pink-600">
          What Our Users Say
        </h2>

        {/* Marquee Wrapper */}
        <div className="overflow-hidden relative">
          <div className="flex animate-marquee space-x-8">
            {[...testimonials, ...testimonials].map((testi, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 w-80 flex-shrink-0"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <p className="mb-4 text-gray-700 italic">"{testi.feedback}"</p>
                <div className="flex items-center mt-4">
                  <img
                    src={testi.image}
                    alt={testi.name}
                    className="w-14 h-14 rounded-full mr-4 object-cover"
                  />
                  <h3 className="font-semibold text-pink-600">{testi.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Marquee Animation */}
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
}
