import { BookMarked, TrendingUp, Landmark, ShieldCheck } from "lucide-react";

const areas = [
  {
    icon: BookMarked,
    titulo: "Registro de Marca",
    descricao: "Proteção da sua propriedade intelectual com registro junto ao INPI, garantindo exclusividade e segurança jurídica para sua marca no mercado."
  },
  {
    icon: TrendingUp,
    titulo: "Recuperação de Créditos",
    descricao: "Estratégias jurídicas eficientes para a recuperação de valores devidos, atuando de forma extrajudicial e judicial para restabelecer seus direitos financeiros."
  },
  {
    icon: Landmark,
    titulo: "Execução Fiscal",
    descricao: "Defesa estratégica em processos de execução fiscal, protegendo seu patrimônio contra cobranças indevidas da Fazenda Pública com atuação técnica e especializada."
  },
  {
    icon: ShieldCheck,
    titulo: "Isenção e Restituição de Imposto de Renda",
    descricao: "Assessoria jurídica para obtenção de isenção de imposto de renda em casos previstos em lei, como doenças graves, garantindo seus direitos tributários."
  }
];

const AreasAtuacao = () => {
  return (
    // Sem margens negativas (-mt). Ela começa exatamente onde o vermelho termina.
    // pt-[160px] garante que o título desce o suficiente para não bater nos 120px da foto que vazou.
    <section id="areas" className="relative z-10 bg-accent pt-[100px] lg:pt-[160px] pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative z-20">
          <h2 className="text-4xl text-foreground mb-2 mt-0 font-normal md:text-5xl">Áreas de Atuação</h2>
          <div className="w-16 h-px bg-primary mx-auto my-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative z-20">
          {areas.map((area) => (
            <div key={area.titulo} className="bg-background border border-border p-8 hover:border-primary/40 transition-colors duration-300 group">
              <area.icon className="w-8 h-8 text-primary mb-6" strokeWidth={1.2} />
              <h3 className="text-xl text-foreground mb-4">{area.titulo}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">{area.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasAtuacao;
