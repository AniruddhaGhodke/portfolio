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
                <h3 className="mb-4 flex items-center gap-10 border-b border-cyan-300 pb-2 text-2xl font-bold text-cyan-300">
                  German Words Learning App
                  <a
                    href="https://github.com/AniruddhaGhodke/german-words"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cyan-300 transition-colors duration-300 hover:text-cyan-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
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
                  </a>
                </h3>
                <p className="mb-6 leading-relaxed text-gray-300">
                  Expand your German vocabulary effortlessly with this intuitive
                  application. Store and manage words alongside their English
                  translations, all secured by NextAuth for seamless Google or
                  email sign-in.
                </p>
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
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-700 px-3 py-1 text-sm text-cyan-300">
                    NextJS
                  </span>
                  <span className="rounded-full bg-gray-700 px-2 py-1 text-sm text-cyan-300">
                    Tailwind CSS
                  </span>
                  <span className="rounded-full bg-gray-700 px-3 py-1 text-sm text-cyan-300">
                    Deepl API
                  </span>
                  <span className="rounded-full bg-gray-700 px-3 py-1 text-sm text-cyan-300">
                    MongoDB
                  </span>
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
                <h3 className="mb-4 flex items-center gap-10 border-b border-cyan-300 pb-2 text-2xl font-bold text-cyan-300">
                  Client Work Showcase Web Page (Exergi)
                  <a
                    href="https://github.com/AniruddhaGhodke/exergiApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cyan-300 transition-colors duration-300 hover:text-cyan-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
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
                  </a>
                </h3>
                <p className="mb-4 text-gray-300">
                  Developed a custom web page for a client to effectively
                  demonstrate their work and services. The site features various
                  animations to present information in a visually appealing
                  manner. Additionally, I wrote a Python TCP script to fetch
                  real-time data from a socket and store it in a MongoDB
                  database. The website is self-hosted, and the MongoDB database
                  is managed on the server to minimize transition delays and
                  ensure smooth data flow.
                </p>
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
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-700 px-2 py-1 text-sm text-cyan-300">
                    Next.js
                  </span>
                  <span className="rounded-full bg-gray-700 px-2 py-1 text-sm text-cyan-300">
                    Python
                  </span>
                  <span className="rounded-full bg-gray-700 px-2 py-1 text-sm text-cyan-300">
                    MongoDB
                  </span>
                  <span className="rounded-full bg-gray-700 px-2 py-1 text-sm text-cyan-300">
                    Tailwind CSS
                  </span>
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
                <h3 className="mb-4 flex items-center gap-10 border-b border-cyan-300 pb-2 text-2xl font-bold text-cyan-300">
                  Lazy Loading, Redux, and Context API: Performance Optimization
                  Demo
                  <a
                    href="https://github.com/AniruddhaGhodke/german-words"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cyan-300 transition-colors duration-300 hover:text-cyan-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
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
                  </a>
                </h3>
                <p className="mb-6 leading-relaxed text-gray-300">
                  This project focuses on performance optimization by
                  demonstrating the lazy loading of components, state management
                  using Redux, and theme switching with Context API. It
                  highlights best practices for building efficient, scalable
                  React applications.
                </p>
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
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-700 px-3 py-1 text-sm text-cyan-300">
                    NextJS
                  </span>
                  <span className="rounded-full bg-gray-700 px-2 py-1 text-sm text-cyan-300">
                    Tailwind CSS
                  </span>
                  <span className="rounded-full bg-gray-700 px-3 py-1 text-sm text-cyan-300">
                    Redux
                  </span>
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
