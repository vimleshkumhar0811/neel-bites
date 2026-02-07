/* eslint-disable no-unused-vars */
// src/pages/Home.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { number: '100+', label: 'Products Delivered' },
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '5+', label: 'Years Experience' },
  ];

  const offerings = [
    {
      title: 'Instant Food Packets',
      desc: 'Easy-to-prepare authentic Indian meals in minutes — just add water or heat.',
    },
    {
      title: 'Convenient Delivery',
      desc: 'Freshly prepared favorites & instant packets delivered to your door, anywhere.',
    },
  ];

  const whyChoose = [
    {
      title: 'Authentic Indian Taste',
      desc: 'Traditional recipes using premium spices — real home-cooked flavor preserved.',
    },
    {
      title: 'Ready in Minutes',
      desc: 'Perfect for busy students, professionals, and families — no cooking skills needed.',
    },
    {
      title: 'Global Reach',
      desc: 'Shipping worldwide to bring comfort of Indian home to the diaspora.',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-emerald-50 via-white to-rose-50 min-h-screen">
      {/* Hero */}
      <section className="relative pt-16 pb-24 md:pt-28 md:pb-40 px-5 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.08),transparent_40%)]" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6 md:mb-8"
          >
            True Taste of India,<br className="hidden sm:block" /> Anywhere
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10 md:mb-12"
          >
            Authentic Indian flavors delivered instantly — through easy-prep packets and fast, reliable delivery.
            Bringing home-cooked comfort to the diaspora and food lovers worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-6"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Order Now →
              </motion.button>
            </Link>

            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05, borderColor: '#10b981' }}
                whileTap={{ scale: 0.97 }}
                className="bg-white border-2 border-emerald-600 text-emerald-700 font-semibold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Products
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-5 sm:px-8 lg:px-12 -mt-16 md:-mt-24 pb-16 md:pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.3, duration: 0.7 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 text-center shadow-lg border border-gray-100/80 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-emerald-600 mb-2">
                {stat.number}
              </div>
              <p className="text-gray-600 font-medium text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Offerings */}
      <section className="bg-gradient-to-b from-white to-emerald-50/30 py-20 md:py-28">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-14"
          >
            What We Offer
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {offerings.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 + 0.2, duration: 0.7 }}
                className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-emerald-700 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-flex items-center text-lg font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
            >
              Explore Full Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6"
          >
            Why Neel Bites?
          </motion.h2>

          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-16">
            We bring the soul of Indian home cooking to your table — authentic, fast, and full of love.
          </p>

          <div className="grid md:grid-cols-3 gap-7 lg:gap-10">
            {whyChoose.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.3, duration: 0.7 }}
                className="bg-gradient-to-br from-white to-emerald-50/40 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100/60"
              >
                <h3 className="text-xl font-bold text-emerald-700 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 py-20 md:py-28 text-white">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Taste Home Again?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90"
          >
            Join thousands who enjoy real Indian flavors — anytime, anywhere.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="bg-white text-emerald-700 font-bold text-lg px-10 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all"
              >
                Order Now
              </motion.button>
            </Link>

            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="bg-transparent border-2 border-white text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-white/10 transition-all"
              >
                See All Products
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Details / Get in Touch Footer */}
      <section className="bg-gray-300 text-white py-16 md:py-20">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
              Get in Touch
            </h2>

            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
              {/* Left - Text */}
              <div>
                <p className="text-black text-lg md:text-xl leading-relaxed mb-8 opacity-90">
                  Have questions about our products or want to bring Neel Bites to your region? We'd love to hear from you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-700/20 p-3 rounded-lg">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-400 mb-1">Registered Office</h4>
                      <p className="text-black">
                        Kalnu iela 5,<br />
                        Salaspils, Salaspils nov.,<br />
                        Latvia LV-2121
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-700/20 p-3 rounded-lg">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-400 mb-1">Email Us</h4>
                      <a
                        href="mailto:info@neelbites.com"
                        className="text-black hover:text-emerald-300 transition-colors"
                      >
                        info@neelbites.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Company Details Card */}
              <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700">
                <h3 className="text-2xl font-bold text-emerald-400 mb-6">
                  Company Details
                </h3>

                <div className="space-y-4 text-gray-300">
                  <div className="flex justify-between">
                    <span className="font-medium">Company Name</span>
                    <span className="text-right">SIA NEAL BITES</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Registration Number</span>
                    <span className="text-right">40203713843</span>
                  </div>
                  {/* <div className="flex justify-between">
                    <span className="font-medium">SEPA Payment ID</span>
                    <span className="text-right">LV33ZZZ40203713843</span>
                  </div> */}
                  <div className="flex justify-between">
                    <span className="font-medium">Date Registered</span>
                    <span className="text-right">22.01.2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
