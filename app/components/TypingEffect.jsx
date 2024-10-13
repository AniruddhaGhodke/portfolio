"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const TypingEffect = ({ fullText }) => {
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (isTyping) {
            if (text.length < fullText.length) {
                const timeout = setTimeout(() => {
                    setText(fullText.slice(0, text.length + 1));
                }, 100);
                return () => clearTimeout(timeout);
            } else {
                setIsTyping(false);
            }
        }
    }, [text, isTyping]);

    return (
        <h1 className="relative text-center text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-neon-blue to-neon-pink shadow-lg">
            {text}
            <motion.span
                className="inline-block w-0.5 h-8 bg-white ml-1"
                animate={{ opacity: [0, 1] }}
                transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />
        </h1>
    );
};

export default TypingEffect;
