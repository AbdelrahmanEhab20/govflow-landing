import React from 'react';
import { motion } from 'framer-motion';

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export function AnimatedSection({ children, className = '' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}

