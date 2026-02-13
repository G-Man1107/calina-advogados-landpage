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
    <section id="contato" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Contato</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Endereço</h3>
                <p className="text-muted-foreground">Rio de Janeiro, RJ</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Telefone</h3>
                <p className="text-muted-foreground">(21) 96631-0195</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">E-mail</h3>
                <p className="text-muted-foreground">contato@calina.adv.br</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Seu nome" required />
            <Input type="email" placeholder="Seu e-mail" required />
            <Input placeholder="Assunto" required />
            <Textarea placeholder="Sua mensagem" rows={4} required />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Enviando..." : "Enviar mensagem"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contato;