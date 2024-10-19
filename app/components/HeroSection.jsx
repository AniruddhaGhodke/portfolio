"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import TypingEffect from "./TypingEffect";

export default function HeroSection() {
    return (
        <div className="relative min-h-screen text-dimmed-white p-5">
            <div className="container mx-auto">
                {/* Left-aligned links */}
                <motion.div
                    className=" hidden sm:flex fixed left-4 top-1/2 -translate-y-1/2 flex-col space-y-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 20 }}
                    transition={{ duration: 0.8 }}
                >
                    <a
                        href="https://www.linkedin.com/in/aniruddha-ghodke-363796185/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl hover:text-cyan-300 transition-colors duration-300"
                    >
                        <FaLinkedin aria-label="LinkedIn" />
                    </a>
                    <a
                        href="https://github.com/AniruddhaGhodke"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl hover:text-cyan-300 transition-colors duration-300"
                    >
                        <FaGithub aria-label="GitHub" />
                    </a>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl hover:text-cyan-300 transition-colors duration-300"
                    >
                        <FaFilePdf aria-label="Resume PDF" />
                    </a>
                </motion.div>

                {/* Main content */}
                <div className="flex flex-col items-center max-w-3xl mx-auto pt-6 sm:pt-32 sm:py-44">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-5"
                    >
                        <Image
                            src="/profile.jpg"
                            alt="Aniruddha Ghodke"
                            width={180}
                            height={180}
                            className="rounded-full"
                        />
                    </motion.div>
                    <TypingEffect
                        fullText="Aniruddha Ghodke"
                        className="text-4xl font-bold mb-2"
                    />
                    <h2 className="text-3xl font-bold mb-4">
                        Full Stack Developer
                    </h2>
                    <p className="text-center text-md max-w-prose mb-8">
                        I am a passionate full stack developer with a knack for
                        crafting robust and scalable web applications. With 5
                        years of hands-on experience, I have honed my skills in
                        front-end technologies like React and Next.js, as well
                        as back-end technologies like Node.js and MongoDB. My
                        goal is to leverage my expertise to create innovative
                        solutions that drive business growth and deliver
                        exceptional user experiences.
                    </p>
                    <motion.a
                        href="mailto:aniruddhaghodke7@gmail.com"
                        className="bg-cyan-300 text-black font-bold py-2 px-4 rounded-full hover:bg-cyan-400 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact Me
                    </motion.a>
                </div>
            </div>

            {/* Animated Laptop with Code */}
            <motion.svg
                className="hidden sm:block absolute bottom-0 right-0 w-48 h-48"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Laptop Base */}
                <rect x="30" y="150" width="140" height="8" fill="#333" />
                {/* Laptop Screen */}
                <rect x="40" y="60" width="120" height="90" fill="#222" />
                {/* Screen Border */}
                <rect
                    x="40"
                    y="60"
                    width="120"
                    height="90"
                    fill="none"
                    stroke="#444"
                    strokeWidth="2"
                />

                {/* Animated Code Lines */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, staggerChildren: 0.2 }}
                >
                    <motion.line
                        x1="50"
                        y1="80"
                        x2="150"
                        y2="80"
                        stroke="#22d3ee"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                    />
                    <motion.line
                        x1="50"
                        y1="100"
                        x2="130"
                        y2="100"
                        stroke="#22d3ee"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                            duration: 1.5,
                            delay: 0.2,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                    />
                    <motion.line
                        x1="50"
                        y1="120"
                        x2="110"
                        y2="120"
                        stroke="#22d3ee"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                            duration: 1.5,
                            delay: 0.4,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                    />
                </motion.g>
            </motion.svg>
        </div>
    );
}
