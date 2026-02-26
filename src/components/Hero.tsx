import heroBg from "@/assets/hero-bg.jpg";
import bernardoImg from "@/assets/bernardo.png";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col overflow-hidden">
      {/* Imagem de Fundo */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${heroBg})` }} 
      />
      
      {/* Camada Escura (Overlay) */}
      <div className="absolute inset-0 bg-primary-dark/80" />

      {/* Conteúdo Principal */}
      <div className="relative z-10 flex-1 container mx-auto px-6 flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-12 pt-24 md:pt-32 pb-0">
        
        {/* AQUI COMEÇA A ALTERAÇÃO: Foto do Advogado com a Chamada Flutuante */}
        <div className="flex-shrink-0 w-64 md:w-80 lg:w-96 order-last md:order-none relative z-20 transform translate-y-12 md:translate-y-[80px] lg:translate-y-[100px]">
          
          <img 
            src={bernardoImg} 
            alt="Advogado do escritório Calina" 
            className="w-full h-auto object-contain drop-shadow-2xl relative z-10" 
          />

          {/* Chamada Flutuante (Desktop e Tablet) */}
          <a 
            href="#areas" 
            className="absolute bottom-1/3 -left-12 lg:-left-24 z-30 hidden md:flex items-center gap-2 bg-black/30 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full text-white/90 hover:bg-black/50 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl group"
          >
            <span className="font-medium text-sm lg:text-base tracking-wide">Nossas Áreas de Atuação</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-y-1 transition-transform">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </a>

          {/* Chamada Discreta (Mobile) */}
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
        {/* AQUI TERMINA A ALTERAÇÃO */}

        {/* Texto e Botão */}
        <div className="relative z-30 flex flex-col items-center md:items-start text-center md:text-left max-w-2xl pb-16 md:pb-0">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight font-semibold">
            Registro de Marca, Recuperação de Créditos, Execução Fiscal e Isenção de Imposto de Renda.
          </h1>
