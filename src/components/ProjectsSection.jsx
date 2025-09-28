import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Micro SaaS - Chard(s);",
    description:
      "Aplicação web desenvolvida em React/Firebase com metodologia Kanban e implementação de chat interno.",
    image: "/projects/Chards.png",
    tags: ["JavaScript", "React", "Tailwind", "Firebase", "Git/GitHub"],
    githubUrl: "https://github.com/devichard/fop-repository",
  },
  {
    id: 2,
    title: "Sistema Cérebro Sebrae",
    description:
      "Sistema interno do SEBRAE-DF em 2021/2022 no qual me orgulho em colocar nos projetos, pois foi a chave para destravar minhas boas práticas em desenvolvimento! ",
    image: "/projects/Sebrae.png",
    tags: ["PHP", "MySQL", "Suporte Software/Hardware", "Git/GitHub"],
    githubUrl: "",
  },
  /*{
    id: 3,
    title: "E-commerce: ChardShop",
    description: "Loja genérica com aplicação de Liquid e Ruby, aqui priorizei a parte de gerenciamento, vendas e estratégias de marketing. "
  }*/
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 x-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Projetos em <span className="text-primary">Destaque</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Aqui é onde fica um pouquinho do que já fiz no meu tempo de
          desenvolvimento. Onde sempre prezei pelos detalhes, performance e UX.
        </p>

        <div className="grid grid-cols:-1 md:grid-cols-2 lg-grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags?.map((tag) => (
                    <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

<div className="text-center mt-12">
    <a
    className="cosmic-button w-fit flex items-center mx-auto gap-2"
    href="https://www.github.com/devichard"
    target="_blank"
    >
    
        Meu GitHub <ArrowRight size={16} />
    </a>
</div>

      </div>
    </section>
  );
};
