const skills = [
  { name: "React.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "UI/UX Design", level: 88 },
  { name: "Python", level: 75 },
  { name: "PostgreSQL", level: 80 },
];

const technologies = [
  "JavaScript",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "GraphQL",
  "REST APIs",
  "Git",
  "Docker",
  "AWS",
  "Figma",
  "Tailwind CSS",
  "Next.js",
  "Redux",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Skills */}
          <div>
            <p className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Expertise
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12">
              Skills & <span className="text-gradient">Proficiency</span>
            </h2>

            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-body text-foreground">{skill.name}</span>
                    <span className="font-body text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-gold rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Technologies */}
          <div>
            <p className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Tech Stack
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12">
              Technologies I <span className="text-gradient">Work With</span>
            </h2>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className="px-5 py-3 bg-card border border-border rounded-xl hover:border-primary hover:shadow-glow transition-all duration-300 cursor-default"
                >
                  <span className="font-body text-sm text-foreground">
                    {tech}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
              <div className="text-center">
                <p className="font-display text-4xl font-bold text-gradient">5+</p>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Years Experience
                </p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl font-bold text-gradient">50+</p>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Projects Completed
                </p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl font-bold text-gradient">30+</p>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
