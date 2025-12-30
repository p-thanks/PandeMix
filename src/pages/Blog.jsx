'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SlideUp } from "../utility/animation";
import { assets } from "../assets/asset";

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <section className="py-20 mt-9">
      <div className="container">

        {/* Heading */}
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="text-4xl font-bold text-darkBlue text-center mb-6"
        >
          Latest Articles
        </motion.h1>

        <motion.p
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
          className="text-center max-w-2xl mx-auto text-gray-400 mb-12"
        >
          Stay informed with trusted health insights, updates, and guidance.
        </motion.p>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {assets.map((post, index) => (
            <motion.div
              key={index}
              variants={SlideUp(0.6 + index * 0.2)}
              initial="initial"
              whileInView="animate"
              onClick={() => setSelectedBlog(post)}
              className="bg-white rounded-3xl shadow-sm hover:shadow-md transition p-4 cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.title}
                className="rounded-2xl mb-4 w-full"
              />
              <h3 className="text-lg font-semibold text-darkBlue mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-400">{post.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BLOG POPUP MODAL */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBlog(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full p-6 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-1 right-1 text-gray-500 hover:text-black transition"
              >
                <X size={24} />
              </button>

              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="rounded-2xl mb-4 w-full"
              />

              <h2 className="text-2xl font-bold text-darkBlue mb-3">
                {selectedBlog.title}
              </h2>

              <p className="text-gray-400 leading-relaxed">
                {selectedBlog.content}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Blog;