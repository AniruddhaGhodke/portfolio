"use client";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCertificate,
  FaBook,
  FaTrophy,
  FaCalendarAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

const CertificationsEducation = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "SKN Sinhgad College of engineering",
      year: "2018",
      location: "Pune, India",
      percent: "60",
      achievements: [],
    },
  ];

  const onlineCourses = [
    {
      name: "Advanced React Patterns",
      platform: "Frontend Masters",
      year: "2024",
      instructor: "Kent C. Dodds",
      hours: "40 hours",
      certificate: true,
    },
    {
      name: "ReactJS from beginner to Advance",
      platform: "Udemy",
      year: "2022",
      instructor: "Max",
      hours: "40 hours",
      certificate: true,
    },
  ];

  const currentLearning = [
    "AI/ML Integration in Web Applications",
    "GraphQL with Apollo",
    "Microservices with Node.js",
    "Advanced TypeScript Patterns",
  ];

  return (
    <div className="py-24 text-dimmed-white sm:py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-16 text-center text-4xl font-bold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUpVariants}
          transition={{ duration: 0.6 }}
        >
          Education & Certifications
        </motion.h2>

        <div className="mx-auto max-w-6xl space-y-16">
          {/* Education Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-8 flex items-center gap-3">
              <FaGraduationCap className="text-2xl text-cyan-300" />
              <h3 className="text-2xl font-semibold text-cyan-300">
                Education
              </h3>
            </div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="rounded-lg border border-gray-700 bg-gray-800 p-6 transition-colors duration-300 hover:border-cyan-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between">
                  <div>
                    <h4 className="mb-1 text-xl font-semibold text-dimmed-white">
                      {edu.degree}
                    </h4>
                    <p className="font-medium text-cyan-300">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-400">{edu.location}</p>
                  </div>
                  <div className="mt-2 text-right md:mt-0">
                    <p className="font-semibold text-cyan-300">
                      Graduated {edu.year}
                    </p>
                    <p className="text-sm text-green-400">GPA: {edu.gpa}</p>
                  </div>
                </div>

                <div>
                  <h5 className="mb-2 text-sm font-semibold text-cyan-300">
                    Key Achievements:
                  </h5>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, i) => (
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
            ))}
          </motion.div>

          {/* Online Courses Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="mb-8 flex items-center gap-3">
              <FaBook className="text-2xl text-cyan-300" />
              <h3 className="text-2xl font-semibold text-cyan-300">
                Continuous Learning
              </h3>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {onlineCourses.map((course, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg border border-gray-700 bg-gray-800 p-4 transition-colors duration-300 hover:border-cyan-300"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="text-md mb-2 font-semibold text-dimmed-white">
                    {course.name}
                  </h4>
                  <p className="mb-1 text-sm text-cyan-300">
                    {course.platform}
                  </p>
                  <p className="mb-2 text-xs text-gray-400">
                    by {course.instructor}
                  </p>

                  <div className="mb-2 flex items-center justify-between text-xs">
                    <span className="text-gray-400">{course.hours}</span>
                    <span className="text-gray-400">{course.year}</span>
                  </div>

                  {course.certificate && (
                    <div className="flex items-center gap-1 text-xs text-green-400">
                      <FaTrophy />
                      Certificate Earned
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Currently Learning */}
            <motion.div
              className="rounded-lg border border-blue-500/50 bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <FaCalendarAlt className="text-blue-400" />
                <h4 className="text-lg font-semibold text-blue-400">
                  Currently Learning (2025)
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentLearning.map((topic, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-blue-600/50 bg-blue-800/50 px-3 py-2 text-sm text-blue-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-400">
                Staying updated with the latest technologies and industry best
                practices
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsEducation;
