import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  //Front
  { name: "HTML/CSS", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 66, category: "Frontend" },
  { name: "React", level: 63, category: "Frontend" },
  { name: "Tailwind CSS", level: 70, category: "Frontend" },
  { name: "Next.js", level: 37, category: "Frontend" },
  { name: "PHP", level: 68, category: "Frontend" },

  //Backend
  { name: "Node.js", level: 40, category: "Backend" },
  { name: "MySQL", level: 70, category: "Backend" },
  { name: "Firebase", level: 71, category: "Backend" },

  //Tools
  { name: "Git/GitHub", level: 74, category: "Ferramentas" },
  { name: "VS Code", level: 87, category: "Ferramentas" },
  { name: "N8N", level: 37, category: "Ferramentas" },
];

const categories = ["Todas", "Frontend", "Backend", "Ferramentas"];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("Todas");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "Todas" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Minhas <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name} </h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                  style={{ width: skill.level + "%" }}
                ></div>
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
