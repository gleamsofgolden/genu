
import React from 'react';
import { motion } from 'framer-motion';
import PostCard from '@/components/PostCard';

const PostGrid = ({ activeSection }) => {
  const posts = [
    {
      id: 1,
      title: "The Digital Picket Line: How Gen Z Organizes Online",
      excerpt: "From TikTok activism to encrypted messaging, young organizers are rewriting the playbook for political resistance in the digital age.",
      section: "signals",
      author: "Maya Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["Digital Activism", "Gen Z", "Social Media"]
    },
    {
      id: 2,
      title: "Case Study: The Student Climate Strike Movement",
      excerpt: "A comprehensive analysis of how Fridays for Future mobilized millions of young people across 150 countries in unprecedented climate action.",
      section: "case-files",
      author: "Dr. Sarah Martinez",
      date: "2024-01-12",
      readTime: "12 min read",
      tags: ["Climate Action", "Student Movement", "Global Organizing"]
    },
    {
      id: 3,
      title: "Letters from the Frontlines: A Young Activist's Journey",
      excerpt: "Personal reflections on organizing in conservative spaces, finding your voice, and the cost of speaking truth to power.",
      section: "daughter-dissent",
      author: "Alex Rivera",
      date: "2024-01-10",
      readTime: "6 min read",
      tags: ["Personal Essay", "Activism", "Youth Voice"]
    },
    {
      id: 4,
      title: "Visual History: Protest Signs That Changed Everything",
      excerpt: "From 'We Shall Overcome' to 'Climate Justice Now' - how protest imagery evolves and inspires across generations.",
      section: "protest-archive",
      author: "Jordan Kim",
      date: "2024-01-08",
      readTime: "10 min read",
      tags: ["Visual Culture", "Protest History", "Design"]
    },
    {
      id: 5,
      title: "A Manifesto for Intersectional Activism",
      excerpt: "Why the future of youth movements depends on understanding how race, class, gender, and climate intersect in the fight for justice.",
      section: "manifesto",
      author: "Collective Voice",
      date: "2024-01-05",
      readTime: "15 min read",
      tags: ["Intersectionality", "Theory", "Movement Building"]
    },
    {
      id: 6,
      title: "Debate: Is Direct Action Still Effective?",
      excerpt: "Two perspectives on whether traditional protest tactics work in our current political moment, and what alternatives might emerge.",
      section: "dialogue",
      author: "Multiple Contributors",
      date: "2024-01-03",
      readTime: "20 min read",
      tags: ["Direct Action", "Strategy", "Debate"]
    }
  ];

  const filteredPosts = activeSection === 'all' 
    ? posts 
    : posts.filter(post => post.section === activeSection);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {filteredPosts.map((post) => (
        <motion.div key={post.id} variants={itemVariants}>
          <PostCard post={post} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PostGrid;
