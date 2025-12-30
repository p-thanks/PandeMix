import { useState } from "react";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Blogs", path: "/blog" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-white shadow-md fixed w-full z-50"
    >
      <div className="container mx-auto py-5 px-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <div>
            <img src={Logo} alt="Logo" className="w-36 sm:w-48" />
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `font-medium hover:text-primary transition-colors ${
                    isActive ? "text-darkBlue" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="hidden md:block">
          <NavLink to="/contact">
            <button className="border border-gray-400 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition duration-300">
              Contact Us
            </button>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden bg-white w-full shadow-lg"
        >
          <ul className="flex flex-col gap-4 py-5 px-5 text-gray-700">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block font-medium py-2 px-3 rounded hover:bg-purple-50 ${
                      isActive ? "bg-purple-100 text-purple-600" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                <button className="w-full border border-gray-400 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition duration-300">
                  Contact Us
                </button>
              </NavLink>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
