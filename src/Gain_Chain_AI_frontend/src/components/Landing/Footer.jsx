import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Twitter, Instagram, LinkedinIcon as LinkedIn, GitlabIcon as GitHub } from 'lucide-react';
import logo from '../../images/neuro.png'; // Adjust path to the actual location

export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center mb-6 md:mb-0"
          >
            <img src={logo} alt="Gain Chain Logo" className="h-10 mr-2" />
            <Link to="/" className="text-2xl font-bold glow">
              <span className="text-neon-blue">Gain</span>
              <span className="text-neon-blue">Chain</span>
              <span className="text-neon-blue"> AI</span>
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6"
          >
            {[
              { icon: Twitter, href: 'https://twitter.com' },
              { icon: Instagram, href: 'https://instagram.com' },
              { icon: LinkedIn, href: 'https://linkedin.com' },
              { icon: GitHub, href: 'https://github.com' },
            ].map((social, index) => (
              <motion.a 
                key={index} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-110 text-neon-blue"
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="text-center text-white mt-4">
        <p>Email: <a href="mailto:gainchainai@gmail.com" className="text-neon-blue">gainchainai@gmail.com</a></p>
        <p className="mt-2">© 2024 Gain Chain AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
