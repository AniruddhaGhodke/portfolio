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
              period: "2021 - Present",
              location: "Pune, India",
              technologies: [
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "GraphQL",
                "MongoDB",
                "AWS",
              ],
              achievements: [
                "Led development of 5+ E-commerce solutions for global brands (Shiseido, Nars Cosmetics) serving 100K+ daily users",
                "Improved application performance by 40% through microservices architecture implementation",
                "Mentored 3 junior developers and conducted 50+ code reviews, reducing bug rate by 30%",
                "Implemented accessibility features achieving WCAG 2.1 AA compliance across all projects",
                "Reduced page load time by 25% through performance optimization and best practices",
              ],
              teamSize: "8-12 developers",
              impact: "Delivered solutions generating $2M+ in client revenue",
            },
            {
              title: "Full Stack Developer",
              company: "Climate Connect",
              period: "2019 - 2021",
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
                "Built multi-user wind turbine audit platform serving 200+ technicians across India",
                "Developed Python automation scripts reducing manual data processing time by 80%",
                "Integrated ML models for predictive maintenance, improving turbine lifespan by 15%",
                "Achieved 99.5% uptime through robust backend architecture and monitoring",
                "Designed responsive UI supporting mobile devices used in field conditions",
              ],
              teamSize: "5 developers",
              impact:
                "Platform analyzed 1000+ turbines saving $500K annually in maintenance costs",
            },
            {
              title: "Full Stack Developer",
              company: "Freelancer",
              period: "2018 - 2019",
              location: "Remote",
              technologies: [
                "Next.js",
                "MongoDB",
                "Node.js",
                "Tailwind CSS",
                "SEO",
              ],
              achievements: [
                "Delivered custom web platform for manufacturing client with 99.9% uptime",
                "Improved SEO rankings by 60% through technical optimization and best practices",
                "Implemented advanced animations and UX improvements increasing user engagement by 45%",
                "Set up custom server infrastructure reducing hosting costs by 30%",
              ],
              teamSize: "Solo developer",
              impact:
                "Client saw 40% increase in online inquiries within 6 months",
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
              <motion.div
                className="w-full px-4 sm:w-1/2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className={`rounded-lg border border-gray-700 bg-gray-800 p-6 text-left shadow-lg transition-colors duration-300 hover:border-cyan-300`}
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
