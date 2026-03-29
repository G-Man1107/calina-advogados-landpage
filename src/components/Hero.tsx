import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg"; // Substitua pelo caminho correto da sua imagem
import bernardoImg from "@/assets/bernardo.png"; // Substitua pelo caminho correto da sua imagem

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col overflow-hidden">
      {/* Imagem de Fundo e Camada de Sobreposição */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-primary-dark/80" />

      {/* Navegação Superior */}
      <nav className="relative z-20 flex items-center justify-between container mx-auto px-6 py-6 border-b border-primary-foreground/10">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <span className="text-xl text-primary-foreground font-serif">CALINA ADVOGADOS ASSOCIADOS</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#sobre" className="text-base text-primary-foreground/80 hover:text-primary-foreground">SOBRE</a>
          <a href="#areas" className="text-base text-primary-foreground/80 hover:text-primary-foreground">ÁREAS DE ATUAÇÃO</a>
          <a href="#contato" className="text-base text-primary-foreground/80 hover:text-primary-foreground">CONTATO</a>
        </div>
      </nav>

      {/* Conteúdo Principal do Hero */}
      <div className="relative z-10 flex-1 container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12 pt-24 md:pt-32 pb-16">
        
        {/* Lado Esquerdo - Texto */}
        <div className="relative z-30 flex flex-col items-start text-left max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight font-serif">
            Registro de Marca, Recuperação de Créditos, Execução Fiscal e Isenção de Imposto de Renda.
          </h1>
          
          <p className="mt-8 text-lg text-primary-foreground/80 leading-relaxed max-w-xl">
            Nosso escritório conta com ampla experiência nas áreas de registro de marca, recuperação de créditos e defesas tributárias no geral, oferecendo soluções jurídicas personalizadas para proteger o seu patrimônio.
          </p>
          
          <p className="mt-4 text-sm text-primary-foreground/60">
            Entre em contato e fale conosco agora mesmo.
          </p>

          <a 
            className="mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00E676] text-[#1B1B1B] text-base font-bold rounded tracking-wide uppercase hover:bg-[#00E676]/90 transition-colors" 
            href="https://wa.me/5521966310195" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Fale Conosco Agora no WhatsApp
          </a>
        </div>

        {/* Lado Direito - Advogado e Botão Instagram Flutuante */}
        <div className="flex-shrink-0 w-64 md:w-80 lg:w-96 order-last md:order-none relative z-20">
          
          {/* AQUI ESTÁ O NOVO POSICIONAMENTO DO BOTÃO DO INSTAGRAM */}
          <div className="absolute top-[30px] lg:top-[40px] -left-12 md:-left-16 lg:-left-20 z-40">
            <a 
              href="https://www.instagram.com/calinaadvogados" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 bg-black/40 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-primary-foreground hover:bg-black/50 transition-colors shadow-2xl group"
            >
              {/* Ícone do Instagram */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-primary-foreground group-hover:scale-105 transition-transform"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              <span className="text-sm lg:text-base font-medium">Nos siga no Instagram @calinaadvogados</span>
            </a>
          </div>

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
