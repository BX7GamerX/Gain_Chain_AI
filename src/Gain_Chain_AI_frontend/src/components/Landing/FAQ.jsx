import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaQuestionCircle, FaGift, FaShieldAlt, FaPlug, FaHeadset } from "react-icons/fa";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What makes Gain Chain's AI different from others?",
      answer: "Gain Chain's AI combines blockchain technology with advanced machine learning, offering unparalleled security and performance. Our system learns and adapts to user behavior while maintaining complete decentralization.",
      icon: <FaQuestionCircle />
    },
    {
      question: "How does the reward system work?",
      answer: "Users earn tokens through active participation, content creation, and community engagement. Our AI-powered system fairly distributes rewards based on contribution quality and impact.",
      icon: <FaGift />
    },
    {
      question: "Is Gain Chain secure?",
      answer: "Absolutely. We implement military-grade encryption, decentralized protocols, and continuous security audits to ensure your data and assets are protected at all times.",
      icon: <FaShieldAlt />
    },
    {
      question: "Can I integrate Gain Chain with existing systems?",
      answer: "Yes! Gain Chain offers robust APIs and documentation for seamless integration with most blockchain and AI platforms, making it highly adaptable to your existing infrastructure.",
      icon: <FaPlug />
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 community support, detailed documentation, and dedicated technical assistance for enterprise users. Our AI chatbot is also available to help with common queries.",
      icon: <FaHeadset />
    }
  ];

  const floatingQuestionMarks = Array.from({ length: 5 }).map((_, index) => (
    <motion.div
      key={`up-${index}`}
      className="absolute text-blue-300 text-4xl"
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "-100%", opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        delay: index * 2,
      }}
      style={{
        left: `${Math.random() * 100}%`,
        bottom: 0,
      }}
    >
      ?
    </motion.div>
  ));

  const floatingQuestionMarksDown = Array.from({ length: 5 }).map((_, index) => (
    <motion.div
      key={`down-${index}`}
      className="absolute text-blue-300 text-4xl"
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: "100%", opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        delay: index * 2,
      }}
      style={{
        left: `${Math.random() * 100}%`,
        top: 0,
      }}
    >
      ?
    </motion.div>
  ));

  return (
    <section className="py-24 px-6 lg:px-12 relative" style={{ backgroundColor: "#001F54" }}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header with glow effect */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-white mb-4 glow-effect"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-blue-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need to know about Gain Chain
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }} // Enlarge on hover
                className="border border-blue-500/30 rounded-lg overflow-hidden bg-blue-900/20"
              >
                <button
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-blue-500/10 transition-colors"
                >
                  <span className="flex items-center gap-2 text-lg font-medium text-white">
                    {faq.icon} {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-blue-300"
                  >
                    {isActive ? <FaMinus /> : <FaPlus />}
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth unfolding
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-blue-200">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Floating Question Marks */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingQuestionMarks}
          {floatingQuestionMarksDown}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-cyan-500/20 rounded-full filter blur-3xl"></div>
        </div>
      </div>

      <style>
        {`
          .glow-effect {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          }
        `}
      </style>
    </section>
  );
} 