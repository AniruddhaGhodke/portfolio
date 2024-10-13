"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import debounce from "lodash/debounce";

const NavigationIndicator = () => {
    const [activeSection, setActiveSection] = useState(0);
    const sections = ["hero", "about-me", "experience", "projects"];

    const handleScroll = useCallback(() => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        let newActiveSection = 0;

        for (let i = sections.length - 1; i >= 0; i--) {
            const element = document.getElementById(sections[i]);
            if (element && scrollPosition >= element.offsetTop) {
                newActiveSection = i;
                break;
            }
        }

        setActiveSection(newActiveSection);
    }, []);

    const debouncedHandleScroll = useCallback(
        debounce(handleScroll, 100), // Adjust the delay (in ms) as needed
        []
    );

    useEffect(() => {
        window.addEventListener("scroll", debouncedHandleScroll);
        debouncedHandleScroll(); // Call once to set initial state

        return () => {
            window.removeEventListener("scroll", debouncedHandleScroll);
            debouncedHandleScroll.cancel(); // Cancel any pending debounced calls on cleanup
        };
    }, [debouncedHandleScroll]);

    const scrollToSection = (index) => {
        const element = document.getElementById(sections[index]);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="hidden sm:block fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
            <div className="flex flex-col items-center">
                {sections.map((section, index) => (
                    <React.Fragment key={section}>
                        <motion.div
                            className="w-4 h-4 rounded-full border-2 cursor-pointer"
                            animate={{
                                backgroundColor:
                                    index === activeSection
                                        ? "#22d3ee"
                                        : "transparent",
                                borderColor:
                                    index === activeSection
                                        ? "#22d3ee"
                                        : "#94a3b8",
                            }}
                            transition={{ duration: 0.3 }}
                            whileHover={{ scale: 1.2 }}
                            onClick={() => scrollToSection(index)}
                        />
                        {index < sections.length - 1 && (
                            <motion.div
                                className="w-0.5 h-8"
                                animate={{
                                    background: `linear-gradient(to bottom, 
                                    ${
                                        index < activeSection
                                            ? "#22d3ee"
                                            : "#94a3b8"
                                    } 0%, 
                                    ${
                                        index + 1 <= activeSection
                                            ? "#22d3ee"
                                            : "#94a3b8"
                                    } 100%)`,
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default NavigationIndicator;
