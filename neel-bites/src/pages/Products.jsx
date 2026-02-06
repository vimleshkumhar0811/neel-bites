/* eslint-disable no-unused-vars */
// src/pages/Products.jsx
import { motion } from 'framer-motion';

const Products = () => {
  const products = [
    {
      id: 'khaman-dhokla',
      icon: '🟡',
      type: 'Instant Mix',
      title: 'Khaman Dhokla Mix',
      description: 'Fluffy, tangy, spongy Gujarati steamed cake – restaurant-style in minutes.',
      price: '₹149',
      bgGradient: 'from-yellow-50 to-amber-50',
      accentColor: 'emerald',
    },
    {
      id: 'handvo',
      icon: '🥮',
      type: 'Instant Mix',
      title: 'Handvo Mix',
      description: 'Savory lentil & veggie cake with crunchy sesame topping – bake or steam.',
      price: '₹169',
      bgGradient: 'from-green-50 to-emerald-50',
      accentColor: 'emerald',
    },
    {
      id: 'methi-gota',
      icon: '🌿',
      type: 'Instant Mix',
      title: 'Methi Gota Mix',
      description: 'Crispy fenugreek fritters – spicy, aromatic Gujarati street favorite.',
      price: '₹129',
      bgGradient: 'from-orange-50 to-amber-50',
      accentColor: 'amber',
    },
    {
      id: 'masala-khichdi',
      icon: '🍲',
      type: 'Instant Mix',
      title: 'Gujarati Masala Khichdi',
      description: 'Comforting one-pot rice & moong dal – light, nutritious & quick.',
      price: '₹159',
      bgGradient: 'from-teal-50 to-emerald-50',
      accentColor: 'emerald',
    },
    {
      id: 'thepla-mix',
      icon: '🫓',
      type: 'Instant Mix',
      title: 'Methi Thepla Mix',
      description: 'Healthy fenugreek flatbreads – soft, nutritious, no rolling hassle.',
      price: '₹139',
      bgGradient: 'from-lime-50 to-green-50',
      accentColor: 'green',
    },
    {
      id: 'khakhra',
      icon: '🥨',
      type: 'Ready Snack',
      title: 'Masala Khakhra',
      description: 'Thin, crispy whole-wheat Gujarati crackers – perfect with tea.',
      price: '₹99',
      bgGradient: 'from-amber-50 to-yellow-50',
      accentColor: 'amber',
    },
    {
      id: 'fafda',
      icon: '🥨',
      type: 'Ready Snack',
      title: 'Fafda Strips',
      description: 'Golden, crunchy gram-flour snack – classic companion to jalebi or chutney.',
      price: '₹119',
      bgGradient: 'from-yellow-50 to-orange-50',
      accentColor: 'amber',
    },
    {
      id: 'ratlam-sev',
      icon: '🔶',
      type: 'Ready Snack',
      title: 'Ratlam Nylon Sev',
      description: 'Fine, spicy gram-flour threads – ideal for chaat & snacking.',
      price: '₹89',
      bgGradient: 'from-rose-50 to-red-50',
      accentColor: 'rose',
    },
    // Feel free to add more (e.g. Dalwada mix, Khandvi mix, Undhiyu mix if seasonal)
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
            Pure Gujarati Instant Products
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            100% pure vegetarian Gujarati flavors — instant mixes & ready snacks. Authentic taste of Ahmedabad & Gujarat, ready in minutes.
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

                <div className="text-xs text-gray-500 italic mt-auto pt-3 border-t border-gray-200/50">
                  Pure Veg • No Preservatives • Gujarati Authentic
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;