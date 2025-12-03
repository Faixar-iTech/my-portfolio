import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float animation-delay-400" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-up">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-up animation-delay-200">
            <span className="text-foreground">Hasanuzzaman</span>{" "}
            <span className="text-gradient">Rony</span>
          </h1>

          {/* Title */}
         <p className="font-display text-xl md:text-2xl text-muted-foreground mb-8 opacity-0 animate-fade-up animation-delay-400">
  Full Stack Developer — ASP.NET Core | React | SQL Server
</p>
          {/* Description */}
          <p className="font-body text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-up animation-delay-600">
  Building high-performance, scalable, and user-focused web applications with clean architecture and modern technologies. Passionate about creating meaningful digital solutions that drive real business impact.
</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up animation-delay-800">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-gold text-primary-foreground font-body font-medium rounded-full shadow-glow hover:scale-105 transition-transform duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-border text-foreground font-body font-medium rounded-full hover:border-primary hover:text-primary transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-800">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="font-body text-xs tracking-wider">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
