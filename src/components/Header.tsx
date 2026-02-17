import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
{ label: "Sobre", href: "#sobre" },
{ label: "Áreas de Atuação", href: "#areas" },
{ label: "Contato", href: "https://wa.me/5521966310195" }];


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-dark/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-primary-foreground text-xl md:text-2xl tracking-widest uppercase font-light">CALINA ADVOGADOS ASSOCIADOS
          <span className="hidden sm:inline"></span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.href}
            href={link.href}
            className="text-primary-foreground/80 hover:text-primary-foreground text-sm tracking-widest uppercase transition-colors duration-300">

              {link.label}
            </a>
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary-foreground"
          aria-label="Menu">

          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen &&
      <nav className="md:hidden bg-primary-dark/98 border-t border-primary/20 px-6 py-4 space-y-4">
          {navLinks.map((link) =>
        <a
          key={link.href}
          href={link.href}
          onClick={() => setIsOpen(false)}
          className="block text-primary-foreground/80 hover:text-primary-foreground text-sm tracking-widest uppercase transition-colors">

              {link.label}
            </a>
        )}
        </nav>
      }
    </header>);

};

export default Header;