import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Hero = () => {
  const handleCTA = (cta) => {
    toast({
      title: `🚧 The "${cta}" feature isn't implemented yet!`,
      description: "🚀",
    });
  };

  return (
    <section className="relative min-h-[700px] w-full flex items-center bg-brand-black text-brand-cream overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          class="w-full h-full object-cover opacity-40"
          alt="Duotone black and blood-red halftone photo of young people from behind, fists and handmade signs visible"
         src="https://images.unsplash.com/photo-1591817414324-78965f740086" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/70 to-transparent"></div>
        <div className="photocopy-grain"></div>
      </div>
      
      <motion.div 
        className="absolute top-1/4 right-10 md:right-20 font-anton text-5xl md:text-7xl text-brand-red border-4 border-brand-red p-2 md:p-4 -rotate-10 animate-stamp-in"
      >
        UPRISING
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-anton text-6xl md:text-7xl lg:text-8xl text-brand-cream leading-none tracking-tight">
            WE'RE NOT WAITING.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-cream/80 max-w-lg">
            Young people taking systems apart to build something better.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button onClick={() => handleCTA('Join Action')} size="lg" className="bg-brand-red text-brand-cream hover:bg-brand-red/90 font-anton text-lg tracking-wider">
              JOIN THE NEXT ACTION
            </Button>
            <Button onClick={() => handleCTA('Read Signals')} size="lg" variant="outline" className="text-brand-cream border-brand-cream/50 hover:bg-brand-cream hover:text-brand-black font-anton text-lg tracking-wider">
              READ THE LATEST SIGNAL
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;