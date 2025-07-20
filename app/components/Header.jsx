"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaHome } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items matching the actual sections
  const navItems = [
    { name: "Home", id: "hero", icon: FaHome },
    { name: "About", id: "about-me" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" }
  ];

  const letterVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const mobileItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-gray-900/95 backdrop-blur-xl border-b border-gray-800 shadow-lg" 
          : "bg-gray-900/80 backdrop-blur-lg"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="group cursor-pointer z-10"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                className="text-2xl md:text-3xl font-bold"
                initial="initial"
                animate="animate"
                transition={{ staggerChildren: 0.1 }}
              >
                <motion.span
                  variants={letterVariants}
                  className="inline-block text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
                  style={{ transform: "rotate(-5deg)" }}
                  whileHover={{ 
                    rotate: [-5, -15, 5, -15, -5],
                    transition: { duration: 0.5 }
                  }}
                >
                  A
                </motion.span>
                <motion.span
                  variants={letterVariants}
                  className="inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-500 transition-all duration-300"
                  whileHover={{ 
                    rotate: [0, 10, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  G
                </motion.span>
              </motion.div>
              
              {/* Optional tagline for larger screens */}
              <motion.div
                className="hidden lg:block text-xs text-gray-400 font-medium"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                Full Stack Developer
              </motion.div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    activeClass="!text-cyan-400"
                    className="group relative cursor-pointer block px-3 py-2 text-sm lg:text-base font-medium text-gray-300 hover:text-cyan-400 transition-all duration-300 rounded-lg"
                  >
                    <motion.div
                      className="relative z-10 flex items-center space-x-2"
                      whileHover={{ y: -1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {item.icon && <item.icon className="text-sm" />}
                      <span>{item.name}</span>
                    </motion.div>
                    
                    {/* Animated underline */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                    
                    {/* CSS Hover Background - Fallback */}
                    <div className="absolute inset-0 bg-gray-800/50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
                    
                    {/* Background hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-gray-800/30 rounded-lg -z-10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-lg -z-20"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* CSS Hover Underline - Fallback */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative z-10 p-2 rounded-lg bg-gray-800/50 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle mobile menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800"
            >
              <nav className="py-4">
                <ul className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.id}
                      variants={mobileItemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.id}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        spy={true}
                        activeClass="!text-cyan-400 !bg-gray-800/50"
                        className="group relative flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/30 transition-all duration-300 rounded-lg cursor-pointer"
                        onClick={() => setIsOpen(false)}
                      >
                        <motion.div
                          className="flex items-center space-x-3 w-full"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {item.icon && <item.icon className="text-lg" />}
                          <span className="font-medium">{item.name}</span>
                        </motion.div>
                        
                        {/* Mobile hover background */}
                        <motion.div
                          className="absolute inset-0 bg-gray-800/50 rounded-lg -z-10"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                        
                        {/* Mobile active indicator */}
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 rounded-r-full"
                          initial={{ scaleY: 0 }}
                          whileHover={{ scaleY: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile CTA */}
                <motion.div
                  className="mt-6 px-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <a
                    href="mailto:aniruddhaghodke7@gmail.com"
                    className="flex items-center justify-center w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Get In Touch
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
