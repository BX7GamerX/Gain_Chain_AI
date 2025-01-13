import React from "react";
import { motion } from "framer-motion";
import { Bell, LogOut, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = ({ toggleSidebar, username, notificationCount }) => {
  const navigate = useNavigate();

  // Generate more organized binary numbers
  const generateBinaryNumbers = () => {
    return Array.from({ length: 30 }, (_, index) => ({
      id: index,
      value: Math.random().toString(2).substr(2, 4),
      x: `${(index * 3.33)}%`, // More evenly distributed
      y: `${Math.random() * 80 + 10}%`, // Keep within header bounds
      delay: Math.random() * 5, // Varied animation delays
      duration: 2 + Math.random() * 2 // Varied durations
    }));
  };

  const binaryNumbers = React.useMemo(() => generateBinaryNumbers(), []);

  return (
    <div className="relative">
      <header className="bg-white shadow-md px-6 py-4 sticky top-0 z-10">
        <div className="flex justify-between items-center relative">
          {/* Updated binary number animations */}
          {binaryNumbers.map((num) => (
            <motion.span
              key={num.id}
              className="absolute text-gray-200 text-[10px] select-none pointer-events-none font-mono"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.3, 0],
                y: [0, -10, 0]
              }}
              transition={{
                duration: num.duration,
                repeat: Infinity,
                delay: num.delay,
                ease: "linear"
              }}
              style={{
                left: num.x,
                top: num.y,
              }}
            >
              {num.value}
            </motion.span>
          ))}

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleSidebar}
              className="lg:hidden focus:outline-none"
              aria-label="Toggle Sidebar"
            >
              <Menu
                className="text-gray-600 hover:text-teal-500 transition-colors"
                size={24}
              />
            </motion.button>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-bold text-gray-800">
                Welcome back, {username}!
              </h2>
            </motion.div>
          </div>

          <div className="flex items-center space-x-4">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Bell
                className="text-gray-500 cursor-pointer hover:text-teal-500 transition-colors"
                size={20}
                aria-label="Notifications"
              />
              {notificationCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"
                >
                  {notificationCount}
                </motion.span>
              )}
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer flex items-center text-gray-500 hover:text-teal-500 transition-colors"
              aria-label="Logout"
              onClick={() => {
                // Handle logout logic here
              }}
            >
              <LogOut size={18} />
              <span className="ml-2 text-sm font-medium hidden sm:inline">
                Logout
              </span>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Updated Melting effect */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg width="100%" height="30" className="transform translate-y-1">
          <defs>
            <linearGradient id="meltGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 1 }} />
              <stop offset="40%" style={{ stopColor: 'white', stopOpacity: 0.7 }} />
              <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0 }} />
            </linearGradient>
          </defs>
          <motion.path
            d={`
              M0,0 
              L0,5
              C${window.innerWidth * 0.1},25
              ${window.innerWidth * 0.2},15
              ${window.innerWidth * 0.3},8
              S${window.innerWidth * 0.4},5
              ${window.innerWidth * 0.5},7
              S${window.innerWidth * 0.6},8
              ${window.innerWidth * 0.7},8
              S${window.innerWidth * 0.8},15
              ${window.innerWidth * 0.9},25
              L${window.innerWidth},5
              L${window.innerWidth},0 Z
            `}
            fill="url(#meltGradient)"
            filter="blur(0.5px)"
            initial={{ y: -20 }}
            animate={{ 
              y: 0,
              d: [
                // Starting position
                `M0,0 L0,5 C${window.innerWidth * 0.1},25 ${window.innerWidth * 0.2},15 ${window.innerWidth * 0.3},8 S${window.innerWidth * 0.4},5 ${window.innerWidth * 0.5},7 S${window.innerWidth * 0.6},8 ${window.innerWidth * 0.7},8 S${window.innerWidth * 0.8},15 ${window.innerWidth * 0.9},25 L${window.innerWidth},5 L${window.innerWidth},0 Z`,
                // Middle position (slightly different drip positions)
                `M0,0 L0,5 C${window.innerWidth * 0.1},28 ${window.innerWidth * 0.2},12 ${window.innerWidth * 0.3},9 S${window.innerWidth * 0.4},6 ${window.innerWidth * 0.5},8 S${window.innerWidth * 0.6},9 ${window.innerWidth * 0.7},9 S${window.innerWidth * 0.8},12 ${window.innerWidth * 0.9},28 L${window.innerWidth},5 L${window.innerWidth},0 Z`,
                // Back to starting position
                `M0,0 L0,5 C${window.innerWidth * 0.1},25 ${window.innerWidth * 0.2},15 ${window.innerWidth * 0.3},8 S${window.innerWidth * 0.4},5 ${window.innerWidth * 0.5},7 S${window.innerWidth * 0.6},8 ${window.innerWidth * 0.7},8 S${window.innerWidth * 0.8},15 ${window.innerWidth * 0.9},25 L${window.innerWidth},5 L${window.innerWidth},0 Z`
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
