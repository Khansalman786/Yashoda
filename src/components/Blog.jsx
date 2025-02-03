import { motion } from "framer-motion";

const Blog = () => {
  const posts = [
    {
      title: "Understanding Fertility Treatments",
      excerpt: "A comprehensive guide to modern fertility treatments and options.",
      date: "Feb 1, 2025",
    },
    {
      title: "Nutrition During Pregnancy",
      excerpt: "Essential nutrients for a healthy pregnancy journey.",
      date: "Jan 28, 2025",
    },
  ];

  return (
    <section id="blog" className="py-16 bg-gradient-to-r from-pink-50 to-pink-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Latest Blog Posts
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <button className="px-4 py-2 text-sm font-semibold text-pink-600 border border-pink-500 rounded-lg hover:bg-pink-500 hover:text-white transition">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
