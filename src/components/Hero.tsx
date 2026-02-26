import heroBg from "@/assets/hero-bg.jpg";
import bernardoImg from "@/assets/bernardo.png";

const Hero = () => {
  return (
    // O z-20 aqui garante que o Hero manda no layout e fica SEMPRE por cima
    <section className="relative z-20 flex flex-col bg-primary-dark">
      
      {/* Imagem de Fundo e Camada Escura */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${heroBg})` }} 
      />
      <div className="absolute inset-0 bg-primary-dark/80" />

      {/* Conteúdo Principal (sem min-h para não forçar a tela a ficar gigante) */}
      <div className="relative z-30 container mx-auto px-6 pt-24 pb-4 lg:pt-28 lg:pb-8 flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-12">
        
        {/* Foto do Advogado: translate-y empurra-o 120px para baixo, invadindo a secção seguinte de forma segura */}
        <div className="flex-shrink-0 w-64 md:w-80 lg:w-[450px] relative transform translate-y-12 lg:translate-y-[120px]">
          <img 
            src={bernardoImg} 
            alt="Advogado do escritório Calina" 
            className="w-full h-auto object-contain drop-shadow-2xl" 
          />
        </div>

        {/* Textos e Botão: lg:mb-16 dá um respiro na parte de baixo para os ecrãs grandes */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl lg:mb-16">
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
