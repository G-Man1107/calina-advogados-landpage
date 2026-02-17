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
    <section id="contato" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl text-foreground mb-2 font-normal py-[20px] md:text-3xl">Entre em Contato</h2>
          <div className="w-16 h-px bg-primary mx-auto my-6" />
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1" strokeWidth={1.2} />
              <div>
                <h3 className="text-foreground font-medium mb-1">Endereço</h3>
                <p className="text-muted-foreground">Rio de Janeiro, RJ</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary mt-1" strokeWidth={1.2} />
              <div>
                <h3 className="text-foreground font-medium mb-1">Telefone</h3>
                <p className="text-muted-foreground">(21) 96631-0195</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary mt-1" strokeWidth={1.2} />
              <div>
                <h3 className="text-foreground font-medium mb-1">E-mail</h3>
                <p className="text-muted-foreground">contato@calinaadvogados.com.br</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Seu nome" required />
            <Input type="email" placeholder="Seu e-mail" required />
            <Input type="tel" placeholder="Seu telefone" />
            <Textarea placeholder="Sua mensagem" rows={4} required />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contato;