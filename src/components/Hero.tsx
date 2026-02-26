import heroBg from "@/assets/hero-bg.jpg";
import bernardoImg from "@/assets/bernardo.png";

const Hero = () => {
  return (
    // Removido o min-h. A altura agora é orgânica. z-20 para ficar por cima do bege.
    <section className="relative z-20 flex flex-col bg-primary-dark">
      
      {/* Imagem de Fundo e Camada Escura */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${heroBg})` }} 
      />
      <div className="absolute inset-0 bg-primary-dark/85" />

      {/* lg:items-end alinha a base do texto com a base da foto */}
      <div className="relative z-30 container mx-auto px-6 pt-24 lg:pt-32 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12">
        
        {/* Lado Esquerdo: Textos e Botão */}
        {/* lg:pb-32 cria o espaço vermelho abaixo do botão antes de cortar para o bege */}
        <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left pb-16 lg:pb-32">
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

        {/* Lado Direito: Foto do Advogado */}
        {/* A MÁGICA AQUI: -mb-[120px] faz com que exatamente 120 pixels da foto "vazem" para a secção de baixo */}
        <div className="w-64 md:w-80 lg:w-[45%] max-w-[500px] relative z-40 -mb-16 lg:-mb-[120px]">
          <img 
            src={bernardoImg} 
            alt="Advogado do escritório Calina" 
            className="w-full h-auto object-contain drop-shadow-2xl" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
