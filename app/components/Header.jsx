"use client";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Header = () => {
  const letterVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-10 bg-gray-900 bg-opacity-80 p-4 backdrop-blur-lg backdrop-filter">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="hero"
          smooth={true}
          duration={300}
          className="group cursor-pointer"
        >
          <motion.div
            className="text-4xl font-bold"
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.span
              variants={letterVariants}
              className="inline-block text-cyan-300 group-hover:animate-pulse"
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 10,
                bounce: 0.5,
              }}
            >
              A
            </motion.span>
            <motion.span
              variants={letterVariants}
              className="inline-block bg-gradient-to-r from-cyan-300 to-purple-500 bg-clip-text text-transparent group-hover:animate-pulse"
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 10,
                bounce: 0.5,
              }}
            >
              G
            </motion.span>
          </motion.div>
        </Link>

        <nav className="z-[1]">
          <ul className="flex space-x-6">
            {["About Me", "Experience", "Projects"].map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase().replace(" ", "-")}
                  smooth={true}
                  duration={300}
                  className="group relative cursor-pointer text-dimmed-white transition-colors duration-300 hover:text-cyan-300"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 transform bg-cyan-300 transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
