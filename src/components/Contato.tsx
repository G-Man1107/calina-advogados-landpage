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
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Entre em Contato
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Informações de Contato</h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <p className="text-muted-foreground">Rio de Janeiro, RJ</p>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary mt-1" />
              <p className="text-muted-foreground">(21) 96631-0195</p>
            </div>
            



          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Seu nome" required />
            <Input type="email" placeholder="Seu e-mail" required />
            <Input placeholder="Assunto" required />
            <Textarea placeholder="Sua mensagem" rows={5} required />
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </form>
        </div>
      </div>
    </section>);

};
export default Contato;