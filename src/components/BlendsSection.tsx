import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import badge1 from "@/assets/badge-blend1.jpg";
import badge2 from "@/assets/badge-blend2.jpg";
import badge3 from "@/assets/badge-blend3.jpg";
import badge4 from "@/assets/badge-blend4.jpg";
import badgeDeca from "@/assets/badge-deca.jpg";

const blends = [
  {
    name: "Blend N.1",
    badge: badge1,
    color: "hsl(25, 90%, 55%)",
    description: "Dolce e cremoso, con sentori di nocciola tostata e cioccolato fondente",
    origin: "Brasile · Vietnam",
    price: "8,50 €",
  },
  {
    name: "Blend N.2",
    badge: badge2,
    color: "hsl(140, 70%, 35%)",
    description: "Equilibrato e aromatico, con note di frutta secca e caramello",
    origin: "Colombia · Etiopia",
    price: "9,00 €",
  },
  {
    name: "Blend N.3",
    badge: badge3,
    color: "hsl(345, 75%, 45%)",
    description: "Intenso e corposo, con un retrogusto di spezie e cacao amaro",
    origin: "India · Guatemala",
    price: "9,50 €",
  },
  {
    name: "Blend N.4",
    badge: badge4,
    color: "hsl(40, 80%, 50%)",
    description: "Raffinato e vellutato, con sentori di miele d'acacia e mandorla",
    origin: "Brasile · Colombia",
    price: "10,00 €",
  },
  {
    name: "Deca",
    badge: badgeDeca,
    color: "hsl(200, 80%, 50%)",
    description: "Tutto il gusto senza caffeina, dolce e rotondo con note di cioccolato al latte",
    origin: "Messico · Brasile",
    price: "10,50 €",
  },
];

const parsePrice = (priceStr: string) =>
  parseFloat(priceStr.replace(".", "").replace(",", ".").replace(/[^\d.]/g, ""));

const BlendsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { addItem } = useCart();

  return (
    <section ref={ref} id="shop" className="py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary/60 text-xs tracking-[0.3em] font-body font-light mb-4 uppercase">
            Le nostre miscele
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-light">
            Il caffè perfetto,
            <br />
            <span className="italic text-foreground/60">nel formato che preferisci</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blends.map((blend, i) => (
            <motion.div
              key={blend.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/30 p-8 hover:border-primary/30 transition-all duration-500 cursor-pointer"
            >
              {/* Badge */}
              <div className="flex justify-center mb-8">
                <div className="relative w-32 h-32">
                  <img
                    src={blend.badge}
                    alt={blend.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="font-display text-2xl font-light mb-2">{blend.name}</h3>
                <p className="text-muted-foreground text-xs tracking-[0.15em] font-body mb-4 uppercase">
                  {blend.origin}
                </p>
                <p className="text-foreground/45 font-body font-extralight text-sm leading-relaxed mb-6">
                  {blend.description}
                </p>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-primary font-display text-xl">{blend.price}</span>
                  <button
                    onClick={() => addItem({
                      id: blend.name.toLowerCase().replace(/\s+/g, "-"),
                      name: blend.name,
                      price: parsePrice(blend.price),
                      image: blend.badge,
                      origin: blend.origin,
                    })}
                    className="flex items-center gap-2 text-xs tracking-[0.15em] font-body font-light text-foreground/50 hover:text-primary border-b border-foreground/20 hover:border-primary pb-0.5 transition-all duration-300 uppercase"
                  >
                    <ShoppingCart size={12} />
                    Aggiungi
                  </button>
                </div>
              </div>

              {/* Colored accent line at top */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: blend.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlendsSection;
