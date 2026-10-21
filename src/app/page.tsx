import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CompanySection from "@/components/CompanySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container" id="home">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <CompanySection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
