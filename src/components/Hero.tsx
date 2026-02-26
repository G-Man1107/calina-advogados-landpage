import heroBg from "@/assets/hero-bg.jpg";
import bernardoImg from "@/assets/bernardo.png";

const Hero = () => {
  return (
    // REMOVIDO o overflow-hidden para a imagem poder descer sem ser cortada
    <section className="relative min-h-[75vh] flex flex-col">
      
      {/* Imagem de Fundo */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${heroBg})` }} 
      />
      
      {/* Camada Escura */}
      <div className="absolute inset-0 bg-primary-dark/80" />

      {/* Conteúdo Principal (Mantivemos o seu ajuste de 20px no lg:pt-[76px]) */}
      <div className="relative z-10 flex-1 container mx-auto px-6 flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-12 pt-20 md:pt-24 lg:pt-[76px] pb-0">
        
        {/* Foto do Advogado (z-30 garante que fica por cima do fundo cinzento) */}
        <div className="flex-shrink-0 w-64 md:w-80 lg:w-96 order-last md:order-none relative z-30 transform translate-y-12 md:translate-y-[80px] lg:translate-y-[100px]">
          <img 
            src={bernardoImg} 
            alt="Advogado do escritório Calina" 
            className="w-full h-auto object-contain drop-shadow-2xl" 
          />
        </div>

        {/* Texto e Botão (z-40 garante que NUNCA será bloqueado por nada) */}
        <div className="relative z-40 flex flex-col items-center md:items-start text-center md:text-left max-w-2xl pb-16 md:pb-0">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight font-semibold">
            Registro de Marca, Recuperação de Créditos, Execução Fiscal e Isenção de Imposto de Renda.
          </h1>
          
          <p className="mt-6 text-base text-primary-foreground/80 leading-relaxed font-light md:text-xl">
            Nosso escritório conta com ampla experiência nas áreas de registro de marca, recuperação de créditos e defesas tributárias no geral, oferecendo soluções jurídicas personalizadas para proteger o seu patrimônio.
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
    </section>
  );
};

export default Hero;
