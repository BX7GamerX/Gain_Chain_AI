import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Web 3-based Security',
    description:
      'Gain Chain uses Web 3 technology to ensure secure transactions and data integrity across all interactions.',
    icon: LockClosedIcon,
  },
  {
    name: 'Earn Rewards',
    description:
      'Users can earn G-Chain coins through active engagement such as sharing, liking, and interacting with content.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Community Governance',
    description:
      'Gain Chain is governed by the community, allowing users to participate in decision-making and platform improvements.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Transparent Finance',
    description:
      'Gain Chain ensures transparency in all financial transactions and interactions, fostering trust and accountability.',
    icon: FingerPrintIcon,
  },
];

const scriptSrc = "https://static.elfsight.com/platform/platform.js";

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.defer = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
};

export default function FeatureSection() {
  const [activeFeature, setActiveFeature] = useState(null);

  useEffect(() => {
    loadScript(scriptSrc)
      .then(() => console.log('Script loaded successfully'))
      .catch((error) => console.error('Script loading failed', error));

    return () => {
      // Cleanup script if necessary
      const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);
      if (existingScript) document.body.removeChild(existingScript);
    };
  }, []);

  return (
    <div className="relative isolate overflow-hidden bg-[#001F54] py-24 sm:py-32">
      <motion.h2
        className="text-4xl font-extrabold text-white text-center font-sans mb-12"
        style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.9)' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        Learn more about Gain Chain AI
      </motion.h2>
      <div className="bg-white bg-opacity-20 backdrop-blur-lg border border-white rounded-lg shadow-lg p-4">
        <div className="w-full relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-white/30 via-white/50 to-white/30 rounded-lg blur-sm animate-pulse"></div>
          <div
            className="elfsight-app-a7b0400a-7130-485e-acd5-a752965bbf7d"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>

      <div className="text-center mb-16 mt-[100px]">
        <motion.h2
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00A7E1] via-[#40E0D0] to-[#00A7E1]"
          animate={{ opacity: [0.8, 1, 0.8], y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        >
          Discover Our Amazing Features
        </motion.h2>
        <p className="mt-4 text-lg text-white">
          Explore how Gain Chain revolutionizes Web 3 technology with transparency, rewards, and security.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="relative p-8 bg-[#002C72] text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out"
            onMouseEnter={() => setActiveFeature(index)}
            onMouseLeave={() => setActiveFeature(null)}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-4">
              <motion.div
                className="h-8 w-8 text-white animate-spin"
                whileHover={{ rotate: 360 }}
              >
                <feature.icon className="h-8 w-8" />
              </motion.div>
              <h3 className="text-xl font-bold">{feature.name}</h3>
            </div>
            {activeFeature === index && (
              <p className="mt-4 text-white">{feature.description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
