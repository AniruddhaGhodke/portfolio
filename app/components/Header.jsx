"use client";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Header = () => {
    const letterVariants = {
        initial: { y: -20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <header className="static top-0 left-0 right-0 p-4 z-10 bg-gray-900">
            <div className="container mx-auto flex justify-between items-center">
                <Link
                    to="hero"
                    smooth={true}
                    duration={300}
                    className="cursor-pointer"
                >
                    <motion.div
                        className="text-4xl font-bold"
                        initial="initial"
                        animate="animate"
                        transition={{ staggerChildren: 0.1 }}
                    >
                        <motion.span
                            variants={letterVariants}
                            className="inline-block text-cyan-300"
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
                            className="inline-block bg-gradient-to-r from-cyan-300 to-purple-500 text-transparent bg-clip-text"
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
                                    className="text-dimmed-white hover:text-cyan-300 transition-colors duration-300 cursor-pointer"
                                >
                                    {item}
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
