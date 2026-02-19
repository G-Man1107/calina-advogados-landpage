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
    <section id="contato" className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-wide">Entre em Contato</h2>
          <div className="mt-3 mx-auto w-16 h-px bg-primary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-foreground font-medium">Endereço</p>
                <p className="text-muted-foreground text-sm mt-1">Rio de Janeiro, RJ</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-foreground font-medium">Telefone / WhatsApp</p>
                <p className="text-muted-foreground text-sm mt-1">+55 21 96631-0195</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-foreground font-medium">E-mail</p>
                <p className="text-muted-foreground text-sm mt-1">contato@calinaadvogados.com.br</p>
              </div>
            </div>

            {/* WhatsApp CTA - desktop only */}
            <a
              href="https://wa.me/5521966310195"
              className="hidden md:inline-flex items-center gap-2 bg-[#25d466] text-white px-8 py-4 rounded tracking-widest uppercase text-sm transition-opacity hover:opacity-90"
            >
              Fale Agora Conosco no WhatsApp
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input placeholder="Seu nome" required className="bg-muted border-border" />
            <Input type="email" placeholder="Seu e-mail" required className="bg-muted border-border" />
            <Input placeholder="Seu telefone" className="bg-muted border-border" />
            <Textarea placeholder="Sua mensagem" rows={5} required className="bg-muted border-border" />
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