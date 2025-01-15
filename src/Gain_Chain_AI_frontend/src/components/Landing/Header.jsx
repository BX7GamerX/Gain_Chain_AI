import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoHome } from 'react-icons/io5';
import logo from '../../images/GAIN CHAIN AI.png';
import logo2 from '../../images/neuro.png';
import gchLogo from '../../images/gchcoinfinale.png'; // Import the GCH Coin logo

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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          sticky
            ? 'bg-gradient-to-r from-[#001A3D]/30 to-[#003366]/30 backdrop-blur-lg shadow-md border border-white/10 backdrop-saturate-150'
            : 'bg-transparent'
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
              className="text-white p-2 hover:text-[#00BFFF] transition-all"
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <IoHome className="w-5 h-5" />
            </motion.button>

            <motion.button
              onClick={() => navigate('/signup')}
              className="text-white bg-[#00BFFF] px-6 py-2.5 rounded-full shadow-md hover:bg-[#003366] transition-all font-sans font-extrabold text-lg tracking-wide relative"
              animate={{
                scale: [1, 1.03, 1],
                boxShadow: [
                  "0 0 0 0 rgba(0, 191, 255, 0.2)",
                  "0 0 20px 3px rgba(0, 191, 255, 0.3)",
                  "0 0 0 0 rgba(0, 191, 255, 0.2)"
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px 5px rgba(0, 191, 255, 0.4)",
                transition: { duration: 0.2 }
              }}
              style={{
                textShadow: "0 0 10px rgba(0, 191, 255, 0.5)",
              }}
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00BFFF] to-[#003366] rounded-full opacity-80 blur-sm" />
            </motion.button>

            {/* GCH Coin Logo Link */}
            <motion.button
              onClick={() => navigate('/gch-coin-integration')}
              className="text-white p-2 hover:text-[#00BFFF] transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={gchLogo} alt="GCH Coin" className="w-12 h-12 cursor-pointer" />
            </motion.button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;