"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFilePdf, FaCode, FaRocket, FaLightbulb } from "react-icons/fa";
import { HiDownload, HiMail } from "react-icons/hi";
import TypingEffect from "./TypingEffect";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
        
        {/* Large gradient orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-pink-600/10 rounded-full blur-3xl"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 1.5 }
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-5">
        {/* Left-aligned social links */}
        <motion.div
          className="fixed left-4 top-1/2 hidden -translate-y-1/2 flex-col space-y-6 sm:flex z-50"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/aniruddha-ghodke-363796185/", label: "LinkedIn", color: "hover:text-blue-400" },
            { icon: FaGithub, href: "https://github.com/AniruddhaGhodke", label: "GitHub", color: "hover:text-gray-300" },
            { icon: FaFilePdf, href: "/resume.pdf", label: "Resume", color: "hover:text-red-400" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-3xl transition-all duration-300 ${social.color} hover:scale-125`}
              whileHover={{ x: 5 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              <social.icon aria-label={social.label} />
            </motion.a>
          ))}
          
          {/* Vertical line */}
          <motion.div
            className="w-px h-20 bg-gradient-to-b from-cyan-400 to-transparent mx-auto"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          />
        </motion.div>

        {/* Main hero content */}
        <motion.div
          className="min-h-screen flex items-center justify-center pt-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center max-w-5xl mx-auto">
            {/* Profile Image with enhanced styling */}
            <motion.div
              variants={itemVariants}
              className="mb-8 relative inline-block"
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Glowing ring around image */}
                <div className="relative w-52 h-52 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-1 animate-pulse">
                    <div className="w-full h-full rounded-full bg-gray-900 p-2 flex items-center justify-center">
                      <Image
                        src="/profile.jpg"
                        alt="Aniruddha Ghodke"
                        width={180}
                        height={180}
                        className="rounded-full w-44 h-44 object-cover"
                        priority
                      />
                    </div>
                  </div>
                  
                  {/* Status indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-6 h-6 bg-green-400 rounded-full border-4 border-gray-900 shadow-lg"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Additional glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 blur-xl -z-10"></div>
                </div>
              </motion.div>
            </motion.div>

            {/* Name with typing effect */}
            <motion.div variants={itemVariants} className="mb-4">
              <TypingEffect
                fullText="Aniruddha Ghodke"
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              />
            </motion.div>

            {/* Title with animated background */}
            <motion.div variants={itemVariants} className="mb-6">
              <motion.h2 
                className="text-2xl md:text-4xl font-bold text-dimmed-white relative inline-block"
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative z-10">Frontend Developer (ReactJS)</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-lg -z-10"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 2, duration: 0.8 }}
                />
              </motion.h2>
            </motion.div>

            {/* Enhanced subtitle with stats */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {[
                  { icon: FaCode, text: "6+ Years", subtext: "Experience" },
                  { icon: FaRocket, text: "20+ Projects", subtext: "Delivered" },
                  { icon: FaLightbulb, text: "100%", subtext: "Client Satisfaction" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 min-w-[120px]"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 211, 238, 0.1)" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5 + index * 0.1 }}
                  >
                    <stat.icon className="text-cyan-400 text-xl mx-auto mb-2" />
                    <div className="text-lg font-bold text-cyan-300">{stat.text}</div>
                    <div className="text-xs text-gray-400">{stat.subtext}</div>
                  </motion.div>
                ))}
              </div>
              
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
                Frontend Developer specializing in{" "}
                <span className="text-cyan-400 font-semibold">ReactJS development</span> with{" "}
                <span className="text-purple-400 font-semibold">6+ years of experience</span>. 
                Expert in problem-solving, test-driven development, and{" "}
                <span className="text-green-400 font-semibold">user-friendly web applications</span>.
              </p>
            </motion.div>

            {/* Call-to-action buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:aniruddhaghodke7@gmail.com"
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiMail className="text-xl group-hover:rotate-12 transition-transform" />
                Get In Touch
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                download="Aniruddha_Ghodke_Resume.pdf"
                className="group flex items-center justify-center gap-3 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-dark-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiDownload className="text-xl group-hover:animate-bounce" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Scroll indicator - Better positioned */}
            <motion.div
              className="mt-16 mb-8 flex flex-col items-center hidden xl:flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.6 }}
            >
              <motion.div
                className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              <motion.p 
                className="text-xs text-gray-400 mt-3"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Scroll to explore
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Code Animation in bottom right */}
      <motion.div
        className="fixed bottom-8 right-8 hidden lg:block z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <motion.div
          className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-4 w-64"
          animate={floatingAnimation}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-xs text-gray-400 ml-2">portfolio.jsx</span>
          </div>
          
          <div className="font-mono text-xs space-y-1">
            <motion.div
              className="text-purple-400"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3, duration: 0.5 }}
            >
              const developer = {"{"}
            </motion.div>
            <motion.div
              className="text-cyan-400 ml-4"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.2, duration: 0.5 }}
            >
              name: &quot;Aniruddha&quot;,
            </motion.div>
            <motion.div
              className="text-green-400 ml-4"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.4, duration: 0.5 }}
            >
              role: &quot;Full Stack&quot;,
            </motion.div>
            <motion.div
              className="text-yellow-400 ml-4"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.6, duration: 0.5 }}
            >
              passion: &quot;Innovation&quot;
            </motion.div>
            <motion.div
              className="text-purple-400"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.8, duration: 0.5 }}
            >
              {"}"};
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {[
          { name: "React", position: "top-1/4 left-1/4", delay: 4 },
          { name: "Node", position: "top-1/3 right-1/4", delay: 4.5 },
          { name: "JS", position: "bottom-1/3 left-1/5", delay: 5 },
          { name: "TS", position: "bottom-1/4 right-1/3", delay: 5.5 }
        ].map((tech, index) => (
          <motion.div
            key={tech.name}
            className={`absolute ${tech.position} w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg flex items-center justify-center text-cyan-400 font-bold text-sm`}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ 
              opacity: 0.7, 
              scale: 1, 
              rotate: 0,
              y: [-5, 5, -5]
            }}
            transition={{ 
              opacity: { delay: tech.delay, duration: 0.5 },
              scale: { delay: tech.delay, duration: 0.5 },
              rotate: { delay: tech.delay, duration: 0.8 },
              y: { 
                delay: tech.delay + 1,
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            {tech.name}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
