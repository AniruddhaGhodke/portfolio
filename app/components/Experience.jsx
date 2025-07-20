"use client";
import { motion } from "framer-motion";

const Experience = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-24 text-dimmed-white sm:py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="relative mb-12 text-center text-4xl font-bold"
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
            className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform bg-cyan-500 sm:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
          ></motion.div>
          {[
            {
              title: "Experience Engineer L2",
              company: "Publicis Sapient",
              period: "August 2021 - Present",
              location: "Pune, India",
              technologies: [
                "ReactJS",
                "NextJS",
                "JavaScript (ES6+)",
                "HTML5",
                "CSS3/Sass",
                "jQuery",
                "NodeJS",
                "RESTful APIs",
              ],
              achievements: [
                "Engineered modular React components using Hooks (useState, useEffect, useContext, useMemo, useReducer) for enhanced testability and reusability",
                "Developed custom hooks for form handling, API integration, and error management, reducing code duplication by 40%",
                "Implemented Context API for global authentication and role-based access control, improving code scalability",
                "Optimized performance via lazy loading, code splitting, and memoization, boosting UI responsiveness by 30%",
                "Mentored 5 junior developers in React best practices, code quality standards, and Git workflows",
                "Integrated RESTful APIs with secure token authentication for reliable client-server data exchange",
              ],
              teamSize: "5-8 developers",
              impact:
                "Designed 3+ high-performance web applications leading to 15% improvement in user engagement",
            },
            {
              title: "Full Stack Developer",
              company: "Climate Connect",
              period: "October 2019 - August 2021",
              location: "Remote",
              technologies: [
                "Python",
                "React",
                "Django",
                "PostgreSQL",
                "Machine Learning",
                "Docker",
              ],
              achievements: [
                "Developed a multi-user web app for wind turbine audits to analyze health and optimize performance and lifespan of turbines",
                "Created Python scripts to automate web scraping and integrate data into database for machine learning model execution",
                "Built responsive UI supporting field technicians on mobile devices",
                "Implemented robust backend architecture ensuring high system reliability",
                "Integrated machine learning models for predictive maintenance and performance optimization",
              ],
              teamSize: "3-5 developers",
              impact:
                "Platform optimized turbine performance and reduced maintenance costs through predictive analytics",
            },
            {
              title: "Full Stack Developer",
              company: "Freelancer",
              period: "August 2018 - August 2019",
              location: "Remote",
              technologies: [
                "NextJS",
                "MongoDB",
                "NodeJS",
                "Custom Server Setup",
                "SEO Optimization",
                "Animations",
              ],
              achievements: [
                "Developed a website for a private company with NextJS and MongoDB with custom server setup",
                "Implemented animations and SEO best practices for better User Experience",
                "Delivered high-performance web solution with optimized loading times",
                "Configured custom server infrastructure for reliable hosting",
              ],
              teamSize: "Solo developer",
              impact:
                "Delivered complete web solution with enhanced user experience and performance",
            },
          ].map((experience, index) => (
            <motion.div
              key={index}
              className={`flex ${
                index % 2 === 0 ? "sm:flex-row-reverse" : "sm:last:flex-row"
              } mb-8 flex-col items-start sm:flex-row`}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <motion.div className="w-full px-4 sm:w-1/2">
                <motion.div
                  className={`rounded-lg border border-gray-700 bg-gray-800 p-6 text-left shadow-lg transition-all duration-300 hover:border-cyan-300 hover:bg-gray-900 hover:shadow-xl hover:shadow-cyan-300/20`}
                  initial={{ rotateY: 90 }}
                  whileInView={{ rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                  }}
                >
                  <div className="mb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="mb-1 text-xl font-semibold text-cyan-400">
                        {experience.title}
                      </h3>
                      <h4 className="text-lg font-medium text-dimmed-white">
                        {experience.company}
                      </h4>
                    </div>
                    <div className="mt-2 text-right sm:mt-0">
                      <h2 className="text-md font-semibold text-cyan-300">
                        {experience.period}
                      </h2>
                      <p className="text-sm text-gray-400">
                        {experience.location}
                      </p>
                    </div>
                  </div>

                  {/* Team Size and Impact */}
                  <div className="mb-4 grid grid-cols-1 gap-3 rounded bg-gray-900 p-3 sm:grid-cols-2">
                    <div>
                      <span className="text-sm font-semibold text-cyan-300">
                        Team Size:
                      </span>
                      <p className="text-sm text-gray-300">
                        {experience.teamSize}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-cyan-300">
                        Business Impact:
                      </span>
                      <p className="text-sm text-gray-300">
                        {experience.impact}
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h5 className="mb-2 text-sm font-semibold text-cyan-300">
                      Technologies Used:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="rounded border border-gray-600 bg-gray-700 px-2 py-1 text-xs text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h5 className="mb-2 text-sm font-semibold text-cyan-300">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start text-sm text-gray-300"
                        >
                          <span className="mr-2 mt-1 text-cyan-300">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute left-1/2 mt-[30px] hidden h-4 w-4 -translate-x-1/2 transform rounded-full bg-cyan-500 sm:block"
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
