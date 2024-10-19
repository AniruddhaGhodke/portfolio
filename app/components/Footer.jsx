import React from "react";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-dark-black to-gray-900 py-16 text-dimmed-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-2xl font-bold text-cyan-300">
              Aniruddha Ghodke
            </h3>
            <p className="text-lg">Full Stack Developer</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/aniruddha-ghodke-363796185/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl transition-all duration-300 hover:scale-110 hover:text-cyan-300"
            >
              <FaLinkedin aria-label="LinkedIn" />
            </a>
            <a
              href="https://github.com/AniruddhaGhodke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl transition-all duration-300 hover:scale-110 hover:text-cyan-300"
            >
              <FaGithub aria-label="GitHub" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl transition-all duration-300 hover:scale-110 hover:text-cyan-300"
            >
              <FaFilePdf aria-label="Resume PDF" />
            </a>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm">
            &copy; 2024 Aniruddha Ghodke. All rights reserved.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-300 via-purple-500 to-pink-500"></div>
    </footer>
  );
};

export default Footer;
