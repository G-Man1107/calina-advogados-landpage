import heroBg from "@/assets/hero-bg.jpg";
import bernardoImg from "@/assets/bernardo.png";
const Hero = () => {
  return <section className="relative min-h-[80vh] flex flex-col overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: `url(${heroBg})`
    }} />
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-dark/80" />

      {/* Main content */}
      <div className="relative z-10 flex-1 container mx-auto px-6 flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-12 py-24 md:py-32">
        
        {/* Photo */}
       {/* Foto do Advogado com Chamada Flutuante */}
        <div className="flex-shrink-0 w-64 md:w-80 lg:w-96 order-last md:order-none relative z-20 transform translate-y-12 md:translate-y-[80px] lg:translate-y-[100px]">
          
          <img 
            src={bernardoImg} 
            alt="Advogado do escritório Calina" 
            className="w-full h-auto object-contain drop-shadow-2xl relative z-10" 
          />

          {/* Chamada Flutuante (Desktop e Tablet) - Fica à esquerda da foto, entre o texto e o advogado */}
          <a 
            href="#areas" 
            className="absolute bottom-1/3 -left-12 lg:-left-24 z-30 hidden md:flex items-center gap-2 bg-black/30 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full text-white/90 hover:bg-black/50 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl group"
          >
            <span className="font-medium text-sm lg:text-base tracking-wide">Nossas Áreas de Atuação</span>
            {/* Ícone de seta com animação suave ao passar o rato */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-y-1 transition-transform">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </a>

          {/* Chamada Discreta (Mobile) - Fica logo abaixo da foto */}
          <a 
            href="#areas" 
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex md:hidden items-center gap-2 text-white/80 text-sm hover:text-white transition-colors"
          >
            <span>Ver Áreas</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce mt-1">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </a>

        </div>

        {/* Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight font-semibold">Registro de Marca, Recuperação de Créditos, Execução Fiscal e Isenção de Imposto de Renda.</h1>
          <p className="mt-6 text-base text-primary-foreground/80 leading-relaxed font-light md:text-xl">Nosso escritório conta com ampla experiência nas áreas de registro de marca, recuperação de créditos e defesas tributárias no geral, oferecendo soluções jurídicas personalizadas para proteger o seu patrimônio.
        </p>
          <p className="mt-4 text-sm text-primary-foreground/60 font-light tracking-wide md:text-xl">
            Entre em contato e fale conosco agora mesmo.
          </p>
          
          <a 
  className="mt-8 inline-flex items-center justify-center gap-2 px-8 py-4 rounded tracking-widest uppercase transition-all duration-300 bg-[#25D366] hover:bg-[#128C7E] text-white text-xl text-center font-bold shadow-lg hover:scale-105" 
  href="https://wa.me/5521966310195"
  target="_blank"
  rel="noopener noreferrer"
>
  Fale Conosco Agora no WhatsApp
</a>
        
        </div>
      </div>


      {/* Wave curve at the bottom - rises toward the image on the right */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        
      </div>
    </section>;
};
export default Hero;
