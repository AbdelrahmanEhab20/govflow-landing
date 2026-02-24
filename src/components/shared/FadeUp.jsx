import React from 'react';
import { motion } from 'framer-motion';

export function FadeUp({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

