import heroBg from "@/assets/hero-bg.jpg";
import bernardoImg from "@/assets/bernardo.png";
const Hero = () => {
  return <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: `url(${heroBg})`
    }} />
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-dark/80" />

      {/* Main content */}
      <div className="relative z-10 flex-1 container mx-auto px-6 flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-12 py-24 md:py-32">
        {/* Left - Photo */}
        <div className="flex-shrink-0 w-64 md:w-80 lg:w-96">
          <img src={bernardoImg} alt="Advogado do escritório Calina" className="w-full h-auto object-contain drop-shadow-2xl" />
        </div>

        {/* Right - Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight font-semibold">
            Registro de Marca, Recuperação de Créditos e Defesas Tributárias
          </h1>
          <p className="mt-6 text-base text-primary-foreground/80 leading-relaxed font-light md:text-xl">
            Nosso escritório conta com ampla experiência nas áreas de registro de marca, recuperação de créditos e defesas tributárias, oferecendo soluções jurídicas personalizadas para proteger o seu patrimônio.
          </p>
          <p className="mt-4 text-sm text-primary-foreground/60 font-light tracking-wide md:text-xl">
            Entre em contato e fale conosco agora mesmo.
          </p>
          <a href="#contato" className="mt-8 inline-flex items-center gap-2 text-primary-foreground px-8 py-4 rounded tracking-widest uppercase transition-colors duration-300 bg-[#25d466] text-xl">
            Fale agora Conosco no whatsapp  
          </a>
        </div>
      </div>


      {/* Wave curve at the bottom - rises toward the image on the right */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg viewBox="0 0 1440 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
          <path d="M0,260 C200,250 500,240 720,250 C900,258 1050,200 1200,100 C1320,40 1400,15 1440,25 L1440,300 L0,300 Z" className="fill-background" />
        </svg>
      </div>
    </section>;
};
export default Hero;