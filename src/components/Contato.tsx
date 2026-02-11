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
    <section id="contato" className="py-20 bg-primary-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-light text-primary-foreground tracking-wider uppercase text-center mb-16">
          Contato
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input placeholder="Nome" required className="bg-primary-dark/50 border-primary/30 text-primary-foreground" />
            <Input type="email" placeholder="E-mail" required className="bg-primary-dark/50 border-primary/30 text-primary-foreground" />
            <Input placeholder="Telefone" className="bg-primary-dark/50 border-primary/30 text-primary-foreground" />
            <Textarea placeholder="Mensagem" required rows={5} className="bg-primary-dark/50 border-primary/30 text-primary-foreground" />
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </form>
          <div className="space-y-8 text-primary-foreground/80">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 mt-1 text-primary" />
              <p className="text-sm">Endereço do escritório</p>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 mt-1 text-primary" />
              <p className="text-sm">(00) 0000-0000</p>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 mt-1 text-primary" />
              <p className="text-sm">contato@calina.adv.br</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contato;