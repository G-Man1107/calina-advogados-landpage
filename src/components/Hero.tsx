import heroBg from "@/assets/hero-bg.jpg";
import bernardoImg from "@/assets/bernardo.png";

const Hero = () => {
  return (
    // min-h-[75vh] garante que 25% do ecrã de baixo fica livre para mostrar a secção "Áreas de Atuação"
    <section className="relative min-h-[75vh] flex flex-col">
      
      {/* Imagem de Fundo e Camada Escura */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${heroBg})` }} 
      />
      <div className="absolute inset-0 bg-primary-dark/80" />

      {/* lg:pt-[76px] respeita os 20px que pediu para subir no Desktop. */}
      {/* lg:pb-12 dá um respiro na base para o botão não colar no fundo. */}
      <div className="relative z-10 flex-1 container mx-auto px-6 flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-12 pt-[80px] lg:pt-[76px] pb-0 lg:pb-12">
        
        {/* Foto do Advogado: O translate-y faz a foto deslizar para a secção de baixo */}
        <div className="flex-shrink-0 w-64 md:w-80 lg:w-[400px] order-last lg:order-none relative z-20 transform translate-y-[60px] md:translate-y-[80px] lg:translate-y-[100px]">
          <img 
            src={bernardoImg} 
            alt="Advogado do escritório Calina" 
            className="w-full h-auto object-contain drop-shadow-2xl" 
          />
        </div>

        {/* Textos e Botão: pb-20 no telemóvel afasta o botão da foto */}
        <div className="relative z-30 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl pb-20 lg:pb-0">
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
