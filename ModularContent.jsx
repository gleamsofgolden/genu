import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { ArrowRight } from 'lucide-react';

const ModularCard = ({ tag, title, description, cta, image, alt, onCtaClick }) => {
  return (
    <motion.div 
      className="bg-brand-charcoal/50 border border-brand-charcoal flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative aspect-video">
        <img  class="w-full h-full object-cover" alt={alt} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
        <div className="absolute top-4 left-4 bg-brand-red text-brand-cream px-3 py-1 font-mono text-xs uppercase">{tag}</div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-anton text-3xl text-brand-cream mb-2">{title}</h3>
        <p className="text-brand-cream/80 mb-6 flex-grow">{description}</p>
        <Button onClick={onCtaClick} variant="outline" className="w-full mt-auto group text-brand-cream border-brand-cream/50 hover:bg-brand-cream hover:text-brand-black font-anton text-base tracking-wider">
          {cta} <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </motion.div>
  );
};

const ModularContent = () => {
  const handleCtaClick = (feature) => {
    toast({
      title: `🚧 The "${feature}" feature isn't implemented yet!`,
      description:  🚀",
    });
  };

  return (
    <section className="bg-brand-black py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ModularCard
            tag="Now"
            title="Digital Picket Lines Go Global"
            description="A new wave of digital activism is putting pressure on corporations worldwide. Here's the latest from the frontlines."
            cta="Read The Signal"
            image="Gritty duotone photo of a person on a laptop with code overlay"
            alt="Gritty duotone photo of a person on a laptop with code overlay"
            onCtaClick={() => handleCtaClick('Latest Signal')}
          />
          <ModularCard
            tag="Case File of the Week"
            title="The Student Climate Strike"
            description="An in-depth analysis of how Fridays for Future mobilized millions of young people across 150 countries."
            cta="Open The File"
            image="Manila folder texture with a 'CLASSIFIED' stamp"
            alt="Manila folder texture with a 'CLASSIFIED' stamp"
            onCtaClick={() => handleCtaClick('Case File')}
          />
          <ModularCard
            tag="Get Involved"
            title="Submit Your Voice"
            description="Have a story, a report, or a piece of art to share? We want to hear from you. Your voice is a weapon."
            cta="Contribute Now"
            image="Close-up of a vintage typewriter with a piece of paper"
            alt="Close-up of a vintage typewriter with a piece of paper"
            onCtaClick={() => handleCtaClick('Contribute')}
          />
        </div>
      </div>
    </section>
  );
};

export default ModularContent;