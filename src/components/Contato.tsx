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
    <section id="contato" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-12">
          Contato
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-primary mt-1" />
              <p className="text-muted-foreground">Rio de Janeiro, RJ</p>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-primary mt-1" />
              <p className="text-muted-foreground">(21) 96631-0195</p>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-primary mt-1" />
              <p className="text-muted-foreground">contato@calinaadvogados.com</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Nome" required />
            <Input type="email" placeholder="E-mail" required />
            <Textarea placeholder="Mensagem" rows={4} required />
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Enviando..." : "Enviar mensagem"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contato;