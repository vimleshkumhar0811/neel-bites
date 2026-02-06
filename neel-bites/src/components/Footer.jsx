/* eslint-disable no-unused-vars */
// src/components/Footer.jsx
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [, setSearchParams] = useSearchParams();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="container mx-auto px-6 pt-16 pb-12">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
        >
          {/* Brand + Description */}
          <motion.div variants={item} className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img
                  src={logo}
                  alt="Neel Bites Logo"
                  className="h-14 w-14 object-cover rounded-full border-2 border-green-600/40 shadow-lg transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-600 rounded-full border-2 border-gray-900"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Neel Bites
                </h3>
                <p className="text-sm text-green-400 font-medium">
                  True Taste of India, Anywhere
                </p>
              </div>
            </Link>

            <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
              Delivering the authentic taste of home-cooked Indian meals to the diaspora and food lovers worldwide — instantly, conveniently, and with unwavering quality.
            </p>
          </motion.div>

          {/* Menu - with query param navigation */}
          <motion.div variants={item}>
            <h4 className="text-lg font-semibold text-white mb-5">Menu</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'North Indian', category: 'north-indian' },
                { label: 'South Indian', category: 'south-indian' },
                { label: 'Street Food', category: 'street-food' },
                { label: 'Desserts', category: 'desserts' },
                { label: 'Beverages', category: 'beverages' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={`/menu?category=${item.category}`}
                    className="hover:text-green-400 transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-green-600">›</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={item}>
            <h4 className="text-lg font-semibold text-white mb-5">Company</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'Products', to: '/products' },
                { label: 'Careers', href: '#' },
                { label: 'Blog', href: '#' },
                { label: 'Contact', to: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  {item.to ? (
                    <Link
                      to={item.to}
                      className="hover:text-green-400 transition-colors duration-200 flex items-center gap-2"
                    >
                      <span className="text-green-600">›</span>
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="hover:text-green-400 transition-colors duration-200 flex items-center gap-2"
                    >
                      <span className="text-green-600">›</span>
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={item}>
            <h4 className="text-lg font-semibold text-white mb-5">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">📍</span>
                <div>
                  <p className="font-medium text-white">Ahmedabad, Gujarat</p>
                  <p className="text-gray-400">India</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✉️</span>
                <a
                  href="mailto:info@neelbites.com"
                  className="hover:text-green-400 transition-colors"
                >
                  info@neelbites.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">📞</span>
                <a
                  href="tel:+911234567890"
                  className="hover:text-green-400 transition-colors"
                >
                  +91 1234 567 890
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 bg-black/40">
        <div className="container mx-auto px-6 py-6 text-center text-sm text-gray-500">
          <p>© {currentYear} Neel Bites. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Crafted with ❤️ to bring the true taste of India anywhere in the world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;