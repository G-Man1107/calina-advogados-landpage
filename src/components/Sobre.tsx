import { Scale, Shield, Award } from "lucide-react";
const valores = [{
  icon: Scale,
  titulo: "Ética",
  descricao: "Compromisso absoluto com a conduta ética e transparente em todas as relações."
}, {
  icon: Shield,
  titulo: "Comprometimento",
  descricao: "Dedicação integral a cada caso, tratando cada cliente com a devida atenção."
}, {
  icon: Award,
  titulo: "Excelência",
  descricao: "Busca contínua pela qualidade e atualização jurídica para os melhores resultados."
}];
const Sobre = () => {
  return <section id="sobre" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl text-foreground mb-2 font-normal md:text-3xl">Sobre o Escritório</h2>
          <div className="w-16 h-px bg-primary mx-auto my-6" />
          <p className="text-muted-foreground leading-relaxed text-xl">
            O escritório Calina Advogados Associados atua com seriedade e dedicação
            na prestação de serviços jurídicos de alta qualidade. Com uma equipe
            experiente e comprometida, oferecemos soluções estratégicas e
            personalizadas para proteger os interesses de nossos clientes, sempre
            pautados pela ética profissional e pelo rigor técnico.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {valores.map((valor) => <div key={valor.titulo} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-primary/30 group-hover:border-primary transition-colors duration-300">
                <valor.icon className="w-7 h-7 text-primary" strokeWidth={1.2} />
              </div>
              <h3 className="text-xl text-foreground mb-3">{valor.titulo}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">{valor.descricao}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Sobre;
