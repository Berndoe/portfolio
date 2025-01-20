import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Framer Motion Variants for Animations
  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="bg-white shadow fixed top-0 w-full z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="text-lg font-bold text-blue-600">
          Bernd Portfolio
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <motion.a
            href="#about"
            className="hover:text-blue-600"
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, duration: 0.4 }}
            variants={linkVariants}
          >
            About
          </motion.a>
          <motion.a
            href="#projects"
            className="hover:text-blue-600"
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, duration: 0.4 }}
            variants={linkVariants}
          >
            Projects
          </motion.a>
          <motion.a
            href="#experience"
            className="hover:text-blue-600"
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4, duration: 0.4 }}
            variants={linkVariants}
          >
            Experience
          </motion.a>
          <motion.a
            href="#contact"
            className="hover:text-blue-600"
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5, duration: 0.4 }}
            variants={linkVariants}
          >
            Contact
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown with Animation */}
      <motion.div
        className="md:hidden bg-white shadow-md px-4 space-y-2"
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        exit="exit"
        variants={menuVariants}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <motion.a
          href="#about"
          className="block py-2 text-gray-700 hover:text-blue-600"
          variants={linkVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          About
        </motion.a>
        <motion.a
          href="#projects"
          className="block py-2 text-gray-700 hover:text-blue-600"
          variants={linkVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          Projects
        </motion.a>
        <motion.a
          href="#experience"
          className="block py-2 text-gray-700 hover:text-blue-600"
          variants={linkVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          Experience
        </motion.a>
        <motion.a
          href="#contact"
          className="block py-2 text-gray-700 hover:text-blue-600"
          variants={linkVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          Contact
        </motion.a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
