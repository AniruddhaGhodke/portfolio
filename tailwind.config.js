/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./pages/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "dark-black": "#0a0a0a",
                "neon-blue": "#08f7fe", // Slightly deeper
                "neon-green": "#32ff7e", // Softer neon green
                "neon-pink": "#ff2d55", // More vibrant neon pink
                "neon-purple": "#7d5fff", // Richer neon purple
                "neon-yellow": "#ffdf00", // Softer yellow for better contrast
                "cool-grey": "#666666", // Darker grey for modern feel
                "dimmed-white": "#e6e6e6", // Brightened slightly
            },
            animation: {
                glow: "glow 2s ease-in-out infinite alternate",
                pulse: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                scrollImg: "scrollImg 20s linear infinite",
            },
            keyframes: {
                glow: {
                    "0%": {
                        boxShadow:
                            "0 0 5px rgba(6, 182, 212, 0.2), 0 0 10px rgba(6, 182, 212, 0.2)",
                    },
                    "100%": {
                        boxShadow:
                            "0 0 7px rgba(6, 182, 212, 0.5), 0 0 15px rgba(6, 182, 212, 0.5)",
                    },
                },
                pulse: {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0.5 },
                },
                scrollImg: {
                    "0%": { transform: "translateY(0%)" },
                    "50%": { transform: "translateY(-20%)" },
                    "100%": { transform: "translateY(0%)" },
                },
            },
        },
    },
    plugins: [],
};
