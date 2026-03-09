import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import logo from "@/assets/logo-fratelli-milano.png";

const navLinks = [
  { label: "SHOP", href: "#shop" },
  { label: "PER LA TUA ATTIVITÀ", href: "#business" },
  { label: "FORMAZIONE", href: "#formazione" },
  { label: "CHI SIAMO", href: "#chi-siamo" },
  { label: "BLOG", href: "#blog" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img src={logo} alt="Fratelli Milano Italian Coffee" className="h-14 w-auto" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground/70 hover:text-primary text-xs tracking-[0.2em] font-body font-light transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden lg:flex items-center gap-5">
            <button className="text-foreground/60 hover:text-primary transition-colors duration-300">
              <ShoppingCart size={18} strokeWidth={1.5} />
            </button>
            <button className="text-foreground/60 hover:text-primary transition-colors duration-300">
              <User size={18} strokeWidth={1.5} />
            </button>
            <button className="text-foreground/60 hover:text-primary transition-colors duration-300">
              <Search size={18} strokeWidth={1.5} />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground/70"
          >
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-lg border-t border-border/20"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/70 hover:text-primary text-sm tracking-[0.15em] font-body font-light transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
