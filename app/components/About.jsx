"use client";
import { motion } from "framer-motion";
import { FaCode, FaGraduationCap, FaHeart } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiGit,
  SiSass,
  SiJquery,
  SiSalesforce,
} from "react-icons/si";
import "./IconsStyles.css";
import SkillCarousel from "./InfiniteSkillsCarousel";

const skills = [
  { name: "JavaScript", icon: SiJavascript, iconClass: "SiJavascript" },
  { name: "React", icon: SiReact, iconClass: "SiReact" },
  { name: "Node.js", icon: SiNodedotjs, iconClass: "SiNodedotjs" },
  { name: "HTML5", icon: SiHtml5, iconClass: "SiHtml5" },
  { name: "CSS3/Sass", icon: SiSass, iconClass: "SiSass" },
  { name: "TypeScript", icon: SiTypescript, iconClass: "SiTypescript" },
  { name: "jQuery", icon: SiJquery, iconClass: "SiJquery" },
  { name: "Python", icon: SiPython, iconClass: "SiPython" },
  { name: "MongoDB", icon: SiMongodb, iconClass: "SiMongodb" },
  { name: "Salesforce", icon: SiSalesforce, iconClass: "SiSalesforce" },
  { name: "Git", icon: SiGit, iconClass: "SiGit" },
];

const About = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-24 text-dimmed-white sm:py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-4xl font-bold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUpVariants}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-4 flex items-center text-2xl font-semibold">
              <FaCode className="mr-2 text-cyan-300" /> My Journey
            </h3>
            <p className="mb-4">
              With a passion for problem-solving and expertise in test-driven development,
              I&apos;ve spent over 6 years specializing as a Frontend Developer with ReactJS.
              My journey focuses on creating high-performance, user-friendly web applications
              that improve user engagement and deliver exceptional user experiences.
            </p>
            <p>
              I excel in debugging complex issues, optimizing performance, and ensuring
              accessibility for all users. With extensive experience in Agile methodologies
              and collaboration with designers, I focus on UI/UX best practices to create
              applications that exceed client expectations.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="mb-4 flex items-center text-2xl font-semibold">
              <FaGraduationCap className="mr-2 text-cyan-300" /> Education
            </h3>
            <div className="mb-4 bg-gray-900/50 rounded-lg p-4 border border-gray-700">
              <p className="text-gray-300">
                <span className="font-semibold text-cyan-300">B.E. Computer Science</span> • 
                <span className="text-gray-400"> Sinhgad Kashibai Navle College</span> • 
                <span className="text-gray-400"> 2014-2018</span>
              </p>
            </div>
            <h3 className="mb-4 flex items-center text-2xl font-semibold">
              <FaHeart className="mr-2 text-cyan-300" /> Philosophy & Interests
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">Development Philosophy:</h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  I believe in writing clean, maintainable code that tells a story. Every component should have a purpose, 
                  every function should be testable, and every user interaction should feel natural and accessible.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">What Excites Me:</h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  The intersection of technology and user experience fascinates me. I love transforming complex problems 
                  into elegant solutions that users don&apos;t even notice - because they just work perfectly.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">Beyond Code:</h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  When I&apos;m not developing, I enjoy exploring new technologies, contributing to open-source projects, 
                  and mentoring fellow developers. I also find inspiration in design, photography, and understanding 
                  how great products are built.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUpVariants}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="mb-6 text-center text-2xl font-semibold">Skills</h3>
          <SkillCarousel skills={skills} />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
