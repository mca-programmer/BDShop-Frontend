"use client";

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Best Electronics",
    excerpt: "Tips & strategies to pick the perfect gadgets based on your needs.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Top Fashion Trends of 2025",
    excerpt: "Explore the most popular clothing trends shaping the year ahead.",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=80", // Unsplash ছবি 
  },
];


export default function BlogSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-10">
       Recent Blogs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-300 text-lg mb-2">{post.title}</h3>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
