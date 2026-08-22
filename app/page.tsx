import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ClosedSection from "./components/ClosedSection";

// Set to false to restore the full portfolio.
const SITE_CLOSED = false;

export default function Home() {
  if (SITE_CLOSED) {
    return (
      <main className="relative h-screen overflow-hidden">
        <AnimatedBackground />
        <div className="relative z-10">
          <ClosedSection />
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navbar />

      {/* Page Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        {/* <SkillsSection /> */}
        <ContactSection />
        <Footer />
      </div>
      <ThemeSwitcher />
    </main>
  );
}
