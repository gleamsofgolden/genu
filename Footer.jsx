import React from 'react';
import { Twitter, Instagram, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

const Footer = () => {
  const handleSocialClick = (platform) => {
    toast({
      title: `🚧 ${platform} link isn't active—🚀`
    });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Subscription isn't implemented yet!",
      description: "But don't worry!  🚀",
    });
  };

  return (
    <footer className="bg-brand-black border-t-2 border-brand-charcoal text-brand-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h3 className="font-anton text-3xl mb-4">STAY IN THE FIGHT</h3>
            <p className="text-brand-cream/70 mb-4">Get the latest signals, actions, and case files straight to your inbox.</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input type="email" placeholder="Your Email" className="bg-brand-charcoal border-brand-charcoal text-brand-cream placeholder:text-brand-cream/50" required />
              <Button type="submit" className="bg-brand-red text-brand-cream hover:bg-brand-red/90">
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
          <div className="lg:col-span-2 lg:text-right">
            <h3 className="font-anton text-3xl mb-4">WHY WE EXIST</h3>
            <p className="text-brand-cream/70 mb-8">
              Gen Uprising is a youth-led movement publishing investigative case files, protest guides, and first-person stories. We don’t just report on the future, we’re building it. We don’t wait. We rise.
            </p>
            <div className="flex justify-start lg:justify-end items-center space-x-6">
              <button onClick={() => handleSocialClick('Donate')} className="font-mono text-sm uppercase hover:text-brand-red transition-colors">Donate</button>
              <button onClick={() => handleSocialClick('Newsletter')} className="font-mono text-sm uppercase hover:text-brand-red transition-colors">Newsletter</button>
              <button onClick={() => handleSocialClick('Twitter')} className="text-brand-cream/70 hover:text-brand-red transition-colors">
                <Twitter className="w-6 h-6" />
              </button>
              <button onClick={() => handleSocialClick('Instagram')} className="text-brand-cream/70 hover:text-brand-red transition-colors">
                <Instagram className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-brand-charcoal pt-8 mt-16 text-center">
          <p className="text-brand-cream/50 text-xs font-mono">
            © 2025 GEN UPRISING. ALL POWER TO THE PEOPLE.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;