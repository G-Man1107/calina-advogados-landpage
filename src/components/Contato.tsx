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
    <section id="contato" className="py-24 md:py-32 bg-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-foreground mb-2 font-normal">Contato</h2>
          <div className="w-16 h-px bg-primary mx-auto my-6" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1" strokeWidth={1.5} />
              <div>
                <h4 className="text-foreground font-medium mb-1">Endereço</h4>
                <p className="text-muted-foreground">Seu endereço aqui</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1" strokeWidth={1.5} />
              <div>
                <h4 className="text-foreground font-medium mb-1">Telefone</h4>
                <p className="text-muted-foreground">(00) 00000-0000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-1" strokeWidth={1.5} />
              <div>
                <h4 className="text-foreground font-medium mb-1">E-mail</h4>
                <p className="text-muted-foreground">contato@email.com</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Nome" required className="bg-background border-border" />
            <Input placeholder="E-mail" type="email" required className="bg-background border-border" />
            <Input placeholder="Telefone" className="bg-background border-border" />
            <Textarea placeholder="Mensagem" required className="bg-background border-border min-h-[120px]" />
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