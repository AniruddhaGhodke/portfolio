"use client";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaPhone,
  FaMapMarkerAlt,
  FaFilePdf,
  FaDownload,
} from "react-icons/fa";

const Contact = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
          Get In Touch
        </motion.h2>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-cyan-300">
                Let&apos;s Connect
              </h3>
              <p className="mb-8 leading-relaxed text-gray-300">
                I&apos;m actively seeking new opportunities in full-stack
                development. Whether you have a project in mind or just want to
                connect, I&apos;d love to hear from you!
              </p>
            </div>

            {/* Availability Status */}
            <motion.div
              className="mb-6 rounded-lg border border-green-500/50 bg-green-900/30 p-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 animate-pulse rounded-full bg-green-400"></div>
                <span className="font-semibold text-green-400">
                  Available for New Opportunities
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-300">
                Open to full-time positions, contract work, and exciting
                projects
              </p>
            </motion.div>

            {/* Contact Details */}
            <div className="space-y-4">
              <motion.a
                href="mailto:aniruddhaghodke7@gmail.com"
                className="group flex items-center gap-4 rounded-lg bg-gray-800 p-4 transition-colors duration-300 hover:bg-gray-700"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaEnvelope className="text-xl text-cyan-300 group-hover:text-cyan-400" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-gray-400">
                    aniruddhaghodke7@gmail.com
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="tel:+918668801353"
                className="group flex items-center gap-4 rounded-lg bg-gray-800 p-4 transition-colors duration-300 hover:bg-gray-700"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaPhone className="text-xl text-cyan-300 group-hover:text-cyan-400" />
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-sm text-gray-400">+91 8668801353</div>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/aniruddha-ghodke-363796185/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-lg bg-gray-800 p-4 transition-colors duration-300 hover:bg-gray-700"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaLinkedin className="text-xl text-cyan-300 group-hover:text-cyan-400" />
                <div>
                  <div className="font-medium">LinkedIn</div>
                  <div className="text-sm text-gray-400">
                    Connect with me professionally
                  </div>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-4 rounded-lg bg-gray-800 p-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <FaMapMarkerAlt className="text-xl text-cyan-300" />
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-sm text-gray-400">
                    Pune, India • Remote Friendly
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Resume Download */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="/resume.pdf"
                download="Aniruddha_Ghodke_Resume.pdf"
                className="inline-flex transform items-center gap-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-cyan-600 hover:to-blue-700 hover:shadow-xl"
              >
                <FaFilePdf className="text-xl" />
                <span>Download Resume</span>
                <FaDownload className="text-sm" />
              </a>
              <p className="mt-2 text-xs text-gray-400">
                PDF • Updated January 2025 • ATS-Friendly Format
              </p>
            </motion.div>
          </motion.div>

          {/* Quick Stats & Preferences */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-cyan-300">
                Professional Details
              </h3>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-gray-700 bg-gray-800 p-4 text-center">
                <div className="text-2xl font-bold text-cyan-300">6+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="rounded-lg border border-gray-700 bg-gray-800 p-4 text-center">
                <div className="text-2xl font-bold text-cyan-300">20+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="rounded-lg border border-gray-700 bg-gray-800 p-4 text-center">
                <div className="text-2xl font-bold text-cyan-300">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
              <div className="rounded-lg border border-gray-700 bg-gray-800 p-4 text-center">
                <div className="text-2xl font-bold text-cyan-300">24h</div>
                <div className="text-sm text-gray-400">Response Time</div>
              </div>
            </div>

            {/* Professional Credentials */}
            <div className="rounded-lg border border-gray-700 bg-gray-800 p-6">
              <h4 className="mb-4 text-lg font-semibold text-cyan-300">
                Professional Credentials
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="mb-2 font-semibold text-cyan-300">
                    Certifications:
                  </h5>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-300"></span>
                      <span className="text-sm text-gray-300">
                        ReactJS Training (Udemy)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-300"></span>
                      <span className="text-sm text-gray-300">
                        Accessibility Training (Udemy)
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="mb-2 font-semibold text-cyan-300">
                    Awards & Recognition:
                  </h5>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
                      <span className="text-sm text-gray-300">
                        Employee of the Quarter (2023)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
                      <span className="text-sm text-gray-300">
                        Recognition Awards (2025)
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="mb-2 font-semibold text-cyan-300">
                    Languages:
                  </h5>
                  <p className="text-sm text-gray-300">
                    English, Marathi, Hindi
                  </p>
                </div>
              </div>
            </div>

            {/* Work Preferences */}
            <div className="rounded-lg border border-gray-700 bg-gray-800 p-6">
              <h4 className="mb-4 text-lg font-semibold text-cyan-300">
                Work Preferences
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Work Type:</span>
                  <span className="text-cyan-300">Full-time, Contract</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Remote Work:</span>
                  <span className="text-green-400">✓ Available</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Relocation:</span>
                  <span className="text-cyan-300">Open to discuss</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Notice Period:</span>
                  <span className="text-yellow-400">30 days</span>
                </div>
              </div>
            </div>

            {/* Expertise Areas */}
            <div className="rounded-lg border border-gray-700 bg-gray-800 p-6">
              <h4 className="mb-4 text-lg font-semibold text-cyan-300">
                Areas of Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "ReactJS",
                  "NextJS",
                  "JavaScript (ES6+)",
                  "HTML5",
                  "CSS3/Sass",
                  "jQuery",
                  "NodeJS",
                  "Salesforce",
                  "RESTful APIs",
                  "WCAG 2.2",
                  "Git",
                  "MVC Architecture",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-gray-600 bg-gray-700 px-3 py-1 text-sm text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
