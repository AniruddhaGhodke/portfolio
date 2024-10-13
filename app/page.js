import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import NavigationIndicator from "./components/NavigationIndicator";
import Projects from "./components/Projects";

export default function Home() {
    return (
        <div className="relative bg-dark-black text-dimmed-white min-h-screen selection:bg-cyan-300 selection:text-black">
            {/* <div className="absolute inset-0 bg-dots opacity-10"></div> */}
            <div className="absolute inset-0 bg-grid bg-opacity-10"></div>
            <Header />
            <NavigationIndicator />
            <section id="hero">
                <HeroSection />
            </section>
            <section id="about-me">
                <About />
            </section>
            <section id="experience">
                <Experience />
            </section>
            <section id="projects">
                <Projects />
            </section>
        </div>
    );
}
