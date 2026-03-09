import logo from "@/assets/logo-fratelli-milano.png";

const footerLinks = [
  {
    title: "Shop",
    links: ["Blend N.1", "Blend N.2", "Blend N.3", "Blend N.4", "Deca"],
  },
  {
    title: "Azienda",
    links: ["Chi Siamo", "La Nostra Storia", "Formazione", "Blog"],
  },
  {
    title: "Supporto",
    links: ["Contatti", "Spedizioni", "Resi", "FAQ"],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logo} alt="Fratelli Milano" className="h-12 w-auto mb-6" />
            <p className="text-foreground/35 font-body font-extralight text-sm leading-relaxed max-w-sm">
              La nostra firma, sul gusto italiano del caffè.
              Selezioniamo, tostiamo e creiamo blend che raccontano il vero espresso italiano.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs tracking-[0.2em] font-body font-medium text-foreground/60 mb-6 uppercase">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-foreground/30 hover:text-primary text-sm font-body font-extralight transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/20 text-xs font-body font-extralight">
            © 2024 Fratelli Milano Italian Coffee. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-foreground/20 hover:text-primary text-xs font-body font-extralight transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/20 hover:text-primary text-xs font-body font-extralight transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
