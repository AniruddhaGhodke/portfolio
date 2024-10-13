"use client";
import { motion } from "framer-motion";

const Experience = () => {
    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="text-dimmed-white py-10">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold mb-12 text-center relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUpVariants}
                    transition={{ duration: 0.6 }}
                >
                    Experience
                </motion.h2>
                <motion.div
                    className="relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.3 },
                        },
                    }}
                >
                    <motion.div
                        className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cyan-500 hidden sm:block"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    ></motion.div>
                    {[
                        {
                            title: "Experience Software Engineer",
                            company: "Publicis Sapient",
                            period: "2021 - Present",
                            description: [
                                "Developing and maintaining E-commerce solutions for clients such as Shiseido, Narscosmetics and many more",
                                "Implemented microservices architecture to improve scalability and maintainability.",
                                "Mentored junior developers and conducted code reviews to ensure high-quality deliverables.",
                                "Adding performace best practices along with accessibility features to the websites.",
                            ],
                        },
                        {
                            title: "Full Stack Developer",
                            company: "Climate Connect",
                            period: "2019 - 2021",
                            description: [
                                "Developed a multi-user web app for wind turbine audits to analyze health and optimize performance and lifespan.",
                                "Developed Python scripts to automate web scraping and integrate data into a database for machine learning model execution.",
                                "Implemented responsive design principles to ensure optimal user experience across devices.",
                            ],
                        },
                        {
                            title: "Full Stack Developer",
                            company: "Freelancer",
                            period: "2018 - 2019",
                            description: [
                                "Developed a website for a private company with NextJS, and MongoDB with custom server setup.",
                                "Utilized animations and SEO techniques for better User Experience.",
                            ],
                        },
                    ].map((experience, index) => (
                        <motion.div
                            key={index}
                            className={`flex ${
                                index % 2 === 0
                                    ? "sm:flex-row-reverse"
                                    : "sm:last:flex-row"
                            } items-start mb-8 flex-col sm:flex-row`}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.div
                                className="w-full sm:w-1/2 px-4"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.div
                                    className={`bg-dark-gray p-6 rounded-lg text-left ${
                                        index % 2 === 0
                                            ? "sm:text-left"
                                            : "sm:text-right"
                                    }`}
                                    initial={{ rotateY: 90 }}
                                    whileInView={{ rotateY: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.2,
                                    }}
                                >
                                    <h2 className="text-md font-semibold text-dimmed-white">
                                        {experience.period}
                                    </h2>
                                    <h3 className="text-xl font-semibold text-cyan-400">
                                        {experience.title}
                                    </h3>
                                    <h4 className="text-lg text-dimmed-white">
                                        {experience.company}
                                    </h4>
                                    <ul className="mt-2 list-disc list-inside">
                                        {experience.description.map(
                                            (item, i) => (
                                                <li
                                                    key={i}
                                                    className="mb-1 list-none"
                                                >
                                                    {item}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                className="w-4 h-4 mt-[30px] bg-cyan-500 rounded-full absolute left-1/2 transform -translate-x-1/2 hidden sm:block"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.3,
                                }}
                                style={{ marginLeft: "-5px" }}
                            ></motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Experience;
