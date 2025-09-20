import { BookOpen, Briefcase, Code, User } from "lucide-react"


export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Afinal, quem é <span className="text-primary">Arthur?</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Sinônimo de organização, conceito e praticidade em uma pessoa só.</h3>

                    <p className="text-muted-foreground">
                        Na área há mais de 4 anos, desenvolvimento web com aplicações
                        extremamente responsivas foi amor à primeira vista! Seja ela desktop ou mobile.
                    </p>

                    <p className="text-muted-foreground">
                        Mais do que programar, busco entender o impacto real de cada solução. Fora do código
                        meu combustível é aprender cada vez mais, evoluir como pessoa/profissional e me destacar por onde passo!

                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Entre em contato
                        </a>
                        <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Baixe meu currículo
                        </a>
                    </div>

                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Desenvolvimento Web </h4>
                                <p className="text-muted-foreground">
                                    Prazer em criar sites responsivos e WebApps!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> UI/UX Fora de Cogitação </h4>
                                <p className="text-muted-foreground">
                                    Fazendo da experiência do usuário uma trufa (irresistível).
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <BookOpen className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Aprendizado Constante </h4>
                                <p className="text-muted-foreground">
                                    Sem me perder na linha do tempo, aprender mais nunca é demais!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
}