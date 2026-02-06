import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo1.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0" onClick={closeMenu}>
            <img
              src={logo}
              alt="Neel Bites Logo"
              className="h-40 w-40 object-contain rounded-full"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium transition-colors duration-200 ${isActive ? 'text-green-700' : 'text-gray-700 hover:text-green-600'}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                `font-medium transition-colors duration-200 ${isActive ? 'text-green-700' : 'text-gray-700 hover:text-green-600'}`
              }
            >
              Menu
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-medium transition-colors duration-200 ${isActive ? 'text-green-700' : 'text-gray-700 hover:text-green-600'}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `font-medium transition-colors duration-200 ${isActive ? 'text-green-700' : 'text-gray-700 hover:text-green-600'}`
              }
            >
              Products
            </NavLink>

            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-4 bg-white border-t border-gray-100">
          <Link
            to="/"
            className="block py-3 px-4 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg font-medium transition-colors"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="block py-3 px-4 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg font-medium transition-colors"
            onClick={closeMenu}
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="block py-3 px-4 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg font-medium transition-colors"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/products"
            className="block py-3 px-4 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg font-medium transition-colors"
            onClick={closeMenu}
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="block py-3 px-4 bg-green-600 text-white hover:bg-green-700 rounded-lg font-medium text-center transition-colors"
            onClick={closeMenu}
          >
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;