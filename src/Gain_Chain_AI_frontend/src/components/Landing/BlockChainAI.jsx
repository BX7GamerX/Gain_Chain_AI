'use client'

import React, { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

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
              title: "AI-Powered Web 3",
              description: "Harness the power of AI to enhance Web 3 development and user engagement on Gain Chain.",
              image: "src/images/hand.jpg",
              alt: "AI Web 3",
            },
            {
              title: "Decentralized Security",
              description: "Gain Chain ensures top-notch security through decentralized protocols and cryptography.",
              image: "src/images/security.webp",
              alt: "Decentralized Security",
            },
            {
              title: "Web 3 Analytics",
              description: "Gain valuable insights through AI-powered analytics for Web 3 transactions and behavior patterns.",
              image: "src/images/community.webp",
              alt: "Web 3 Analytics",
            },
            {
              title: "Community & Support",
              description: "Join our vibrant community of developers and Web 3 enthusiasts. Gain Chain offers 24/7 support and collaborative learning to help you build, share, and innovate.",
              image: "src/images/community.jpeg",
              alt: "Community Support",
            },
            {
              title: "ICP Integration",
              description: "Integrate with Internet Computer Protocol (ICP) for scalable and efficient Web 3 solutions.",
              image: "src/images/icp.jpg",
              alt: "ICP Integration",
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
              <div className="px-8 pt-8 sm:px-10 sm:pt-10 bg-[#002C72] text-white">
                <h3 className="text-lg font-medium text-center">{feature.title}</h3>
                <p className="mt-2 text-sm text-center">
                  {feature.description}
                </p>
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
