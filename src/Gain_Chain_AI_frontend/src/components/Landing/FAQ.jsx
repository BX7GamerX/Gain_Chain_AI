import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What makes Gain Chain's AI different from others?",
      answer: "Gain Chain's AI combines blockchain technology with advanced machine learning, offering unparalleled security and performance. Our system learns and adapts to user behavior while maintaining complete decentralization."
    },
    {
      question: "How does the reward system work?",
      answer: "Users earn tokens through active participation, content creation, and community engagement. Our AI-powered system fairly distributes rewards based on contribution quality and impact."
    },
    {
      question: "Is Gain Chain secure?",
      answer: "Absolutely. We implement military-grade encryption, decentralized protocols, and continuous security audits to ensure your data and assets are protected at all times."
    },
    {
      question: "Can I integrate Gain Chain with existing systems?",
      answer: "Yes! Gain Chain offers robust APIs and documentation for seamless integration with most blockchain and AI platforms, making it highly adaptable to your existing infrastructure."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 community support, detailed documentation, and dedicated technical assistance for enterprise users. Our AI chatbot is also available to help with common queries."
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12" style={{ backgroundColor: "#001F54" }}>
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
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-blue-500/30 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-blue-500/10 transition-colors"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-blue-300"
                >
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </motion.span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-blue-200">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
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

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          .floating {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
} 