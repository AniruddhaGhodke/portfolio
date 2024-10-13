"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Projects = () => {
    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="min-h-screen text-dimmed-white py-40">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-5xl font-bold mb-16 text-center relative inline-block"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUpVariants}
                    transition={{ duration: 0.6 }}
                >
                    <span className="relative z-10">Projects</span>
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-cyan-300 rounded-full animate-pulse"></span>
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-cyan-300 rounded-full blur-sm animate-pulse"></span>
                </motion.h2>
                <div className="flex items-center justify-center flex-col space-y-20">
                    {/* Project 1 */}
                    <motion.div
                        className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full sm:w-[80%] transform hover:scale-105 transition-transform duration-300 border border-cyan-300 animate-glow"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 bg-black">
                                <Image
                                    src="/project1.png"
                                    alt="Project 1"
                                    width={500}
                                    height={300}
                                    layout="responsive"
                                    className="w-full h-full hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className="md:w-2/3 p-6 relative">
                                <div className="hidden sm:block absolute top-0 right-0 w-16 h-16 bg-cyan-300 transform rotate-45 translate-x-8 -translate-y-8"></div>
                                <h3 className="text-2xl font-bold mb-4 text-cyan-300 border-b border-cyan-300 pb-2 flex items-center gap-10">
                                    German Words Learning App
                                    <a
                                        href="https://github.com/AniruddhaGhodke/german-words"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-cyan-300 hover:text-cyan-400 transition-colors duration-300"
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
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    Expand your German vocabulary effortlessly
                                    with this intuitive application. Store and
                                    manage words alongside their English
                                    translations, all secured by NextAuth for
                                    seamless Google or email sign-in.
                                </p>
                                <div className="mb-6">
                                    <h4 className="text-xl font-semibold mb-3 text-cyan-300">
                                        Key Features:
                                    </h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-cyan-300 mr-2">
                                                •
                                            </span>
                                            <span>
                                                <strong className="text-cyan-300">
                                                    User Authentication:
                                                </strong>{" "}
                                                Secure sign-in via Google or
                                                email using NextAuth.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-cyan-300 mr-2">
                                                •
                                            </span>
                                            <span>
                                                <strong className="text-cyan-300">
                                                    Translation Integration:
                                                </strong>{" "}
                                                Instant German-English
                                                translations powered by DeepL
                                                API.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-cyan-300 mr-2">
                                                •
                                            </span>
                                            <span>
                                                <strong className="text-cyan-300">
                                                    Personalized Word Storage:
                                                </strong>{" "}
                                                Individual databases for each
                                                user&apos;s vocabulary
                                                management.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-cyan-300 mr-2">
                                                •
                                            </span>
                                            <span>
                                                <strong className="text-cyan-300">
                                                    Word Challenges:
                                                </strong>{" "}
                                                Interactive quizzes to reinforce
                                                learning and test knowledge.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-700 text-cyan-300 px-3 py-1 rounded-full text-sm">
                                        NextJS
                                    </span>
                                    <span className="bg-gray-700 text-cyan-300 px-2 py-1 rounded-full text-sm">
                                        Tailwind CSS
                                    </span>
                                    <span className="bg-gray-700 text-cyan-300 px-3 py-1 rounded-full text-sm">
                                        Deepl API
                                    </span>
                                    <span className="bg-gray-700 text-cyan-300 px-3 py-1 rounded-full text-sm">
                                        MongoDB
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Project 2 */}
                    <motion.div
                        className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full sm:w-[80%] transform hover:scale-105 transition-transform duration-300 border border-cyan-300 animate-glow"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="flex flex-col md:flex-row-reverse">
                            <div className="relative overflow-hidden md:w-1/3 bg-black">
                                <div className="sm:absolute w-full sm:animate-scrollImg">
                                    <Image
                                        src="/project2.png"
                                        alt="Project 2"
                                        width={500}
                                        height={300}
                                        className="w-full h-auto hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                            <div className="md:w-2/3 p-6 relative">
                                <div className="hidden sm:block absolute top-0 left-0 w-16 h-16 bg-cyan-300 transform rotate-45 -translate-x-8 -translate-y-8"></div>
                                <h3 className="text-2xl font-bold mb-4 text-cyan-300 border-b border-cyan-300 pb-2 flex items-center gap-10">
                                    Client Work Showcase Web Page (Exergi)
                                    <a
                                        href="https://github.com/AniruddhaGhodke/exergiApp"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-cyan-300 hover:text-cyan-400 transition-colors duration-300"
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
                                <p className="text-gray-300 mb-4">
                                    Developed a custom web page for a client to
                                    effectively demonstrate their work and
                                    services. The site features various
                                    animations to present information in a
                                    visually appealing manner. Additionally, I
                                    wrote a Python TCP script to fetch real-time
                                    data from a socket and store it in a MongoDB
                                    database. The website is self-hosted, and
                                    the MongoDB database is managed on the
                                    server to minimize transition delays and
                                    ensure smooth data flow.
                                </p>
                                <div className="mb-6">
                                    <h4 className="text-xl font-semibold mb-3 text-cyan-300">
                                        Key Features:
                                    </h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-cyan-300 mr-2">
                                                •
                                            </span>
                                            <span>
                                                <strong className="text-cyan-300">
                                                    Dynamic Animations:
                                                </strong>{" "}
                                                Integrated visually appealing
                                                animations to showcase
                                                information effectively.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-cyan-300 mr-2">
                                                •
                                            </span>
                                            <span>
                                                <strong className="text-cyan-300">
                                                    Mailing System and Sliders:
                                                </strong>{" "}
                                                Implemented mailing logic and
                                                interactive sliders for improved
                                                user engagement.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-cyan-300 mr-2">
                                                •
                                            </span>
                                            <span>
                                                <strong className="text-cyan-300">
                                                    Performance Optimization:
                                                </strong>{" "}
                                                Optimized with Next.js and other
                                                technologies for faster load
                                                times and efficient resource
                                                handling.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-cyan-300 mr-2">
                                                •
                                            </span>
                                            <span>
                                                <strong className="text-cyan-300">
                                                    Python TCP Script:
                                                </strong>{" "}
                                                Developed a custom Python script
                                                to collect and store data in
                                                MongoDB in real-time.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-cyan-300 mr-2">
                                                •
                                            </span>
                                            <span>
                                                <strong className="text-cyan-300">
                                                    Self-Hosting and Database
                                                    Management:
                                                </strong>{" "}
                                                Managed self-hosting and
                                                database configuration to ensure
                                                low latency and high
                                                performance.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-700 text-cyan-300 px-2 py-1 rounded-full text-sm">
                                        Next.js
                                    </span>
                                    <span className="bg-gray-700 text-cyan-300 px-2 py-1 rounded-full text-sm">
                                        Python
                                    </span>
                                    <span className="bg-gray-700 text-cyan-300 px-2 py-1 rounded-full text-sm">
                                        MongoDB
                                    </span>
                                    <span className="bg-gray-700 text-cyan-300 px-2 py-1 rounded-full text-sm">
                                        Tailwind CSS
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Project 3 */}
                    <motion.div
                        className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full sm:w-[80%] transform hover:scale-105 transition-transform duration-300 border border-cyan-300 animate-glow"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 bg-black">
                                <Image
                                    src="/project3.png"
                                    alt="Project 3"
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className="md:w-2/3 p-6 relative">
                                <div className="hidden sm:block absolute top-0 right-0 w-16 h-16 bg-cyan-300 transform rotate-45 translate-x-8 -translate-y-8"></div>
                                <h3 className="text-2xl font-bold mb-4 text-cyan-300 border-b border-cyan-300 pb-2 flex items-center gap-10">
                                    Lazy Loading, Redux, and Context API:
                                    Performance Optimization Demo
                                    <a
                                        href="https://github.com/AniruddhaGhodke/german-words"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-cyan-300 hover:text-cyan-400 transition-colors duration-300"
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
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    This project focuses on performance
                                    optimization by demonstrating the lazy
                                    loading of components, state management
                                    using Redux, and theme switching with
                                    Context API. It highlights best practices
                                    for building efficient, scalable React
                                    applications.
                                </p>
                                <div className="mb-6">
                                    <h4 className="text-xl font-semibold mb-3 text-cyan-300">
                                        Key Features:
                                    </h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-cyan-300 mr-2">
                                                •
                                            </span>
                                            <span>
                                                <strong className="text-cyan-300">
                                                    React (with Hooks):
                                                </strong>{" "}
                                                Utilized modern React features
                                                such as{" "}
                                                <code className="bg-gray-700 text-cyan-300 px-1 py-0.5 rounded text-sm">
                                                    useEffect
                                                </code>{" "}
                                                and{" "}
                                                <code className="bg-gray-700 text-cyan-300 px-1 py-0.5 rounded text-sm">
                                                    useState
                                                </code>{" "}
                                                hooks.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-cyan-300 mr-2">
                                                •
                                            </span>
                                            <span>
                                                <strong className="text-cyan-300">
                                                    Redux Toolkit:
                                                </strong>{" "}
                                                Applied the Redux Toolkit for a
                                                concise and maintainable state
                                                configuration.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-cyan-300 mr-2">
                                                •
                                            </span>
                                            <span>
                                                <strong className="text-cyan-300">
                                                    Lazy Loading:
                                                </strong>{" "}
                                                Optimized component rendering
                                                using{" "}
                                                <code className="bg-gray-700 text-cyan-300 px-1 py-0.5 rounded text-sm">
                                                    React.lazy()
                                                </code>{" "}
                                                and{" "}
                                                <code className="bg-gray-700 text-cyan-300 px-1 py-0.5 rounded text-sm">
                                                    Suspense
                                                </code>
                                                .
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-cyan-300 mr-2">
                                                •
                                            </span>
                                            <span>
                                                <strong className="text-cyan-300">
                                                    Context API:
                                                </strong>{" "}
                                                Used context to implement a
                                                global theme switcher.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-700 text-cyan-300 px-3 py-1 rounded-full text-sm">
                                        NextJS
                                    </span>
                                    <span className="bg-gray-700 text-cyan-300 px-2 py-1 rounded-full text-sm">
                                        Tailwind CSS
                                    </span>
                                    <span className="bg-gray-700 text-cyan-300 px-3 py-1 rounded-full text-sm">
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
