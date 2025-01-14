import React, { useState, useEffect } from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from '../../images/home.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const navigate = useNavigate();

  const mainText = "Embrace the Future with Web 3 and AI";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= mainText.length) {
        setDisplayText(mainText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative isolate overflow-hidden bg-[#001A3D] py-32 sm:py-48 flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-[#001F54]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.h1
          className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] to-[#00BFFF] sm:text-5xl font-sans mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: [1, 0.8, 1], 
            y: [30, 20, 30] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatType: "mirror" 
          }}
          style={{
            textShadow: "0 0 15px rgba(0, 255, 255, 0.8)",
          }}
        >
          {displayText}
        </motion.h1>
        <motion.p
          className="text-lg text-white mt-8 font-sans font-bold text-center justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 30 }}
          transition={{ duration: 2, delay: 1 }}
        >
          Discover the synergy of cutting-edge blockchain technology and artificial intelligence. 
          Join us in shaping a future where innovation knows no bounds. 
          Experience the seamless integration of AI and blockchain for a smarter tomorrow.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Hero;