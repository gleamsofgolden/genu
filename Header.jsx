import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = ['Signals', 'Daughter of Dissent', 'Case Files', 'Voices'];

  const handleFeatureClick = (feature) => {
    toast({
      title: `🚧 The "${feature}" page isn't built yet!`,
      description: " 🚀",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-brand-black/80 backdrop-blur-sm border-b border-brand-charcoal' : 'bg-transparent'}`}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-anton text-4xl tracking-wider text-brand-cream cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>GEN UPRISING</h1>
          </motion.div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => (
              <button key={item} onClick={() => handleFeatureClick(item)} className="font-anton text-base text-brand-cream tracking-widest strike-through-red transition-colors">
                {item}
              </button>
            ))}
            <Button variant="outline" onClick={() => handleFeatureClick('Contribute')}>Contribute</Button>
            <Button onClick={() => handleFeatureClick('Donate')} className="bg-brand-red text-brand-cream hover:bg-brand-red/90">Donate</Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-brand-cream hover:bg-brand-cream/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </Button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-brand-black border-t-2 border-b-2 border-brand-charcoal"
          >
            <nav className="flex flex-col items-center space-y-6 py-8">
              {navItems.map(item => (
                <button key={item} onClick={() => handleFeatureClick(item)} className="font-anton text-3xl text-brand-cream tracking-widest">
                  {item}
                </button>
              ))}
              <Button variant="outline" size="lg" onClick={() => handleFeatureClick('Contribute')} className="w-4/5">Contribute</Button>
              <Button size="lg" onClick={() => handleFeatureClick('Donate')} className="bg-brand-red text-brand-cream hover:bg-brand-red/90 w-4/5">Donate</Button>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;