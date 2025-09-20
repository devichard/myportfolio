import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        { /* Toggle (Tema) */}
            <ThemeToggle />
        { /* Background (Efeitos) */}
            <StarBackground />
        { /* Barra de Navegação */}
            <Navbar />
        { /* Conteúdo Principal */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillSection />
                <ProjectsSection />
                <ContactSection />
            </main>

        { /* Rodapé */}
        <Footer />
    </div>
    );
};