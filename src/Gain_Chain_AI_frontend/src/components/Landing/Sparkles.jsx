import React from 'react';
import { motion } from 'framer-motion';

const Sparkles = () => {
  const sparkles = Array.from({ length: 8 }, (_, index) => (
    <motion.div
      key={index}
      className="w-2 h-2 bg-white rounded-full absolute"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
      transition={{
        duration: 1,
        delay: Math.random(), // Random delay for each sparkle
        repeat: Infinity, // Loop infinitely
        repeatDelay: Math.random(),
      }}
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
    />
  ));

  return <>{sparkles}</>;
};

export default Sparkles;
