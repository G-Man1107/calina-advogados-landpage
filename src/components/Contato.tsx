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
        description: "Entraremos em contato em breve."
      });
      (e.target as HTMLFormElement).reset();
      setLoading(false);
    }, 800);
  };

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-foreground font-light tracking-widest uppercase text-center mb-4">
          Entre em Contato
        </h2>
        <div className="w-16 h-px bg-primary mx-auto mb-16" />

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-foreground font-light text-sm tracking-wider uppercase mb-1">Endereço</p>
                <p className="text-muted-foreground text-sm leading-relaxed">Rio de Janeiro, RJ</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-foreground font-light text-sm tracking-wider uppercase mb-1">Telefone / WhatsApp</p>
                <a href="https://wa.me/5521966310195" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  +55 21 96631-0195
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-foreground font-light text-sm tracking-wider uppercase mb-1">E-mail</p>
                <p className="text-muted-foreground text-sm">contato@calinaadvogados.com.br</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Nome" required className="bg-card border-border" />
            <Input placeholder="E-mail" type="email" required className="bg-card border-border" />
            <Input placeholder="Telefone" className="bg-card border-border" />
            <Textarea placeholder="Mensagem" required rows={5} className="bg-card border-border resize-none" />
            <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground tracking-widest uppercase">
              {loading ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contato;
