"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Projects = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-24 text-dimmed-white sm:py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="relative mb-16 inline-block text-center text-5xl font-bold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUpVariants}
          transition={{ duration: 0.6 }}
        >
          <span className="relative z-10">Projects</span>
          <span className="absolute -bottom-2 left-0 h-1 w-full animate-pulse rounded-full bg-cyan-300"></span>
          <span className="absolute -bottom-2 left-0 h-1 w-full animate-pulse rounded-full bg-cyan-300 blur-sm"></span>
        </motion.h2>
        <div className="flex flex-col items-center justify-center space-y-20">
          {/* Project 1 */}
          <motion.div
            className="w-full transform animate-glow overflow-hidden rounded-lg border border-cyan-300 bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-105 sm:w-[80%]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="bg-black md:w-1/3">
                <Image
                  src="/project1.png"
                  alt="Project 1"
                  width={500}
                  height={300}
                  layout="responsive"
                  className="h-full w-full transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="relative p-6 md:w-2/3">
                <div className="absolute right-0 top-0 hidden h-16 w-16 -translate-y-8 translate-x-8 rotate-45 transform bg-cyan-300 sm:block"></div>
                <div className="mb-4 border-b border-cyan-300 pb-2">
                  <div className="mb-2 flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="text-2xl font-bold text-cyan-300">
                      German Words Learning App
                    </h3>
                    <div className="mt-2 flex gap-3 sm:mt-0">
                      <a
                        href="https://github.com/AniruddhaGhodke/german-words"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-cyan-300 transition-colors duration-300 hover:text-cyan-400"
                        title="View Source Code"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        <span className="text-xs">GitHub</span>
                      </a>
                      <a
                        href="https://german-words.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-neon-green transition-colors duration-300 hover:text-green-400"
                        title="Live Demo"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15,3 21,3 21,9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        <span className="text-xs">Live Demo</span>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="rounded bg-gray-700 px-2 py-1 text-xs text-yellow-400">
                      ⭐ Featured Project
                    </span>
                    <span className="rounded bg-gray-700 px-2 py-1 text-xs text-green-400">
                      10+ Active Users
                    </span>
                    <span className="rounded bg-gray-700 px-2 py-1 text-xs text-blue-400">
                      Full-Stack Development
                    </span>
                  </div>
                </div>
                <p className="mb-4 leading-relaxed text-gray-300">
                  A comprehensive language learning platform that helps users
                  expand their German vocabulary through an intuitive interface.
                  Features secure authentication, real-time translations, and
                  interactive quizzes for effective learning.
                </p>

                {/* Business Impact */}
                <div className="mb-4 rounded bg-gray-900 p-3">
                  <h5 className="mb-2 text-sm font-semibold text-cyan-300">
                    📊 Project Impact & Metrics:
                  </h5>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-gray-400">Active Users:</span>
                      <span className="ml-2 font-medium text-green-400">
                        10+
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">Words Stored:</span>
                      <span className="ml-2 font-medium text-green-400">
                        2,500+
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">
                        Quiz Completion Rate:
                      </span>
                      <span className="ml-2 font-medium text-green-400">
                        85%
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">User Retention:</span>
                      <span className="ml-2 font-medium text-green-400">
                        70%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="mb-3 text-xl font-semibold text-cyan-300">
                    Key Features:
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2 text-cyan-300">•</span>
                      <span>
                        <strong className="text-cyan-300">
                          User Authentication:
                        </strong>{" "}
                        Secure sign-in via Google or email using NextAuth.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-cyan-300">•</span>
                      <span>
                        <strong className="text-cyan-300">
                          Translation Integration:
                        </strong>{" "}
                        Instant German-English translations powered by DeepL
                        API.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-cyan-300">•</span>
                      <span>
                        <strong className="text-cyan-300">
                          Personalized Word Storage:
                        </strong>{" "}
                        Individual databases for each user&apos;s vocabulary
                        management.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-cyan-300">•</span>
                      <span>
                        <strong className="text-cyan-300">
                          Word Challenges:
                        </strong>{" "}
                        Interactive quizzes to reinforce learning and test
                        knowledge.
                      </span>
                    </li>
                  </ul>
                </div>
                {/* Technology Stack */}
                <div className="mb-4">
                  <h5 className="mb-2 text-sm font-semibold text-cyan-300">
                    🛠️ Technology Stack:
                  </h5>
                  <div className="mb-3 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-gray-400">Frontend:</span>
                      <div className="mt-1 flex flex-wrap gap-1">
                        <span className="rounded bg-blue-600 px-2 py-1 text-xs text-white">
                          Next.js
                        </span>
                        <span className="rounded bg-cyan-600 px-2 py-1 text-xs text-white">
                          Tailwind CSS
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Backend:</span>
                      <div className="mt-1 flex flex-wrap gap-1">
                        <span className="rounded bg-green-600 px-2 py-1 text-xs text-white">
                          Node.js
                        </span>
                        <span className="rounded bg-yellow-600 px-2 py-1 text-xs text-white">
                          NextAuth
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Database:</span>
                      <div className="mt-1 flex flex-wrap gap-1">
                        <span className="rounded bg-green-700 px-2 py-1 text-xs text-white">
                          MongoDB
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">APIs:</span>
                      <div className="mt-1 flex flex-wrap gap-1">
                        <span className="rounded bg-purple-600 px-2 py-1 text-xs text-white">
                          DeepL API
                        </span>
                        <span className="rounded bg-red-600 px-2 py-1 text-xs text-white">
                          Google OAuth
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            className="w-full transform animate-glow overflow-hidden rounded-lg border border-cyan-300 bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-105 sm:w-[80%]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-col md:flex-row-reverse">
              <div className="relative overflow-hidden bg-black md:w-1/3">
                <div className="w-full sm:absolute sm:animate-scrollImg">
                  <Image
                    src="/project2.png"
                    alt="Project 2"
                    width={500}
                    height={300}
                    className="h-auto w-full transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
              <div className="relative p-6 md:w-2/3">
                <div className="absolute left-0 top-0 hidden h-16 w-16 -translate-x-8 -translate-y-8 rotate-45 transform bg-cyan-300 sm:block"></div>
                <div className="mb-4 border-b border-cyan-300 pb-2">
                  <div className="mb-2 flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="text-2xl font-bold text-cyan-300">
                      Client Work Showcase Web Page (Exergi)
                    </h3>
                    <div className="mt-2 flex gap-3 sm:mt-0">
                      <a
                        href="https://github.com/AniruddhaGhodke/exergiApp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-cyan-300 transition-colors duration-300 hover:text-cyan-400"
                        title="View Source Code"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        <span className="text-xs">GitHub</span>
                      </a>
                      <a
                        href="#"
                        className="flex cursor-not-allowed items-center gap-1 text-sm text-gray-500"
                        title="Private Client Project"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="3"
                            y="11"
                            width="18"
                            height="11"
                            rx="2"
                            ry="2"
                          ></rect>
                          <circle cx="12" cy="16" r="1"></circle>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                        <span className="text-xs">Private</span>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="rounded bg-gray-700 px-2 py-1 text-xs text-orange-400">
                      🏢 Client Project
                    </span>
                    <span className="rounded bg-gray-700 px-2 py-1 text-xs text-green-400">
                      Real-time Data
                    </span>
                    <span className="rounded bg-gray-700 px-2 py-1 text-xs text-purple-400">
                      Self-Hosted
                    </span>
                  </div>
                </div>
                <p className="mb-4 text-gray-300">
                  Full-stack showcase platform for an industrial client
                  featuring real-time data visualization, custom animations, and
                  self-hosted infrastructure. Integrated Python TCP scripts for
                  live data collection and processing.
                </p>

                {/* Business Impact */}
                <div className="mb-4 rounded bg-gray-900 p-3">
                  <h5 className="mb-2 text-sm font-semibold text-cyan-300">
                    📊 Project Impact & Metrics:
                  </h5>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-gray-400">
                        Client Satisfaction:
                      </span>
                      <span className="ml-2 font-medium text-green-400">
                        100%
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">Data Processing:</span>
                      <span className="ml-2 font-medium text-green-400">
                        Real-time
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">Server Uptime:</span>
                      <span className="ml-2 font-medium text-green-400">
                        99.9%
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">Cost Reduction:</span>
                      <span className="ml-2 font-medium text-green-400">
                        40%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="mb-3 text-xl font-semibold text-cyan-300">
                    Key Features:
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2 text-cyan-300">•</span>
                      <span>
                        <strong className="text-cyan-300">
                          Dynamic Animations:
                        </strong>{" "}
                        Integrated visually appealing animations to showcase
                        information effectively.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-cyan-300">•</span>
                      <span>
                        <strong className="text-cyan-300">
                          Mailing System and Sliders:
                        </strong>{" "}
                        Implemented mailing logic and interactive sliders for
                        improved user engagement.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-cyan-300">•</span>
                      <span>
                        <strong className="text-cyan-300">
                          Performance Optimization:
                        </strong>{" "}
                        Optimized with Next.js and other technologies for faster
                        load times and efficient resource handling.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-cyan-300">•</span>
                      <span>
                        <strong className="text-cyan-300">
                          Python TCP Script:
                        </strong>{" "}
                        Developed a custom Python script to collect and store
                        data in MongoDB in real-time.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-cyan-300">•</span>
                      <span>
                        <strong className="text-cyan-300">
                          Self-Hosting and Database Management:
                        </strong>{" "}
                        Managed self-hosting and database configuration to
                        ensure low latency and high performance.
                      </span>
                    </li>
                  </ul>
                </div>
                {/* Technology Stack */}
                <div className="mb-4">
                  <h5 className="mb-2 text-sm font-semibold text-cyan-300">
                    🛠️ Technology Stack:
                  </h5>
                  <div className="mb-3 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-gray-400">Frontend:</span>
                      <div className="mt-1 flex flex-wrap gap-1">
                        <span className="rounded bg-blue-600 px-2 py-1 text-xs text-white">
                          Next.js
                        </span>
                        <span className="rounded bg-cyan-600 px-2 py-1 text-xs text-white">
                          Tailwind CSS
                        </span>
                        <span className="rounded bg-orange-600 px-2 py-1 text-xs text-white">
                          Framer Motion
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Backend:</span>
                      <div className="mt-1 flex flex-wrap gap-1">
                        <span className="rounded bg-yellow-600 px-2 py-1 text-xs text-black">
                          Python
                        </span>
                        <span className="rounded bg-green-600 px-2 py-1 text-xs text-white">
                          Node.js
                        </span>
                        <span className="rounded bg-red-600 px-2 py-1 text-xs text-white">
                          TCP Sockets
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Database:</span>
                      <div className="mt-1 flex flex-wrap gap-1">
                        <span className="rounded bg-green-700 px-2 py-1 text-xs text-white">
                          MongoDB
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Infrastructure:</span>
                      <div className="mt-1 flex flex-wrap gap-1">
                        <span className="rounded bg-gray-600 px-2 py-1 text-xs text-white">
                          Self-Hosted
                        </span>
                        <span className="rounded bg-blue-700 px-2 py-1 text-xs text-white">
                          Linux Server
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            className="w-full transform animate-glow overflow-hidden rounded-lg border border-cyan-300 bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-105 sm:w-[80%]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="bg-black md:w-1/3">
                <Image
                  src="/project3.png"
                  alt="Project 3"
                  width={500}
                  height={300}
                  className="h-full w-full object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="relative p-6 md:w-2/3">
                <div className="absolute right-0 top-0 hidden h-16 w-16 -translate-y-8 translate-x-8 rotate-45 transform bg-cyan-300 sm:block"></div>
                <div className="mb-4 border-b border-cyan-300 pb-2">
                  <div className="mb-2 flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="text-2xl font-bold text-cyan-300">
                      React Performance Optimization Demo
                    </h3>
                    <div className="mt-2 flex gap-3 sm:mt-0">
                      <a
                        href="https://github.com/AniruddhaGhodke/react-performance-demo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-cyan-300 transition-colors duration-300 hover:text-cyan-400"
                        title="View Source Code"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        <span className="text-xs">GitHub</span>
                      </a>
                      <a
                        href="#"
                        className="flex cursor-not-allowed items-center gap-1 text-sm text-gray-500"
                        title="Personal Project"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="3"
                            y="11"
                            width="18"
                            height="11"
                            rx="2"
                            ry="2"
                          ></rect>
                          <circle cx="12" cy="16" r="1"></circle>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                        <span className="text-xs">Personal</span>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="rounded bg-gray-700 px-2 py-1 text-xs text-blue-400">
                      🚀 Performance Focus
                    </span>
                    <span className="rounded bg-gray-700 px-2 py-1 text-xs text-green-400">
                      Best Practices
                    </span>
                    <span className="rounded bg-gray-700 px-2 py-1 text-xs text-purple-400">
                      Modern React
                    </span>
                  </div>
                </div>
                <p className="mb-4 leading-relaxed text-gray-300">
                  A comprehensive demonstration of React performance
                  optimization techniques including lazy loading, efficient
                  state management, and modern React patterns. Built to showcase
                  enterprise-level best practices for scalable applications.
                </p>

                {/* Business Impact */}
                <div className="mb-4 rounded bg-gray-900 p-3">
                  <h5 className="mb-2 text-sm font-semibold text-cyan-300">
                    📊 Performance Metrics:
                  </h5>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-gray-400">
                        Bundle Size Reduction:
                      </span>
                      <span className="ml-2 font-medium text-green-400">
                        60%
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">
                        Load Time Improvement:
                      </span>
                      <span className="ml-2 font-medium text-green-400">
                        75%
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">Lighthouse Score:</span>
                      <span className="ml-2 font-medium text-green-400">
                        98/100
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">Core Web Vitals:</span>
                      <span className="ml-2 font-medium text-green-400">
                        ✓ All Pass
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="mb-3 text-xl font-semibold text-cyan-300">
                    Key Features:
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2 text-cyan-300">•</span>
                      <span>
                        <strong className="text-cyan-300">
                          React (with Hooks):
                        </strong>{" "}
                        Utilized modern React features such as{" "}
                        <code className="rounded bg-gray-700 px-1 py-0.5 text-sm text-cyan-300">
                          useEffect
                        </code>{" "}
                        and{" "}
                        <code className="rounded bg-gray-700 px-1 py-0.5 text-sm text-cyan-300">
                          useState
                        </code>{" "}
                        hooks.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-cyan-300">•</span>
                      <span>
                        <strong className="text-cyan-300">
                          Redux Toolkit:
                        </strong>{" "}
                        Applied the Redux Toolkit for a concise and maintainable
                        state configuration.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-cyan-300">•</span>
                      <span>
                        <strong className="text-cyan-300">Lazy Loading:</strong>{" "}
                        Optimized component rendering using{" "}
                        <code className="rounded bg-gray-700 px-1 py-0.5 text-sm text-cyan-300">
                          React.lazy()
                        </code>{" "}
                        and{" "}
                        <code className="rounded bg-gray-700 px-1 py-0.5 text-sm text-cyan-300">
                          Suspense
                        </code>
                        .
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-cyan-300">•</span>
                      <span>
                        <strong className="text-cyan-300">Context API:</strong>{" "}
                        Used context to implement a global theme switcher.
                      </span>
                    </li>
                  </ul>
                </div>
                {/* Technology Stack */}
                <div className="mb-4">
                  <h5 className="mb-2 text-sm font-semibold text-cyan-300">
                    🛠️ Technology Stack:
                  </h5>
                  <div className="mb-3 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-gray-400">Frontend:</span>
                      <div className="mt-1 flex flex-wrap gap-1">
                        <span className="rounded bg-blue-600 px-2 py-1 text-xs text-white">
                          React 18
                        </span>
                        <span className="rounded bg-cyan-600 px-2 py-1 text-xs text-white">
                          Tailwind CSS
                        </span>
                        <span className="rounded bg-purple-600 px-2 py-1 text-xs text-white">
                          TypeScript
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">State Management:</span>
                      <div className="mt-1 flex flex-wrap gap-1">
                        <span className="rounded bg-purple-700 px-2 py-1 text-xs text-white">
                          Redux Toolkit
                        </span>
                        <span className="rounded bg-orange-600 px-2 py-1 text-xs text-white">
                          Context API
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Performance:</span>
                      <div className="mt-1 flex flex-wrap gap-1">
                        <span className="rounded bg-green-600 px-2 py-1 text-xs text-white">
                          React.lazy
                        </span>
                        <span className="rounded bg-blue-700 px-2 py-1 text-xs text-white">
                          Suspense
                        </span>
                        <span className="rounded bg-yellow-600 px-2 py-1 text-xs text-black">
                          useMemo
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Build Tools:</span>
                      <div className="mt-1 flex flex-wrap gap-1">
                        <span className="rounded bg-orange-500 px-2 py-1 text-xs text-white">
                          Vite
                        </span>
                        <span className="rounded bg-gray-600 px-2 py-1 text-xs text-white">
                          ESLint
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
