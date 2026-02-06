/* eslint-disable no-unused-vars */
// src/components/ProductCard.js
import { motion } from 'framer-motion';

const ProductCard = ({ icon, title, description, features, buttonText = 'Explore More →' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white/50 backdrop-blur-md rounded-xl p-6 shadow-lg max-w-4xl mx-auto mb-8"
    >
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-2xl font-bold text-primary ml-4">{title}</h2>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-green-600">
            <span className="mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full">{buttonText}</button>
    </motion.div>
  );
};

export default ProductCard;