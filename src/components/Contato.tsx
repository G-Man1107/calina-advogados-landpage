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
      toast({ title: "Mensagem enviada!", description: "Entraremos em contato em breve." });
      (e.target as HTMLFormElement).reset();
      setLoading(false);
    }, 800);
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-foreground mb-2">Contato</h2>
          <div className="w-16 h-px bg-primary mx-auto my-6" />
          <p className="text-muted-foreground text-lg">Entre em contato para uma consulta</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input placeholder="Nome completo" required className="bg-accent border-border" />
            <Input type="email" placeholder="E-mail" required className="bg-accent border-border" />
            <Input type="tel" placeholder="Telefone" className="bg-accent border-border" />
            <Textarea placeholder="Sua mensagem" rows={5} required className="bg-accent border-border" />
            <Button
              type="submit"
              disabled={loading}
              className="w-full tracking-widest uppercase text-sm py-6"
            >
              {loading ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </form>

          {/* Info */}
          <div className="space-y-8 flex flex-col justify-center">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="text-foreground font-medium mb-1">Endereço</h4>
                <p className="text-muted-foreground text-sm">Rua Exemplo, 123 — Centro<br />Cidade — UF, 00000-000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="text-foreground font-medium mb-1">Telefone</h4>
                <p className="text-muted-foreground text-sm">(00) 0000-0000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="text-foreground font-medium mb-1">E-mail</h4>
                <p className="text-muted-foreground text-sm">contato@calinaadvogados.com.br</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
