import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
import simon from '../../images/simon.jpeg';
import joanne from '../../images/joanne.jpeg';
import veronica from '../../images/verah.jpeg';

const teamMembers = [
  {
    name: 'Simon Wandera',
    role: 'Backend & AI Developer',
    image: simon,
    description: 'Full-stack blockchain developer specializing in AI integration and smart contract development using RUST.',
    portfolio: 'https://bx7gamerx.github.io',
    linkedin: 'https://linkedin.com/in/simonwandera',
    github: 'https://github.com/BX7GamerX'
  },
  {
    name: 'Joanne Wendoh',
    role: 'Frontend Developer & UI/UX Designer',
    image: joanne,
    description: 'Creative frontend developer with expertise in building intuitive and responsive user interfaces.',
    portfolio: 'https://mswendoh.world',
    linkedin: 'https://www.linkedin.com/in/wendoh-joanne/',
    github: 'https://github.com/J-Wendoh'
  },
  {
    name: 'Veronicah Anzimbu',
    role: 'Data Scientist & AI Engineer',
    image: veronica,
    description: 'Experienced AI developer focused on scalable LLMs and model optimization.',
    portfolio: 'https://veranzi-website.vercel.app/',
    linkedin: 'https://www.linkedin.com/in/veronicah-anzimbu-aa15a8232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/veranzi'
  },
];

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <section className="py-16 bg-gradient-to-b from-[#001F54] to-[#003366]">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          Meet Our Visionaries
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: hoveredMember === index ? 1.15 : 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative w-full md:w-[300px] lg:w-[350px] transform transition-transform duration-300"
              onHoverStart={() => setHoveredMember(index)}
              onHoverEnd={() => setHoveredMember(null)}
            >
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20">
                <div className="relative">
                  <img src={member.image} alt={member.name} className="w-24 h-24 mx-auto rounded-full mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-teal-300 mb-4">{member.role}</p>
                </div>

                <AnimatePresence>
                  {hoveredMember === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute inset-0 bg-[#001F54]/95 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center justify-center"
                    >
                      <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mb-4" />
                      <p className="text-white/90 mb-4 text-sm text-center">{member.description}</p>
                      <div className="flex justify-center space-x-4">
                        <a href={member.portfolio} target="_blank" rel="noopener noreferrer" 
                           className="text-teal-400 hover:text-teal-300 transition-colors">
                          <FaGlobe className="w-6 h-6" />
                        </a>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                           className="text-teal-400 hover:text-teal-300 transition-colors">
                          <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a href={member.github} target="_blank" rel="noopener noreferrer"
                           className="text-teal-400 hover:text-teal-300 transition-colors">
                          <FaGithub className="w-6 h-6" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection; 
