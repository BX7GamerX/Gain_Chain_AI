import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, Bell, Sun, Moon } from "lucide-react";
import logo from "../../images/neuro.png";

const Header = ({ toggleSidebar, notificationCount }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-[#1c1f24] dark:bg-[#111418] shadow-lg">
      <div className="flex items-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleSidebar}
          className="lg:hidden focus:outline-none"
          aria-label="Toggle Sidebar"
        >
          <Menu
            className="text-teal-400 hover:text-teal-500 transition-colors"
            size={24}
          />
        </motion.button>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <img src={logo} alt="Gain Chain Logo" className="h-8 w-8 mr-2" />
          <h2 className="text-2xl font-extrabold text-teal-400">Dashboard</h2>
        </motion.div>
      </div>

      <div className="flex items-center space-x-4">
        <motion.div
          className="relative"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Bell
            className="text-yellow-500 cursor-pointer hover:text-yellow-400 transition-colors"
            size={24}
            aria-label="Notifications"
            style={{
              filter: "drop-shadow(0 0 5px rgba(255, 215, 0, 0.5))",
            }}
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
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer flex items-center text-teal-400 hover:text-teal-500 transition-colors"
          aria-label="Toggle Dark Mode"
          onClick={toggleDarkMode}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          <span className="ml-2 text-sm font-medium hidden sm:inline">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </span>
        </motion.button>
      </div>
    </div>
  );
};

export default Header;
