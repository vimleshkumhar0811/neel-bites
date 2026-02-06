/* eslint-disable no-unused-vars */
// src/pages/Products.jsx
import { motion } from 'framer-motion';

const Products = () => {
  const products = [
    {
      id: 'butter-chicken',
      icon: '🍛',
      type: 'Instant Packet',
      title: 'Butter Chicken Mix',
      description: 'Rich, creamy Punjabi classic — restaurant taste ready in minutes.',
      price: '₹149',
      bgGradient: 'from-amber-50 to-red-50',
      accentColor: 'emerald',
    },
    {
      id: 'idli-sambar',
      icon: '🥘',
      type: 'Breakfast Kit',
      title: 'Idli Sambar Mix',
      description: 'Soft idlis with tangy, flavorful sambar — South Indian favorite.',
      price: '₹129',
      bgGradient: 'from-green-50 to-emerald-50',
      accentColor: 'emerald',
    },
    {
      id: 'pav-bhaji',
      icon: '🌮',
      type: 'Street Food',
      title: 'Pav Bhaji Packet',
      description: 'Mumbai-style spicy bhaji — quick, buttery & full of street flavor.',
      price: '₹139',
      bgGradient: 'from-red-50 to-rose-50',
      accentColor: 'rose',
    },
    {
      id: 'gulab-jamun',
      icon: '🍮',
      type: 'Dessert Mix',
      title: 'Gulab Jamun Instant',
      description: 'Soft, syrupy gulab jamuns — perfect traditional sweet treat.',
      price: '₹169',
      bgGradient: 'from-pink-50 to-rose-50',
      accentColor: 'pink',
    },
    // You can add more products here...
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-rose-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 px-5 sm:px-8 lg:px-12 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/20 to-rose-100/20" />

        <div className="relative container mx-auto max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-5"
          >
            Our Instant Products
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Authentic Indian flavors packed for convenience — ready in minutes, anywhere in the world.
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-5 sm:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.7 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group bg-gradient-to-br ${product.bgGradient} rounded-3xl overflow-hidden shadow-lg border border-gray-100/80 hover:shadow-2xl hover:border-emerald-200/60 transition-all duration-300`}
            >
              <div className="p-6 md:p-8 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 flex items-center justify-center text-5xl drop-shadow-md bg-white/60 rounded-2xl">
                    {product.icon}
                  </div>
                  <span className={`bg-white/80 text-${product.accentColor}-700 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm`}>
                    {product.price}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {product.title}
                </h3>

                <p className="text-gray-600 text-base mb-6 flex-grow">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;