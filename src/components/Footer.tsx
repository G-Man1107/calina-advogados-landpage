const Footer = () => {
  return (
    <footer className="bg-primary-dark py-12 border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-primary-foreground/60 text-sm tracking-wider uppercase">
            Calina Advogados Associados
          </p>
          <nav className="flex gap-8">
            {["#sobre", "#areas", "https://wa.me/5521966310195"].map((href, i) => (
              <a
                key={href}
                href={href}
                className="text-primary-foreground/50 hover:text-primary-foreground/80 text-xs tracking-widest uppercase transition-colors"
              >
                {["Sobre", "Áreas", "Contato"][i]}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 pt-6 border-t border-primary/10 text-center">
          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} Calina Advogados Associados. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
