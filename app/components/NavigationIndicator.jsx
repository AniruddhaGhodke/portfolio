"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import debounce from "lodash/debounce";

const NavigationIndicator = () => {
    const [activeSection, setActiveSection] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [hoveredSection, setHoveredSection] = useState(null);
    
    const sections = useMemo(() => [
        { id: "hero", label: "Home" },
        { id: "about-me", label: "About" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" }
    ], []);

    const handleScroll = useCallback(() => {
        const scrollPosition = window.scrollY + window.innerHeight / 3;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = Math.min(window.scrollY / documentHeight, 1);
        
        setScrollProgress(progress);
        
        let newActiveSection = 0;
        let closestDistance = Infinity;

        sections.forEach((section, index) => {
            const element = document.getElementById(section.id);
            if (element) {
                const elementTop = element.offsetTop;
                const elementHeight = element.offsetHeight;
                const elementCenter = elementTop + elementHeight / 2;
                const distance = Math.abs(scrollPosition - elementCenter);
                
                if (distance < closestDistance) {
                    closestDistance = distance;
                    newActiveSection = index;
                }
            }
        });

        setActiveSection(newActiveSection);
    }, [sections]);

    const debouncedHandleScroll = useMemo(
        () => debounce(handleScroll, 50),
        [handleScroll]
    );

    useEffect(() => {
        window.addEventListener("scroll", debouncedHandleScroll, { passive: true });
        debouncedHandleScroll();

        return () => {
            window.removeEventListener("scroll", debouncedHandleScroll);
            debouncedHandleScroll.cancel();
        };
    }, [debouncedHandleScroll]);

    const scrollToSection = (index) => {
        const element = document.getElementById(sections[index].id);
        if (element) {
            element.scrollIntoView({ 
                behavior: "smooth",
                block: "start"
            });
        }
    };

    const handleKeyDown = (event, index) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            scrollToSection(index);
        }
    };

    return (
        <div className="hidden lg:block fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
            <nav 
                className="flex flex-col items-center space-y-4"
                role="navigation"
                aria-label="Page sections"
            >
                {/* Progress Bar */}
                <div className="absolute -left-8 top-0 w-1 h-full bg-cool-grey/20 rounded-full overflow-hidden">
                    <motion.div
                        className="w-full bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink rounded-full origin-top"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: scrollProgress }}
                        transition={{ duration: 0.1 }}
                    />
                </div>

                {sections.map((section, index) => (
                    <div key={section.id} className="relative flex items-center">
                        {/* Section Label */}
                        <AnimatePresence>
                            {hoveredSection === index && (
                                <motion.div
                                    initial={{ opacity: 0, x: 10, scale: 0.8 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: 10, scale: 0.8 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute right-16 px-3 py-1.5 bg-dark-black/90 border border-neon-blue/30 rounded-lg backdrop-blur-sm"
                                >
                                    <span className="text-dimmed-white text-sm font-medium whitespace-nowrap">
                                        {section.label}
                                    </span>
                                    <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-dark-black/90 border-r border-b border-neon-blue/30 rotate-45" />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Navigation Dot */}
                        <motion.button
                            className="relative w-4 h-4 rounded-full border-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:ring-offset-2 focus:ring-offset-dark-black transition-all duration-300"
                            animate={{
                                backgroundColor: index === activeSection ? "#08f7fe" : "transparent",
                                borderColor: index === activeSection ? "#08f7fe" : "#666666",
                                boxShadow: index === activeSection 
                                    ? "0 0 10px rgba(8, 247, 254, 0.5), 0 0 20px rgba(8, 247, 254, 0.3)" 
                                    : "none"
                            }}
                            whileHover={{ 
                                scale: 1.3,
                                borderColor: "#08f7fe",
                                boxShadow: "0 0 8px rgba(8, 247, 254, 0.4)"
                            }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => scrollToSection(index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            onMouseEnter={() => setHoveredSection(index)}
                            onMouseLeave={() => setHoveredSection(null)}
                            onFocus={() => setHoveredSection(index)}
                            onBlur={() => setHoveredSection(null)}
                            aria-label={`Go to ${section.label} section`}
                            tabIndex={0}
                        >
                            {/* Inner glow effect */}
                            {index === activeSection && (
                                <motion.div
                                    className="absolute inset-1 rounded-full bg-neon-blue/20"
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            )}
                        </motion.button>

                        {/* Connecting Line */}
                        {index < sections.length - 1 && (
                            <motion.div
                                className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-10"
                                animate={{
                                    background: index < activeSection
                                        ? "linear-gradient(to bottom, #08f7fe 0%, #7d5fff 100%)"
                                        : "linear-gradient(to bottom, #666666 0%, #666666 100%)"
                                }}
                                transition={{ duration: 0.5 }}
                            />
                        )}
                    </div>
                ))}

                {/* Section Counter */}
                <motion.div 
                    className="mt-4 px-2 py-1 bg-dark-black/80 border border-cool-grey/30 rounded-full backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <span className="text-dimmed-white text-xs font-mono">
                        {String(activeSection + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}
                    </span>
                </motion.div>
            </nav>
        </div>
    );
};

export default NavigationIndicator;
