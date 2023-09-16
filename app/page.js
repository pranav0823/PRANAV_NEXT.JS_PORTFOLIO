import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AchievementsSection from "./components/AchivementsSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] w-full py-4 relative">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <Contact />
        {/* Decorative div at the bottom of the Contact section */}
        <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full blur-lg bottom-0 left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <Footer />
    </main>
  );
}
