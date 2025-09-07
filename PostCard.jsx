import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User, ArrowRight } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const PostCard = ({ post }) => {
  const getSectionColor = (section) => {
    const colors = {
      'signals': 'border-red-600 bg-red-50',
      'case-files': 'border-orange-600 bg-orange-50',
      'daughter-dissent': 'border-blue-900 bg-blue-50',
      'protest-archive': 'border-red-700 bg-red-50',
      'manifesto': 'border-stone-800 bg-stone-50',
      'dialogue': 'border-blue-700 bg-blue-50'
    };
    return colors[section] || 'border-stone-400 bg-stone-50';
  };

  const handleReadMore = () => {
    toast({
      title: "🚧 Full article reading isn't implemented yet—but don't worry! 🚀"
    });
  };

  return (
    <motion.article
      className={`dossier-card p-6 rounded-lg h-full flex flex-col ${getSectionColor(post.section)}`}
      whileHover={{ y: -4, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.3 }}
    >
      {/* Section Label */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-xs font-stencil bg-stone-900 text-white rounded">
          {post.section.replace('-', ' ')}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-stone-900 mb-3 leading-tight">
        {post.title}
      </h2>

      {/* Excerpt */}
      <p className="text-stone-700 mb-4 flex-grow leading-relaxed">
        {post.excerpt}
      </p>

      {/* Meta Information */}
      <div className="flex items-center justify-between text-sm text-stone-600 mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <span className="text-xs font-typewriter">{post.date}</span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs bg-stone-200 text-stone-700 rounded font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Read More Button */}
      <motion.button
        onClick={handleReadMore}
        className="flex items-center justify-between w-full p-3 bg-stone-900 text-white rounded font-medium hover:bg-stone-800 transition-colors"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        <span>Read Full Article</span>
        <ArrowRight className="w-4 h-4" />
      </motion.button>
    </motion.article>
  );
};

export default PostCard;