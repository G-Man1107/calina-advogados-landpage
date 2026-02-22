import { BookMarked, TrendingUp, Landmark, ShieldCheck } from "lucide-react";
const areas = [{
  icon: BookMarked,
  titulo: "Registro de Marca",
  descricao: "Proteção da sua propriedade intelectual com registro junto ao INPI, garantindo exclusividade e segurança jurídica para sua marca no mercado."
}, {
  icon: TrendingUp,
  titulo: "Recuperação de Créditos",
  descricao: "Estratégias jurídicas eficientes para a recuperação de valores devidos, atuando de forma extrajudicial e judicial para restabelecer seus direitos financeiros."
}, {
  icon: Landmark,
  titulo: "Execução Fiscal",
  descricao: "Defesa estratégica em processos de execução fiscal, protegendo seu patrimônio contra cobranças indevidas da Fazenda Pública com atuação técnica e especializada."
}, {
  icon: ShieldCheck,
  titulo: "Isenção e Restituição de Imposto de Renda",
  descricao: "Assessoria jurídica para obtenção de isenção de imposto de renda em casos previstos em lei, como doenças graves, garantindo seus direitos tributários."
}];
const AreasAtuacao = () => {
  return <section id="areas" className="relative -mt-16 md:-mt-[80px] lg:-mt-[110px] pt-16 md:pt-[90px] lg:pt-[90px] pb-24 bg-accent z-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-foreground mb-2 font-normal my-0 md:text-3xl">Áreas de Atuação</h2>
          <div className="w-16 h-px bg-primary mx-auto my-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {areas.map((area) => <div key={area.titulo} className="bg-background border border-border p-8 hover:border-primary/40 transition-colors duration-300 group">
              <area.icon className="w-8 h-8 text-primary mb-6" strokeWidth={1.2} />
              <h3 className="text-xl text-foreground mb-4">{area.titulo}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">{area.descricao}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default AreasAtuacao;
