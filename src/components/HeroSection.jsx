import { ArrowDown } from "lucide-react"


export const HeroSection = () => {
    return <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Olá! XXX </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">XXX </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">XXX </span>
                </h1>
                <p className="text-lg md:text-xl tedxt-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    Desenvolvedor Full Stack com experiência prática em React, Node.js, PHP, Firebase e MySQL. Atuei em empresas, projetos
                    próprios e como autônomo, entregando soluções escaláveis, desde sistemas de gestão até plataformas de e-commerce.

                </p>
            </div>
            <div className="pt-5 opacity-0 animate-fade-in-delay-4">
                <a href="#projects" className="cosmic-button">
                    Veja aqui os meus projetos!
                </a>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Rolagem liberada!</span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section>
}