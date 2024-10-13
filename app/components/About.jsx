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
} from "react-icons/si";
import "./IconsStyles.css";
import SkillCarousel from "./InfiniteSkillsCarousel";

const skills = [
    { name: "JavaScript", icon: SiJavascript, iconClass: "SiJavascript" },
    { name: "React", icon: SiReact, iconClass: "SiReact" },
    { name: "Node.js", icon: SiNodedotjs, iconClass: "SiNodedotjs" },
    { name: "Python", icon: SiPython, iconClass: "SiPython" },
    { name: "MongoDB", icon: SiMongodb, iconClass: "SiMongodb" },
    { name: "HTML5", icon: SiHtml5, iconClass: "SiHtml5" },
    { name: "CSS3", icon: SiCss3, iconClass: "SiCss3" },
    { name: "TypeScript", icon: SiTypescript, iconClass: "SiTypescript" },
    { name: "Git", icon: SiGit, iconClass: "SiGit" },
];

const About = () => {
    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="min-h-screen text-dimmed-white py-40">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold mb-12 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUpVariants}
                    transition={{ duration: 0.6 }}
                >
                    About Me
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUpVariants}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4 flex items-center">
                            <FaCode className="mr-2 text-cyan-300" /> My Journey
                        </h3>
                        <p className="mb-4">
                            With a passion for problem-solving and a love for
                            clean, efficient code, I've spent the last 5 years
                            honing my skills as a Full Stack Developer. My
                            journey in tech began with a fascination for how
                            things work behind the scenes on the web, which led
                            me to dive deep into both front-end and back-end
                            technologies.
                        </p>
                        <p>
                            I thrive on challenges and continuously seek to
                            expand my knowledge and skills in the ever-evolving
                            world of web development. My goal is to create
                            intuitive, user-friendly applications that not only
                            meet but exceed client expectations.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUpVariants}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4 flex items-center">
                            <FaGraduationCap className="mr-2 text-cyan-300" />{" "}
                            Education
                        </h3>
                        <p className="mb-4">
                            Bachelor of Science in Computer Science
                            <br />
                            University of Technology, Graduated 2018
                        </p>
                        <h3 className="text-2xl font-semibold mb-4 flex items-center">
                            <FaHeart className="mr-2 text-cyan-300" /> Interests
                        </h3>
                        <p>
                            When I'm not coding, you can find me exploring new
                            hiking trails, experimenting with new recipes in the
                            kitchen, or diving into a good sci-fi novel. I'm
                            also passionate about mentoring aspiring developers
                            and contributing to open-source projects.
                        </p>
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
                    <h3 className="text-2xl font-semibold mb-6 text-center">
                        Skills
                    </h3>
                    <SkillCarousel skills={skills} />
                </motion.div>
            </div>
        </div>
    );
};

export default About;
