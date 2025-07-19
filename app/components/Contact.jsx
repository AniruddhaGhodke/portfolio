"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaPhone, FaMapMarkerAlt, FaFilePdf, FaDownload } from "react-icons/fa";

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
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
              <h3 className="text-2xl font-semibold mb-6 text-cyan-300">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm actively seeking new opportunities in full-stack development. 
                Whether you have a project in mind or just want to connect, I'd love to hear from you!
              </p>
            </div>

            {/* Availability Status */}
            <motion.div 
              className="bg-green-900/30 border border-green-500/50 rounded-lg p-4 mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Available for New Opportunities</span>
              </div>
              <p className="text-sm text-gray-300 mt-2">
                Open to full-time positions, contract work, and exciting projects
              </p>
            </motion.div>

            {/* Contact Details */}
            <div className="space-y-4">
              <motion.a
                href="mailto:aniruddha.ghodke@example.com"
                className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaEnvelope className="text-cyan-300 text-xl group-hover:text-cyan-400" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-gray-400 text-sm">aniruddha.ghodke@example.com</div>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/aniruddha-ghodke-363796185/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaLinkedin className="text-cyan-300 text-xl group-hover:text-cyan-400" />
                <div>
                  <div className="font-medium">LinkedIn</div>
                  <div className="text-gray-400 text-sm">Connect with me professionally</div>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <FaMapMarkerAlt className="text-cyan-300 text-xl" />
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-gray-400 text-sm">Mumbai, India • Remote Friendly</div>
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
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FaFilePdf className="text-xl" />
                <span>Download Resume</span>
                <FaDownload className="text-sm" />
              </a>
              <p className="text-xs text-gray-400 mt-2">
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
              <h3 className="text-2xl font-semibold mb-6 text-cyan-300">Professional Details</h3>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg text-center border border-gray-700">
                <div className="text-2xl font-bold text-cyan-300">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-center border border-gray-700">
                <div className="text-2xl font-bold text-cyan-300">20+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-center border border-gray-700">
                <div className="text-2xl font-bold text-cyan-300">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-center border border-gray-700">
                <div className="text-2xl font-bold text-cyan-300">24h</div>
                <div className="text-sm text-gray-400">Response Time</div>
              </div>
            </div>

            {/* Work Preferences */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h4 className="text-lg font-semibold text-cyan-300 mb-4">Work Preferences</h4>
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
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h4 className="text-lg font-semibold text-cyan-300 mb-4">Areas of Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "React/Next.js", "Node.js", "TypeScript", "Python", 
                  "MongoDB", "PostgreSQL", "AWS", "Docker", 
                  "Microservices", "API Development"
                ].map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-gray-700 text-cyan-300 px-3 py-1 rounded-full text-sm border border-gray-600"
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