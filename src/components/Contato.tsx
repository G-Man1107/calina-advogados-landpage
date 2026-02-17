import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const Contato = () => {
  const {
    toast
  } = useToast();
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
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase text-primary-foreground mb-12 text-center">
          Contato
        </h2>
        <div className="max-w-2xl mx-auto grid gap-8">
          <div className="flex flex-col gap-4 text-primary-foreground/80">
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-primary" />
              <span className="text-sm">Endereço do escritório</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-primary" />
              <span className="text-sm">(00) 0000-0000</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-primary" />
              <span className="text-sm">contato@calina.adv.br</span>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <Input placeholder="Nome" required className="bg-primary-dark/50 border-primary/20 text-primary-foreground" />
            <Input type="email" placeholder="E-mail" required className="bg-primary-dark/50 border-primary/20 text-primary-foreground" />
            <Textarea placeholder="Mensagem" required className="bg-primary-dark/50 border-primary/20 text-primary-foreground min-h-[120px]" />
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contato;