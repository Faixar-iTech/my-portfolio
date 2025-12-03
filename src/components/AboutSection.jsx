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
  <span className="text-gradient">scalable digital solutions</span>
</h2>

<p className="font-body text-muted-foreground leading-relaxed mb-6">
  With over 8 years of experience as a Full Stack .NET Developer, I specialize in building
  enterprise-grade applications using ASP.NET Core, React, and SQL Server. 
  I focus on crafting clean, scalable, and secure solutions—whether it's ERP modules, 
  HRM systems, procurement workflows, or business automation tools.
</p>

<p className="font-body text-muted-foreground leading-relaxed mb-8">
  Beyond coding, I enjoy exploring cloud technologies, improving database performance, 
  and sharing knowledge with the developer community. My goal is simple—deliver 
  impactful digital products that solve real business problems.
</p>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-secondary rounded-full">
                <span className="font-body text-sm text-secondary-foreground">
                  Asp.Net Core
                </span>
              </div>
              <div className="px-4 py-2 bg-secondary rounded-full">
                <span className="font-body text-sm text-secondary-foreground">
                  JavaScript
                </span>
              </div>
              <div className="px-4 py-2 bg-secondary rounded-full">
                <span className="font-body text-sm text-secondary-foreground">
                  SQL Server
                </span>

              </div>
              <div className="px-4 py-2 bg-secondary rounded-full">
                <span className="font-body text-sm text-secondary-foreground">
                  React.js
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
