import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HelpCenter = () => {
  const [activeSection, setActiveSection] = useState("");

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? "" : section);
  };

  const sections = [
    {
      id: "gettingStarted",
      title: "Getting Started",
      content: (
        <>
          <h3 className="text-xl font-bold text-orange-500 mb-2">Getting Started</h3>
          <p className="font-semibold">How do I create an employer account?</p>
          <p className="text-gray-200">
            To create an employer account, click on the "Register" button on the homepage
            and select "Employer." Follow the prompts to enter your company information
            and verify your email address.
          </p>
          <p className="font-semibold mt-4">
            What information do I need to set up my company profile?
          </p>
          <p className="text-gray-200">
            You'll need your company name, company email, company culture, job openings,
            address, and a phone number.
          </p>
        </>
      ),
    },
    // Additional sections...
  ];

  return (
    <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-black text-gray-200 min-h-screen p-6">
      <motion.h1
        className="text-3xl font-bold text-orange-500 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Employer Dashboard Help Center
      </motion.h1>
      <motion.p
        className="mb-6 text-lg text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Welcome to the Help Center. Here you'll find answers to common questions and
        guidance on how to use our platform effectively.
      </motion.p>
      <motion.div
        className="bg-gray-700 rounded-lg shadow-lg p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold text-orange-400 mb-4">Table of Contents</h2>
        <motion.ul
          className="space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
        >
          {sections.map((section, index) => (
            <motion.li
              key={index}
              onClick={() => toggleSection(section.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer p-3 rounded-lg bg-gray-800 text-gray-300 hover:bg-orange-500 hover:text-white transition-colors duration-200"
            >
              {section.title}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
      <div className="mt-8">
        <AnimatePresence>
          {sections.map((section) =>
            activeSection === section.id ? (
              <motion.section
                key={section.id}
                className="p-6 rounded-lg bg-gray-800 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                {section.content}
              </motion.section>
            ) : null
          )}
        </AnimatePresence>
      </div>
      <motion.p
        className="mt-10 text-center text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        For any questions not covered here, please contact our support team at{" "}
        <a
          href="mailto:support@jobapp.com"
          className="text-orange-500 hover:underline"
        >
          support@jobapp.com
        </a>
        .
      </motion.p>
    </div>
  );
};

export default HelpCenter;
