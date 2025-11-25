"use client";
const sectionsData = [
  {
    title: "Fast Delivery",
    description: "Receive your products within 24 hours, hassle-free.",
    image:
      "https://cdn.prod.website-files.com/637e7800d5eebdbd14300a95/63f84f5a8fa23e9034c7f35d_3YgcT10BK3U1NJgM.jpeg",
  },
  {
    title: "24/7 Support",
    description: "Our support team is ready to assist you anytime, anywhere.",
    image:
      "https://mcmillan.ca/wp-content/uploads/2021/12/1221-08-Natural-Health-Products-Licensing-Require-Canada-thumb.jpg",
  },
  {
    title: "Secure Payments",
    description: "Multiple secure payment options for your peace of mind.",
    image:
      "https://media.istockphoto.com/id/1164263699/photo/woman-cosmetologist-cosmetics-testing-natural-organic-cosmetics-serum-hair-mask-flat-lay.jpg?s=612x612&w=0&k=20&c=evlqPqmuL-Gjgp2YDRVLUFlCaKFx3suEnp9JwQ0PrNU=",
  },
  {
    title: "Quality Products",
    description: "Only top-notch products sourced with care for you.",
    image:
      "https://m.media-amazon.com/images/I/81ly75fmTrL._AC_UF350,350_QL80_.jpg",
  },
];

export default function Sections() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-pink-600">
        Why Clients Trust Us
      </h2>

      {/* Continuous marquee wrapper */}
      <div className="overflow-hidden relative">
        <div className="flex animate-marquee space-x-6">
          {/* Duplicate sections for seamless looping */}
          {[...sectionsData, ...sectionsData].map((section, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-6 w-64 flex-shrink-0 flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-16 h-16 mb-4 object-cover rounded-full"
              />
              <h3 className="text-xl text-gray-800 font-semibold mb-2">{section.title}</h3>
              <p className="text-gray-600">{section.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom TailwindCSS animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
