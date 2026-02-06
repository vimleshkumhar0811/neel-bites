/* eslint-disable no-unused-vars */
// src/pages/About.jsx
import { motion } from 'framer-motion';
import logo from '/src/assets/logo.jpg'; // Adjust path if needed

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-rose-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 px-5 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/30 to-rose-100/20" />
        <div className="absolute inset-0 bg-[url('/assets/hero-food.jpg')] bg-cover bg-center opacity-10" />

        <div className="relative container mx-auto text-center max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight"
          >
            True Taste of India,<br className="hidden sm:block" /> Anywhere
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            Delivering authentic Indian flavors to every corner of the world — instantly, conveniently, and with love.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-5 sm:px-8 lg:px-12 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Intro Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg prose-emerald mx-auto text-gray-700 leading-relaxed mb-16"
          >
            <p className="mb-6">
              Neel Bites is a food brand dedicated to delivering the authentic taste of India to people living beyond its borders.
              Established with the vision of bridging cultural and culinary distances, Neel Bites specializes exclusively in instant
              Indian food packets designed to provide convenience without compromising on traditional flavours.
            </p>

            <p className="mb-6">
              The brand understands the emotional connection that food holds for Indians worldwide and aims to recreate the comfort
              and familiarity of home-cooked Indian meals, no matter where one resides.
            </p>

            <p className="mb-6">
              In today’s fast-paced global lifestyle, many individuals living abroad face challenges in accessing genuine Indian cuisine
              due to time constraints, limited ingredient availability, or lack of traditional cooking knowledge. Neel Bites addresses
              this gap by offering a thoughtfully curated range of instant food products that are easy to prepare, time-efficient,
              and rooted in authentic Indian recipes.
            </p>

            <p className="mb-6">
              Each product is crafted to ensure that customers can enjoy a wholesome Indian meal within minutes, using minimal resources.
            </p>
          </motion.div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-emerald-100/50 hover:shadow-2xl transition-shadow"
            >
              <h2 className="text-2xl font-bold text-emerald-700 mb-5">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To bridge cultural and culinary distances by providing instant, authentic Indian meals that bring the comfort of home
                to people worldwide — without compromising on taste, tradition, or quality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-emerald-100/50 hover:shadow-2xl transition-shadow"
            >
              <h2 className="text-2xl font-bold text-emerald-700 mb-5">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To become the most trusted companion for the Indian diaspora and global food lovers — delivering the true taste of
                India anywhere in the world, one convenient packet at a time.
              </p>
            </motion.div>
          </div>

          {/* Quality & Authenticity */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-white to-emerald-50/40 rounded-3xl p-8 md:p-12 shadow-xl border border-emerald-100/50 mb-20"
          >
            <h2 className="text-3xl font-bold text-emerald-700 mb-8 text-center">Quality & Authenticity at Our Core</h2>

            <div className="prose prose-lg prose-emerald mx-auto text-gray-700 leading-relaxed">
              <p className="mb-6">
                Quality and authenticity form the foundation of Neel Bites’ operations. The company emphasizes the use of carefully
                selected ingredients and standardized preparation processes to maintain consistent taste and quality across all
                products.
              </p>
              <p className="mb-6">
                Traditional spices and flavour profiles are preserved to ensure that every packet reflects the richness and diversity
                of Indian cuisine. At the same time, modern food processing and packaging techniques are employed to enhance shelf
                life and ensure safety, making the products suitable for international markets.
              </p>
            </div>
          </motion.div>

          {/* Who We Serve + Image Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Who We Serve
              </h2>
              <div className="prose prose-lg prose-emerald text-gray-700 leading-relaxed">
                <p className="mb-6">
                  Neel Bites primarily serves Indians living overseas, students, working professionals, and families who seek familiar
                  flavors amid foreign surroundings. The brand also caters to global consumers who wish to explore Indian cuisine in a
                  convenient and accessible format.
                </p>
                <p className="mb-6">
                  By combining authenticity with ease of preparation, Neel Bites positions itself as a reliable solution for anyone
                  craving Indian food without the complexity of traditional cooking.
                </p>
                <p>
                  Through its commitment to taste, convenience, and quality, Neel Bites strives to become a trusted companion for the
                  Indian diaspora. The brand’s mission is not merely to sell food products, but to offer a sense of belonging and
                  cultural connection through every meal.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50"
            >
              <img
                src={logo}
                alt="Authentic Indian meal spread"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>

          {/* Final Promise */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center mt-20 py-12 px-6 bg-gradient-to-r from-emerald-600/10 to-rose-600/10 rounded-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-6">
              Our Core Promise
            </h2>
            <p className="text-xl md:text-2xl text-gray-800 font-medium max-w-4xl mx-auto italic">
              Delivering the true taste of India, anywhere in the world.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;