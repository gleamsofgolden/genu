
import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ id, bgColor, children, className = '' }) => {
  return (
    <section id={id} className={`relative min-h-screen w-full flex items-center justify-center p-8 ${className}`} style={{ backgroundColor: bgColor }}>
      <div className="relative z-10 text-center text-white w-full max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

const SectionTakeover = () => {
  return (
    <div>
      <SectionWrapper id="signals" bgColor="#000000" className="py-24">
        <div className="absolute inset-0 bg-black bg-cover bg-center burned-edge opacity-20" style={{backgroundImage: `url(https://images.unsplash.com/photo-1599598850574-e6b8077736d6?q=80&w=2070&auto=format&fit=crop)`}}></div>
        <motion.h2 
          className="font-anton text-8xl md:text-9xl lg:text-[12rem] text-white opacity-80 mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          SIGNALS
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div className="border-2 border-white/50 p-6 text-left" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.2}} viewport={{once: true}}>
                <p className="font-anton text-red-500 text-2xl mb-2">2025.09.07</p>
                <h3 className="font-anton text-4xl leading-none strike-through-red cursor-pointer">DIGITAL PICKET LINES GO GLOBAL</h3>
            </motion.div>
            <motion.div className="border-2 border-white/50 p-6 text-left" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.4}} viewport={{once: true}}>
                <p className="font-anton text-red-500 text-2xl mb-2">2025.09.06</p>
                <h3 className="font-anton text-4xl leading-none strike-through-red cursor-pointer">CLIMATE STRIKES SHUT DOWN 12 CITIES</h3>
            </motion.div>
            <motion.div className="border-2 border-white/50 p-6 text-left" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.6}} viewport={{once: true}}>
                <p className="font-anton text-red-500 text-2xl mb-2">2025.09.05</p>
                <h3 className="font-anton text-4xl leading-none strike-through-red cursor-pointer">NEW LEGISLATION CHALLENGED IN STREETS</h3>
            </motion.div>
        </div>
      </SectionWrapper>
      
      <SectionWrapper id="case-files" bgColor="#0a0a0a">
        <div className="text-left w-full grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
            <motion.div 
                className="md:col-span-3 space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="font-anton text-8xl md:text-9xl lg:text-[12rem] text-white/90 leading-none">CASE FILES</h2>
                <p className="font-typewriter text-2xl text-white/70">
                    Declassified records of resistance. These are the truths they tried to hide. <span className="blackout-text">Examine the evidence.</span> Understand the struggle. The following document contains sensitive information.
                </p>
            </motion.div>
            <motion.div
                className="md:col-span-2 border-4 border-white/80 p-8 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
            >
                <div className="absolute top-4 right-4 font-anton text-3xl text-red-600 -rotate-12 border-2 border-red-600 p-2">CONFIDENTIAL</div>
                <h3 className="font-typewriter text-3xl">FILE: #CS-00781</h3>
                <p className="font-typewriter text-xl my-4">SUBJECT: <span className="blackout-text">Corporate Collusion & Climate Crisis</span></p>
                <p className="font-typewriter text-xl">STATUS: <span className="text-red-500">LEAKED</span></p>
            </motion.div>
        </div>
      </SectionWrapper>
      
      <SectionWrapper id="daughter-of-dissent" bgColor="#5A0FC8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#B00020]/50 via-transparent to-black/50"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: `url(https://images.unsplash.com/photo-1582210275595-24523c754a59?q=80&w=1974&auto=format&fit=crop)`}}></div>
        <motion.h2 
            className="font-anton text-8xl md:text-9xl lg:text-[10rem] xl:text-[14rem] text-white leading-none -rotate-6"
            initial={{ opacity: 0, scale: 1.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
        >
            NO MORE SILENCE
        </motion.h2>
        <motion.p 
            className="font-anton text-4xl md:text-6xl text-white uppercase mt-8 tracking-widest"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            A Section for Feminist Fire.
        </motion.p>
      </SectionWrapper>
      
      <SectionWrapper id="protest-archive" bgColor="#000000">
        <div className="absolute inset-0 opacity-40 burned-edge bg-cover bg-center" style={{backgroundImage: `url(https://images.unsplash.com/photo-1552742030-fb3581fae9d8?q=80&w=2072&auto=format&fit=crop)`}}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        <motion.h2 
            className="font-anton text-7xl md:text-9xl lg:text-[11rem] text-white/90 -rotate-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
        >
            PROTEST ARCHIVE
        </motion.h2>
        <motion.p 
            className="text-2xl md:text-4xl text-orange-500 neon-glow mt-4 tracking-wider font-anton"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.3 }}
        >
            MEMORY TURNED INTO FIRE
        </motion.p>
      </SectionWrapper>

      <SectionWrapper id="manifesto" bgColor="#000000">
        <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1 }}
        >
            <h2 className="font-anton text-8xl md:text-9xl lg:text-[12rem] text-white mb-16">MANIFESTO</h2>
            <p className="text-2xl md:text-3xl text-white/90 leading-relaxed text-left font-serif">
                We are the glitch in the system, the error in the code. We are the generation that refuses to inherit a broken world. We reject your borders, your profits, your wars. We demand a future built on justice, not power. Our silence is over. The uprising has begun. This is not a request. It is a declaration.
            </p>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper id="dialogue" bgColor="#1a1a1a" className="py-24">
        <div className="w-full max-w-4xl space-y-8">
            <h2 className="font-anton text-8xl md:text-9xl lg:text-[12rem] text-white/90 mb-16">DIALOGUE</h2>
            <motion.div 
                className="brutalist-box p-8 text-left"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
            >
                <p className="font-typewriter text-xl md:text-2xl text-white/80">"They call it chaos. We call it conversation. Is direct action the only language they understand?"</p>
                <p className="text-lg mt-4 text-red-500 font-anton tracking-widest"> - USER_734</p>
            </motion.div>
            <motion.div 
                className="brutalist-box p-8 text-right ml-auto max-w-[90%]"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <p className="font-typewriter text-xl md:text-2xl text-white/80">"Conversation is a privilege. Action is a necessity. Don't ask for a seat at the table. Build a new one."</p>
                <p className="text-lg mt-4 text-orange-500 font-anton tracking-widest"> - DISSENTISDUTY</p>
            </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default SectionTakeover;
