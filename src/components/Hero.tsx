import heroBg from "@/assets/hero-bg.jpg";
import bernardoImg from "@/assets/bernardo.png";

const Hero = () => {
  return (
    // Estrutura intacta: sem restrições de altura, layout fluído.
    <section className="relative z-20 flex flex-col bg-primary-dark">
      
      {/* Imagem de Fundo e Camada Escura */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${heroBg})` }} 
      />
      <div className="absolute inset-0 bg-primary-dark/85" />

      {/* Container Principal */}
      <div className="relative z-30 container mx-auto px-6 pt-24 lg:pt-32 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12">
        
        {/* Lado Esquerdo: Textos e Botão WhatsApp */}
        <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left pb-16 lg:pb-32 relative z-30">
          <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl text-primary-foreground leading-tight font-semibold">
            Registro de Marca, Recuperação de Créditos, Execução Fiscal e Isenção de Imposto de Renda.
          </h1>
          
          <p className="mt-6 text-base text-primary-foreground/80 leading-relaxed font-light md:text-xl">
            Nosso escritório conta com ampla experiência nas áreas de registro de marca, recuperação de créditos e defesas tributárias no geral, oferecendo soluções jurídicas personalizadas para proteger o seu patrimônio.
          </p>
          
          <p className="mt-4 text-sm text-primary-foreground/60 font-light tracking-wide md:text-xl">
            Entre em contato e fale conosco agora mesmo.
          </p>

          <a 
            className="mt-8 inline-flex items-center justify-center gap-2 px-8 py-4 rounded tracking-widest uppercase transition-all duration-300 bg-[#25D366] hover:bg-[#128C7E] text-white text-lg font-bold shadow-lg hover:scale-105" 
            href="https://wa.me/5521966310195"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale Conosco Agora no WhatsApp
          </a>
        </div>

        {/* Lado Direito: Foto do Advogado com o Botão Instagram Flutuante */}
        <div className="w-64 md:w-80 lg:w-[45%] max-w-[500px] relative z-40 -mb-16 lg:-mb-[120px]">
          
          {/* BOTÃO DO INSTAGRAM - POSICIONAMENTO EXATO NO RETÂNGULO LARANJA */}
          {/* md:top-[38%] alinha verticalmente com o espaço vazio. lg:-left-[260px] joga o botão para fora da imagem, caindo no espaço entre o texto e o advogado */}
          {/* whitespace-nowrap impede que o texto do botão quebre e estrague o layout */}
          <a 
            href="https://www.instagram.com/calinaadvogados/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute -top-4 left-1/2 -translate-x-1/2 md:translate-x-0 md:top-[40%] md:left-auto md:-left-[180px] lg:-left-[260px] z-50 flex items-center gap-2.5 bg-black/40 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full text-white/90 hover:bg-black/60 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl group whitespace-nowrap"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-white/90"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            <span className="font-medium text-xs lg:text-sm tracking-wide">Nos siga no Instagram @calinaadvogados</span>
          </a>

          <img 
            src={bernardoImg} 
            alt="Advogado do escritório Calina" 
            className="w-full h-auto object-contain drop-shadow-2xl relative z-10" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
