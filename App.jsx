import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ModularContent from '@/components/ModularContent';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-cream">
      <Helmet>
        <title>Gen Uprising — Youth Action, Investigations, & Voices</title>
        <meta name="description" content="A youth movement publishing investigative case files, protest guides, and first-person stories. We don’t wait. We rise." />
        <meta property="og:title" content="Gen Uprising — Youth Action, Investigations, & Voices" />
        <meta property="og:description" content="A youth movement publishing investigative case files, protest guides, and first-person stories. We don’t wait. We rise." />
      </Helmet>
      
      <Header />
      
      <main>
        <Hero />
        <ModularContent />
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;