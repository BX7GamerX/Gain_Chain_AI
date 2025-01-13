import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoHome } from 'react-icons/io5'; // Importing the home icon from react-icons
import logo from '../../images/GAIN CHAIN AI.png';
import logo2 from '../../images/neuro.png';
import coinImage from '../../images/gchcoinfinale.png';
import Sparkles from './Sparkles.jsx'; // Import Sparkles component

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (id === 'bottom') {
      window.scrollTo(0, document.body.scrollHeight);
    } else {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all ${
          sticky
            ? 'bg-gradient-to-r from-blue-600 bg-opacity-90 backdrop-blur-md shadow-lg to-transparent'
            : 'bg-gradient-to-r from-teal-400 to-blue-600 bg-opacity-90 backdrop-blur-md shadow-lg'
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
            {/* Home Icon Button */}
            <motion.button
              className="text-white p-2 hover:text-teal-400 transition-all"
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <IoHome className="w-5 h-5" />
            </motion.button>

            {/* GCH Coin Button with Motion and Sparkles */}
            <motion.button
              className="relative p-2 rounded-full bg-transparent shadow-md"
              onClick={() => navigate('/gch-coin')}
              whileHover={{ rotate: 360, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src={coinImage}
                alt="GCH Coin"
                className="w-14 h-14 rounded-full"
              />
              {/* Add the Sparkles component */}
              <Sparkles />
            </motion.button>

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-white bg-teal-500 px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition-all"
              >
                Get Started
              </button>
              {dropdownOpen && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md border z-50">
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      navigate('/signup');
                      setDropdownOpen(false);
                    }}
                  >
                    New Member
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      navigate('/login');
                      setDropdownOpen(false);
                    }}
                  >
                    Log In
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
