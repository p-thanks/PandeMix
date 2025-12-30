'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Star } from "lucide-react";
import { SlideUp } from "../utility/animation";
import { productAssets } from "../assets/asset";

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="py-20 mt-9 bg-gray-50">
      <div className="container">
        {/* Heading */}
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="text-4xl font-bold text-darkBlue text-center mb-6"
        >
          Health & Safety Products
        </motion.h1>

        <motion.p
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
          className="text-center max-w-2xl mx-auto text-gray-400 mb-12"
        >
          Browse our curated selection of essential health products designed to keep you and your loved ones safe and healthy.
        </motion.p>

        {/* Product Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productAssets.map((product, index) => (
            <motion.div
              key={product.id}
              variants={SlideUp(0.6 + index * 0.1)}
              initial="initial"
              whileInView="animate"
              onClick={() => setSelectedProduct(product)}
              className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition p-5 cursor-pointer group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
                />
                {product.inStock && (
                  <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                    In Stock
                  </span>
                )}
              </div>
              
              <div className="space-y-2">
                <p className="text-xs text-primary font-semibold uppercase">{product.category}</p>
                <h3 className="text-base font-semibold text-darkBlue line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-gray-600">{product.rating}</span>
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <p className="text-2xl font-bold text-darkBlue">{product.price}</p>
                  <button className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PRODUCT POPUP MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-3xl w-full p-8 relative my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
              >
                <X size={24} />
              </button>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="rounded-2xl w-full h-80 object-cover"
                  />
                  {selectedProduct.inStock && (
                    <div className="mt-4 flex items-center gap-2 text-green-600">
                      <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                      <span className="font-semibold">In Stock - Ready to Ship</span>
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-primary font-semibold uppercase mb-2">
                      {selectedProduct.category}
                    </p>
                    <h2 className="text-3xl font-bold text-darkBlue mb-3">
                      {selectedProduct.name}
                    </h2>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <Star className="w-5 h-5 fill-gray-300 text-gray-300" />
                      </div>
                      <span className="text-gray-600">({selectedProduct.rating})</span>
                    </div>

                    <p className="text-4xl font-bold text-darkBlue mb-4">
                      {selectedProduct.price}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-darkBlue mb-2">Description</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-darkBlue mb-2">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                          <span className="text-primary mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-primary text-white py-4 rounded-2xl font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Product;