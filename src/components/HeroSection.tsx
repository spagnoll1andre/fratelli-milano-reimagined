import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroCoffee from "@/assets/hero-coffee.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroCoffee}
          alt="Premium Italian Coffee"
          className="w-full h-full object-cover opacity-40" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-primary/80 text-xs tracking-[0.3em] font-body font-light mb-6 uppercase">
            
            Fratelli Milano — Italian Coffee
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-jakarta text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8">
            
            <span className="text-gold-gradient font-normal">L'arte</span>
            <br />
            <span className="text-foreground font-normal">del caffè</span>
            <br />
            <span className="text-foreground/60 text-4xl md:text-5xl lg:text-6xl italic font-light">
              italiano
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-foreground/50 font-body font-extralight text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
            
            Ottenuto dai migliori chicchi di caffè e tostato con cura artigianale, senza compromessi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4">
            
            <a
              href="#shop"
              className="inline-flex items-center gap-3 bg-gold-gradient px-8 py-4 text-primary-foreground text-xs tracking-[0.2em] font-body font-medium uppercase hover:opacity-90 transition-opacity duration-300">
              
              Scoprili tutti
              <ArrowRight size={16} strokeWidth={1.5} />
            </a>
            <a
              href="#chi-siamo"
              className="inline-flex items-center gap-3 border border-primary/30 px-8 py-4 text-primary/80 text-xs tracking-[0.2em] font-body font-light uppercase hover:border-primary/60 hover:text-primary transition-all duration-300">
              
              La nostra storia
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        
        <span className="text-muted-foreground text-[10px] tracking-[0.3em] font-body uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
        
      </motion.div>
    </section>);

};

export default HeroSection;