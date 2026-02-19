import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contato = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      (e.target as HTMLFormElement).reset();
      setLoading(false);
    }, 800);
  };

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl text-foreground text-center mb-4 font-light tracking-wide">
          Entre em Contato
        </h2>
        <div className="w-16 h-px bg-primary mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              Entre em contato conosco para agendar uma consulta ou tirar dúvidas sobre nossos serviços jurídicos.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <span className="text-foreground/80 text-sm">Rio de Janeiro, RJ</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <a href="https://wa.me/5521966310195" className="text-foreground/80 text-sm hover:text-primary transition-colors">
                  (21) 96631-0195
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary flex-shrink-0" size={18} />
                <a href="mailto:contato@calinaadvogados.com.br" className="text-foreground/80 text-sm hover:text-primary transition-colors">
                  contato@calinaadvogados.com.br
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Nome completo" required className="bg-card border-border" />
            <Input type="email" placeholder="E-mail" required className="bg-card border-border" />
            <Input type="tel" placeholder="Telefone" className="bg-card border-border" />
            <Textarea placeholder="Mensagem" rows={4} required className="bg-card border-border resize-none" />
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 tracking-widest uppercase text-sm py-6"
            >
              {loading ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contato;
