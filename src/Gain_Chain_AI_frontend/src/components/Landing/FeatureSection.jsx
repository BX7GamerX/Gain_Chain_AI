import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { motion, useAnimation } from 'framer-motion';
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Blockchain-based Security',
    description:
      'Gain Chain uses blockchain technology to ensure secure transactions and data integrity across all interactions.',
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

  const cardAnimation = useSpring({
    transform: activeFeature !== null ? 'scale(1.05)' : 'scale(1)',
    boxShadow:
      activeFeature !== null
        ? '0px 8px 20px rgba(0, 0, 0, 0.2)'
        : '0px 4px 10px rgba(0, 0, 0, 0.1)',
    config: { tension: 300, friction: 20 },
  });

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
      {/* Fancy Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00A7E1] via-[#40E0D0] to-[#00A7E1]">
          <motion.span
            className="inline-block"
            animate={{
              textShadow: [
                "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa",
                "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa",
                "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa",
              ],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Discover
          </motion.span>{" "}
          Our Amazing Features
        </h2>
        <p className="mt-4 text-lg text-white">
          Explore how Gain Chain revolutionizes blockchain technology with
          transparency, rewards, and security.
        </p>
      </div>

      {/* Feature Cards and Image */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap lg:flex-nowrap items-center">
          {/* Feature Cards */}
          <div className="w-full lg:w-1/2 space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                animate={controls}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                className="relative p-6 bg-[#002C72] text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 flex items-center justify-center bg-[#00A7E1] text-white rounded-full">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold">{feature.name}</h3>
                </div>
                {activeFeature === index && (
                  <p className="mt-4 text-white">{feature.description}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Feature Image with Overlay */}
          <div className="hidden lg:block lg:w-1/2">
            <div className="relative">
              <img
                src="src/images/aiimage.jpg" // Replace with your image path
                alt="Features"
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
              <animated.div
                style={{ opacity: 1 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-3/4 bg-white bg-opacity-80 p-4 rounded-lg shadow-lg"
              >
                <p className="text-[#001F54] text-lg font-medium text-center">
                  {features[currentIndex].name}:{' '}
                  {features[currentIndex].description}
                </p>
              </animated.div>
            </div>
          </div>
        </div>
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
