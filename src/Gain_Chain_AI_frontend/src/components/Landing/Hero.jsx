import React, { useState, useEffect } from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPaused, setIsPaused] = useState(false);
  const [firstTitle, setFirstTitle] = useState("");
  const [secondTitle, setSecondTitle] = useState("");
  const [displayText, setDisplayText] = useState("");
  const navigate = useNavigate();
  
  const firstTitleText = "Where Blockchain and AI Forge the Future";
  const secondTitleText = "Empower Your Blockchain Journey";
  const fullText = "GainChain combines the power of AI and blockchain technology. Build innovative solutions that transform your ideas into reality.";
  
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    coins: 0
  });

  // Remove the typing animation for the first title
  useEffect(() => {
    setFirstTitle(firstTitleText); // Set the first title directly
  }, []);

  // Second title typing animation (starts after first title)
  useEffect(() => {
    if (firstTitle === firstTitleText) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= secondTitleText.length) {
          setSecondTitle(secondTitleText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [firstTitle]);

  // Paragraph typing animation (starts after the first title)
  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeout;

    const type = () => {
      if (isPaused) return;

      if (!isDeleting) {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        currentIndex++;

        if (currentIndex === fullText.length) {
          isDeleting = true;
          timeout = setTimeout(type, 2000);
          return;
        }
      } else {
        setDisplayText(fullText.substring(0, currentIndex));
        currentIndex--;

        if (currentIndex === 0) {
          isDeleting = false;
          timeout = setTimeout(type, 500);
          return;
        }
      }

      timeout = setTimeout(type, isDeleting ? 50 : 100);
    };

    timeout = setTimeout(type, 1000);
    return () => clearTimeout(timeout);
  }, [isPaused]);

  // Handle mouse movement
  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  // Animate numbers effect
  useEffect(() => {
    const counters = {
      projects: { target: 500, current: 0 },
      clients: { target: 100, current: 0 },
      coins: { target: 999999999, current: 0 }
    };

    const intervals = {};

    Object.keys(counters).forEach(key => {
      intervals[key] = setInterval(() => {
        setCounts(prev => {
          if (prev[key] >= counters[key].target) {
            clearInterval(intervals[key]);
            return prev;
          }
          return {
            ...prev,
            [key]: prev[key] + 1
          };
        });
      }, key === 'coins' ? 1 : 50);
    });

    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, []);

  return (
    <div
      className="relative isolate overflow-hidden bg-[#001F54] py-32 sm:py-48"
      onMouseMove={handleMouseMove}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <img
          src="src/images/home.jpg"
          alt="Hero Background"
          className="h-full w-full object-cover opacity-70"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-[#001F54]" />

      {/* Mouse-Following AI Icon */}
      <AiOutlineAppstoreAdd
        className="absolute text-[#00A7E1] text-4xl transition-transform duration-100 ease-linear pointer-events-none"
        style={{
          top: mousePosition.y - 20,
          left: mousePosition.x - 20,
        }}
      />

      {/* Hero Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        {/* First Title without typing effect */}
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00A7E1] to-[#00A7E1] sm:text-5xl font-raleway mb-2">
          Where 
          <motion.span 
            className="animate-pulse text-[#00A7E1] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00A7E1] to-[#00A7E1] shadow-lg mx-1"
            animate={{ scale: [1, 1.1, 1] }} // Flashing effect
            transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Blockchain
          </motion.span> 
          and 
          <motion.span 
            className="animate-pulse text-[#00A7E1] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00A7E1] to-[#00A7E1] shadow-lg mx-1"
            animate={{ scale: [1, 1.1, 1] }} // Flashing effect
            transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
          >
            AI
          </motion.span> 
          Forge the Future
          <span className={`inline-block w-0.5 h-8 bg-[#00A7E1] ml-1 ${firstTitle === firstTitleText ? 'hidden' : 'animate-blink'}`}>
            |
          </span>
        </h1>

        {/* New Paragraph with typing animation */}
        <motion.p 
          className="mt-6 text-lg font-medium text-white sm:text-2xl max-w-3xl mx-auto font-times-new-roman"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {displayText}
          <span className={`inline-block w-0.5 h-6 bg-white ml-1 ${isPaused ? 'opacity-0' : 'animate-blink'}`}>
            |
          </span>
        </motion.p>

        <div className="mt-10 flex justify-center gap-6">
          <motion.button
            className="group relative px-8 py-3 text-lg font-semibold text-white bg-[#002C72] rounded-full shadow-lg hover:bg-[#00A7E1] transition-all overflow-hidden"
            onClick={() => navigate('/signup')}
            whileHover={{ scale: 1.05 }}
            initial={{ boxShadow: "0 0 0 0 rgba(255, 255, 255, 0)" }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(255, 255, 255, 0.7)",
                "0 0 20px 3px rgba(255, 255, 255, 0.5)",
                "0 0 0 0 rgba(255, 255, 255, 0.7)",
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <span className="flex items-center">
              Get Started
              <motion.span
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <HiArrowRight className="text-xl" />
              </motion.span>
            </span>
          </motion.button>
        </div>
      </div>

      {/* Company Statistics Section */}
      <div className="absolute bottom-10 left-10 flex gap-12">
        <div className="flex flex-col items-center">
          <motion.h3 
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {counts.projects.toLocaleString()}+
          </motion.h3>
          <p className="text-lg mt-2 text-white">Projects Completed</p>
        </div>
        <div className="flex flex-col items-center">
          <motion.h3 
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {counts.clients.toLocaleString()}+
          </motion.h3>
          <p className="text-lg mt-2 text-white">Satisfied Clients</p>
        </div>
        <div className="flex flex-col items-center">
          <motion.h3 
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            24/7
          </motion.h3>
          <p className="text-lg mt-2 text-white">Support Available</p>
        </div>
        <div className="flex flex-col items-center">
          <motion.h3 
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {counts.coins.toLocaleString()}+
          </motion.h3>
          <p className="text-lg mt-2 text-white">gch coins deployed</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;