import React from 'react';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';
import { ArrowRight, FileText, Newspaper, BookOpen, Mic, Users } from 'lucide-react';

const SectionCard = ({ section, children }) => {
  const handleReadMore = () => {
    toast({
      title: `🚧 This section isn't implemented yet—but don't worry!🚀`
    });
  };

  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex-grow">{children}</div>
      <motion.button
        onClick={handleReadMore}
        className="group flex items-center justify-center gap-2 w-full mt-4 p-3 bg-stone-900 text-white rounded-md font-medium hover:bg-red-700 transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>Explore {section}</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </motion.button>
    </motion.div>
  );
};

const SectionGrid = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-stencil">The Archive</h2>
        <p className="text-stone-600 mt-2 max-w-2xl mx-auto">A living record of dissent, presented with authority but sparking emotion.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <SectionCard section="Signals">
          <div className="newspaper-clipping h-full">
            <div className="flex items-center gap-3 mb-3">
              <Newspaper className="w-6 h-6 text-red-700" />
              <h3 className="text-2xl font-stencil text-stone-800">Signals</h3>
            </div>
            <p className="font-typewriter text-lg mb-4">"URGENT DISPATCH"</p>
            <p className="text-stone-700">Breaking news and real-time updates from the frontlines of activism. Styled like urgent newspaper clippings.</p>
          </div>
        </SectionCard>

        <SectionCard section="Case Files">
          <div className="dossier-card h-full p-6 pt-10">
            <div className="dossier-tab border-orange-600 text-orange-700">Case File</div>
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-6 h-6 text-orange-700" />
              <h3 className="text-2xl font-stencil text-stone-800">Case Files</h3>
            </div>
            <p className="font-sans-bold text-lg mb-4 text-stone-600">"TOP SECRET"</p>
            <p className="text-stone-700">In-depth analyses of movements and events, presented as classified dossier folders.</p>
          </div>
        </SectionCard>

        <SectionCard section="Daughter of Dissent">
          <div className="h-full p-6 bg-purple-100 border-2 border-purple-300 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Mic className="w-6 h-6 text-purple-800" />
              <h3 className="text-2xl font-stencil text-purple-900">Daughter of Dissent</h3>
            </div>
            <p className="font-sans-bold text-lg mb-4 text-purple-700">"HER VOICE, HER STORY"</p>
            <p className="text-purple-800">Personal essays and narratives focusing on feminist resistance and intersectional voices.</p>
          </div>
        </SectionCard>

        <SectionCard section="Protest Archive">
          <div className="dossier-card h-full p-6 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <div className="stamped-text">Archived</div>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="w-6 h-6 text-blue-900" />
              <h3 className="text-2xl font-stencil text-stone-800">Protest Archive</h3>
            </div>
            <p className="font-typewriter text-lg mb-4">"File: #1968-B"</p>
            <p className="text-stone-700">A visual and historical record of protest movements, styled like archive boxes with stamped textures.</p>
          </div>
        </SectionCard>

        <SectionCard section="Manifesto">
          <div className="h-full p-6 bg-stone-800 text-white rounded-lg text-center flex flex-col justify-center">
            <h3 className="text-2xl font-stencil mb-4">Manifesto</h3>
            <p className="font-sans-bold text-lg mb-4 text-red-400">"WE DECLARE..."</p>
            <p className="text-stone-300">Core declarations and theoretical frameworks shaping the future of activism.</p>
          </div>
        </SectionCard>

        <SectionCard section="Dialogue">
          <div className="h-full flex flex-col justify-center">
            <div className="speech-bubble">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-stone-700" />
                <h3 className="text-2xl font-stencil text-stone-800">Dialogue</h3>
              </div>
              <p className="font-sans-bold text-lg mb-4 text-stone-600">"A space for debate..."</p>
              <p className="text-stone-700">Community letters, debates, and conversations, presented as margin notes or speech bubbles.</p>
            </div>
          </div>
        </SectionCard>

      </div>
      <div className="textbook-rule"></div>
    </div>
  );
};

export default SectionGrid;