import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { motion, useAnimation } from 'framer-motion';
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';
import coinImage from '../../images/coin.webp'; // Import the coin image in .webp format

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

export default function FeatureSection() {
  const [activeFeature, setActiveFeature] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <div className="relative isolate overflow-hidden bg-[#001F54] py-24 sm:py-32">
      {/* Feature Image with Gradient and Hover Effect */}
      <div className="text-center mb-16">
        <motion.div
          className="relative mx-auto w-1/2 h-auto rounded-full overflow-hidden"
          style={{
            background: 'radial-gradient(circle, rgba(0,31,84,0) 50%, #001F54 100%)',
          }}
          whileHover={{ rotateY: 180 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <img
            src={coinImage} // Use the coin image in .webp format
            alt="Coin"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatType: 'mirror' }}
            />
          </div>
        </motion.div>
      </div>

      {/* Title with Subtle Motion */}
      <div className="text-center mb-16">
        <motion.h2
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00A7E1] via-[#40E0D0] to-[#00A7E1]"
          animate={{ opacity: [0.8, 1, 0.8], y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        >
          Discover Our Amazing Features
        </motion.h2>
        <p className="mt-4 text-lg text-white">
          Explore how Gain Chain revolutionizes Web 3 technology with
          transparency, rewards, and security.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            animate={controls}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="relative p-8 bg-[#002C72] text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out"
            onMouseEnter={() => setActiveFeature(index)}
            onMouseLeave={() => setActiveFeature(null)}
            style={{
              borderRadius: '20px',
              boxShadow: '0 0 20px rgba(0, 167, 225, 0.5)',
            }}
          >
            <div className="flex items-center space-x-4">
              <motion.div
                className="h-16 w-16 flex items-center justify-center bg-[#00A7E1] text-white rounded-full"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
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

<style jsx>{`
  @keyframes glow {
    0%, 100% {
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4);
    }
    50% {
      text-shadow: 0 0 20px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6);
    }
  }

  .animate-glow {
    animation: glow 2s infinite;
  }
`}</style>
