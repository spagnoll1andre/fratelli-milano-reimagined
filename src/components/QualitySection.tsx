import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import coffeeBeans from "@/assets/coffee-beans.jpg";

const QualitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-10">
        <img src={coffeeBeans} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-background/95" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative line */}
          <div className="w-16 h-px line-gold mx-auto mb-12" />

          <h2 className="font-display text-3xl md:text-5xl font-light mb-8 leading-tight">
            Ogni chicco ha una storia.
            <br />
            <span className="text-gold-gradient">La nostra inizia dalla qualità.</span>
          </h2>

          <p className="text-foreground/45 font-body font-extralight text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            Rispettiamo la materia prima in tutte le sue fasi, in un viaggio
            che comincia con la{" "}
            <span className="text-primary/80">scelta dei chicchi migliori</span>.
            Trasformiamo il caffè in un'esperienza unica, frutto dell'amore per l'eccellenza.
          </p>

          <a
            href="#chi-siamo"
            className="inline-flex items-center gap-3 bg-gold-gradient px-8 py-4 text-primary-foreground text-xs tracking-[0.2em] font-body font-medium uppercase hover:opacity-90 transition-opacity duration-300"
          >
            Assaggia la differenza
            <ArrowRight size={16} strokeWidth={1.5} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default QualitySection;
