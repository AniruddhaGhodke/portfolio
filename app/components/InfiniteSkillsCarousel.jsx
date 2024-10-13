import React from "react";
import { motion } from "framer-motion";

const SkillCarousel = ({ skills }) => {
    const duplicatedSkills = [...skills, ...skills, ...skills]; // Triple the skills for smoother looping

    return (
        <div className="skill-carousel-container overflow-hidden">
            <div className="skill-track flex gap-5">
                {duplicatedSkills.map((skill, index) => (
                    <motion.span
                        key={index}
                        className="bg-gray-800 text-cyan-300 px-3 py-3 rounded-full text-lg flex items-center gap-1 skill-icon shrink-0"
                        whileHover={{ rotate: 3 }}
                    >
                        <motion.div
                            className={`text-3xl skill-icon ${skill.iconClass}`}
                            whileHover={{ scale: 1.1, rotate: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <skill.icon />
                        </motion.div>
                        {skill.name}
                    </motion.span>
                ))}
            </div>
        </div>
    );
};

export default SkillCarousel;
