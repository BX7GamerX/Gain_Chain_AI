import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoHome } from 'react-icons/io5';
import logo from '../../images/GAIN CHAIN AI.png';
import logo2 from '../../images/neuro.png';

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          sticky
            ? 'bg-gradient-to-r from-[#001F54]/80 to-[#002C72]/80 backdrop-blur-md shadow-lg'
            : 'bg-gradient-to-r from-[#002C72] to-[#00A7E1] backdrop-blur-md shadow-lg'
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <img
            src={sticky ? logo2 : logo}
            alt="Logo"
            className={`transition-all duration-300 ${
              sticky ? 'w-14 ' : 'w-16'
            } rounded-full`}
          />

          <nav className="hidden lg:flex items-center space-x-6">
            <motion.button
              className="text-white p-2 hover:text-[#00A7E1] transition-all"
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <IoHome className="w-5 h-5" />
            </motion.button>

            <motion.button
              onClick={() => navigate('/signup')}
              className="text-white bg-[#00A7E1] px-6 py-2.5 rounded-full shadow-md hover:bg-[#002C72] transition-all font-switzer font-extrabold text-lg tracking-wide relative"
              animate={{
                scale: [1, 1.03, 1],
                boxShadow: [
                  "0 0 0 0 rgba(255, 255, 255, 0.2)",
                  "0 0 20px 3px rgba(255, 255, 255, 0.3)",
                  "0 0 0 0 rgba(255, 255, 255, 0.2)"
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px 5px rgba(255, 255, 255, 0.4)",
                transition: { duration: 0.2 }
              }}
              style={{
                textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              }}
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00A7E1] to-[#002C72] rounded-full opacity-80 blur-sm" />
            </motion.button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
