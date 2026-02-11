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
    <section id="contato" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-foreground mb-2 font-normal">Contato</h2>
          <div className="w-16 h-px bg-primary mx-auto my-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input placeholder="Nome" required />
            <Input type="email" placeholder="E-mail" required />
            <Input type="tel" placeholder="Telefone" />
            <Textarea placeholder="Mensagem" rows={5} required />
            <Button type="submit" disabled={loading} className="w-full tracking-widest uppercase">
              {loading ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </form>

          <div className="space-y-8 flex flex-col justify-center">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1" strokeWidth={1.2} />
              <p className="text-muted-foreground">Endereço do escritório</p>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1" strokeWidth={1.2} />
              <p className="text-muted-foreground">(00) 00000-0000</p>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-1" strokeWidth={1.2} />
              <p className="text-muted-foreground">contato@calina.adv.br</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contato;