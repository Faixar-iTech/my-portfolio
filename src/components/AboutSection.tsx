import { Code, Palette, Zap } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices and modern standards.",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Crafting visually stunning interfaces that captivate and engage users.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and efficiency to deliver seamless experiences.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-4">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Passionate about creating{" "}
              <span className="text-gradient">digital excellence</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              With over 5 years of experience in web development and design, I
              specialize in creating immersive digital experiences that push
              boundaries. My approach combines technical expertise with creative
              vision to deliver solutions that not only look stunning but
              perform exceptionally.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              When I'm not coding, you'll find me exploring new design trends,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-secondary rounded-full">
                <span className="font-body text-sm text-secondary-foreground">
                  React.js
                </span>
              </div>
              <div className="px-4 py-2 bg-secondary rounded-full">
                <span className="font-body text-sm text-secondary-foreground">
                  TypeScript
                </span>
              </div>
              <div className="px-4 py-2 bg-secondary rounded-full">
                <span className="font-body text-sm text-secondary-foreground">
                  Node.js
                </span>
              </div>
              <div className="px-4 py-2 bg-secondary rounded-full">
                <span className="font-body text-sm text-secondary-foreground">
                  UI/UX Design
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 shadow-card"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-gold rounded-xl">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
