import { useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Contact
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-gold rounded-xl">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  Email
                </h3>
                <a
                  href="mailto:hello@johndoe.com"
                  className="font-body text-muted-foreground hover:text-primary transition-colors"
                >
                  hello@johndoe.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-gold rounded-xl">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  Phone
                </h3>
                <a
                  href="tel:+1234567890"
                  className="font-body text-muted-foreground hover:text-primary transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-gold rounded-xl">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  Location
                </h3>
                <p className="font-body text-muted-foreground">
                  San Francisco, CA
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                Follow Me
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 bg-card border border-border rounded-xl hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-card border border-border rounded-xl hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-card border border-border rounded-xl hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="font-body text-sm text-foreground mb-2 block"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="font-body text-sm text-foreground mb-2 block"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="font-body text-sm text-foreground mb-2 block"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-card border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-gold text-primary-foreground font-body font-medium rounded-xl shadow-glow hover:scale-[1.02] transition-transform duration-300"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
