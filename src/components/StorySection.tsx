import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import coffeeStory from "@/assets/coffee-story.jpg";
import coffeeEspresso from "@/assets/coffee-espresso.jpg";

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="chi-siamo" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* First block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <p className="text-primary/60 text-xs tracking-[0.3em] font-body font-light mb-6 uppercase">
              La nostra storia
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light mb-8 leading-tight">
              Non è solo caffè.
              <br />
              <span className="italic text-foreground/60">È un'arte, una tradizione.</span>
            </h2>
            <p className="text-foreground/40 font-body font-extralight text-base leading-relaxed mb-8">
              Un buon caffè non nasce per caso. Selezioniamo solo le migliori origini,
              tostiamo con metodo artigianale e creiamo blend che raccontano il vero gusto italiano.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 text-primary/80 text-xs tracking-[0.2em] font-body font-light uppercase hover:text-primary transition-colors duration-300"
            >
              Scopri come nasce il nostro caffè
              <ArrowRight size={14} strokeWidth={1.5} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={coffeeStory}
                alt="Torrefazione artigianale"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Second block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={coffeeEspresso}
                alt="Espresso perfetto"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-primary/60 text-xs tracking-[0.3em] font-body font-light mb-6 uppercase">
              Per la tua attività
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light mb-8 leading-tight">
              Il partner giusto
              <br />
              <span className="italic text-foreground/60">per il tuo business.</span>
            </h2>
            <p className="text-foreground/40 font-body font-extralight text-base leading-relaxed mb-6">
              Non solo caffè ma anche macchine professionali, formazione specializzata e assistenza h24.
              Siamo il partner giusto per la tua attività.
            </p>

            {/* Stats */}
            <div className="flex gap-12 mb-8">
              <div>
                <span className="font-display text-4xl text-primary">450+</span>
                <p className="text-muted-foreground text-xs tracking-[0.1em] font-body mt-1">Clienti a Roma</p>
              </div>
              <div>
                <span className="font-display text-4xl text-primary">5</span>
                <p className="text-muted-foreground text-xs tracking-[0.1em] font-body mt-1">Blend unici</p>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-3 text-primary/80 text-xs tracking-[0.2em] font-body font-light uppercase hover:text-primary transition-colors duration-300"
            >
              Scopri le nostre soluzioni
              <ArrowRight size={14} strokeWidth={1.5} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
