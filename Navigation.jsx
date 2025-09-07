
import React from 'react';
import { motion } from 'framer-motion';

const Navigation = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 'all', label: 'All Posts', color: 'bg-stone-700' },
    { id: 'signals', label: 'Signals', color: 'bg-red-600' },
    { id: 'case-files', label: 'Case Files', color: 'bg-orange-600' },
    { id: 'daughter-dissent', label: 'Daughter of Dissent', color: 'bg-blue-900' },
    { id: 'protest-archive', label: 'Protest Archive', color: 'bg-red-700' },
    { id: 'manifesto', label: 'Manifesto', color: 'bg-stone-800' },
    { id: 'dialogue', label: 'Dialogue', color: 'bg-blue-700' }
  ];

  return (
    <nav className="mb-12">
      <div className="flex flex-wrap gap-2 mb-8">
        {sections.map((section) => (
          <motion.button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`section-tab ${section.color} ${
              activeSection === section.id ? 'ring-2 ring-offset-2 ring-stone-400' : ''
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {section.label}
          </motion.button>
        ))}
      </div>
      
      <div className="textbook-rule"></div>
    </nav>
  );
};

export default Navigation;
