import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="bg-orb bg-orb-primary w-96 h-96 -top-48 -right-48" />
      <div className="bg-orb bg-orb-secondary w-80 h-80 bottom-20 -left-40" />

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <div className="relative animate-float">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 animate-pulse-glow">
              <img
                src={profilePhoto}
                alt="Gunjan Lathwal"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110" />
            <div className="absolute inset-0 rounded-full border border-secondary/10 scale-125" />
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="text-foreground">Gunjan</span>{' '}
              <span className="text-gradient">Lathwal</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Passionate Software Developer | Data Science & AI Enthusiast | Building impactful solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a href="#portfolio" className="btn-primary inline-flex items-center justify-center gap-2">
                View Portfolio
              </a>
              <a href="#contact" className="btn-outline inline-flex items-center justify-center gap-2">
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <a
                href="https://linkedin.com/in/gunjan-lathwal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/GunjanLathwal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:gunjan251492@gmail.com"
                className="p-3 rounded-lg bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
