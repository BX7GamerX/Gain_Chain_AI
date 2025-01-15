'use client'

import React, { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
// Import images
import handImage from '../../images/hand.jpg'; // Adjust the path as necessary
import securityImage from '../../images/security.webp'; // Import image from src
import communityImage from '../../images/community.webp'; // Import image from src
import communityJPEGImage from '../../images/community.jpeg'; // Import image from src
import icpImage from '../../images/icp.jpeg'; // Import image from src
import smartContractImage from '../../images/gain.png'; // Import your new image

export default function IntegratedSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  })

  // Combine refs for both framer-motion and intersection observer
  const setRefs = (node) => {
    ref.current = node
    inViewRef(node)
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("exit")
    }
  }, [controls, inView])

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.8 },
  }

  return (
    <motion.div 
      ref={setRefs}
      className="relative bg-[#001F54] py-24 sm:py-32 overflow-hidden"
      initial="hidden"
      animate={controls}
      exit="exit"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#001F54]"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <motion.p 
          className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.span
            className="inline-block"
            animate={{
              textShadow: [
                "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa",
                "0 0 0px #fff, 0 0 0px #fff, 0 0 0px #fff, 0 0 0px #0fa, 0 0 0px #0fa, 0 0 0px #0fa, 0 0 0px #0fa, 0 0 0px #0fa",
              ],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Discover
          </motion.span>{" "}
          Web 3 Development & AI for the Future
        </motion.p>

        {/* Features Section */}
        <div className="mt-12 grid gap-8 sm:mt-16 lg:grid-cols-2">
          {[
            {
              title: "AI-Powered Blockchain",
              description: "Harness the power of AI to enhance blockchain development and user engagement on Gain Chain.",
              image: handImage,
              alt: "AI Blockchain",
            },
            {
              title: "Decentralized Security",
              description: "Gain Chain ensures top-notch security through decentralized protocols and cryptography.",
              image: securityImage,
              alt: "Decentralized Security",
            },
            {
              title: "Blockchain Analytics",
              description: "Gain valuable insights through AI-powered analytics for blockchain transactions and behavior patterns.",
              image: communityImage,
              alt: "Blockchain Analytics",
            },
            {
              title: "Community & Support",
              description: "Join our vibrant community of developers and blockchain enthusiasts. Gain Chain offers 24/7 support and collaborative learning to help you build, share, and innovate.",
              image: communityJPEGImage,
              alt: "Community Support",
            },
            {
              title: "ICP Integration",
              description: "Integrate with Internet Computer Protocol (ICP) for scalable and efficient Web 3 solutions.",
              image: icpImage,
              alt: "ICP Integration",
            },
            {
              title: "Smart Contract",
              description: "Leverage smart contracts for automated and secure transactions on the blockchain.",
              image: smartContractImage,
              alt: "Smart Contract",
            },
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="relative flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out glass-effect"
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              exit="exit"
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute inset-0 bg-[#001F54]/95 backdrop-blur-sm p-6 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-extrabold text-center glow-text">{feature.title}</h3>
                <p className="text-white/90 mb-4 text-sm text-center glow-text">{feature.description}</p>
              </div>
              <div className="h-56 w-full bg-cover bg-center">
                <img
                  className="h-full w-full object-cover"
                  src={feature.image}
                  alt={feature.alt}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
