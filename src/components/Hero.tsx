import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-dark/75" />

      <div className="relative z-10 container mx-auto px-6 text-center py-32">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
          <div className="w-20 h-px bg-muted mx-auto" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight">
            Calina Advogados Associados
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/75 max-w-xl mx-auto leading-relaxed font-light">
            Tradição, ética e excelência na defesa dos seus direitos e interesses.
          </p>
          <div className="w-20 h-px bg-muted mx-auto" />
          <a
            href="#contato"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-sm tracking-widest uppercase transition-colors duration-300"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
