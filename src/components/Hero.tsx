import heroBg from "@/assets/hero-bg.jpg";
import bernardoImg from "@/assets/bernardo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-dark/80" />

      {/* Main content */}
      <div className="relative z-10 flex-1 container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-24 md:py-32">
        {/* Left - Photo */}
        <div className="flex-shrink-0 w-64 md:w-80 lg:w-96">
          <img
            src={bernardoImg}
            alt="Advogado do escritório Calina"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Right - Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight font-semibold">
            Registro de Marca, Recuperação de Créditos e Defesas Tributárias
          </h1>
          <p className="mt-6 text-base md:text-lg text-primary-foreground/80 leading-relaxed font-light">
            Nosso escritório conta com ampla experiência nas áreas de registro de marca, recuperação de créditos e defesas tributárias, oferecendo soluções jurídicas personalizadas para proteger o seu patrimônio.
          </p>
          <p className="mt-4 text-sm md:text-base text-primary-foreground/60 font-light tracking-wide">
            Entre em contato e fale conosco agora mesmo.
          </p>
          <a
            href="#contato"
            className="mt-8 inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded text-sm tracking-widest uppercase transition-colors duration-300"
          >
            Fale Conosco
          </a>
        </div>
      </div>

      {/* Bottom label */}
      <div className="relative z-10 pb-6 text-center">
        <span className="text-primary-foreground/50 text-sm tracking-[0.3em] uppercase font-light">
          Áreas de Atuação
        </span>
        <div className="w-px h-8 bg-primary-foreground/30 mx-auto mt-3" />
      </div>

      {/* Wave curve at the bottom */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C360,120 720,0 1080,60 C1260,90 1380,100 1440,80 L1440,120 L0,120 Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
