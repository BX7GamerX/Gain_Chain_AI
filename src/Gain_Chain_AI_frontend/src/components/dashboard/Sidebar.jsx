import React from "react";
import { motion } from "framer-motion";
import { User, Home, FolderPlus, Folder, MessageCircle } from "lucide-react";

const Sidebar = ({ activeTab, setActiveTab, tabs = [], isOpen }) => {
  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: isOpen ? 0 : -300 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-white dark:bg-[#1c1f24] text-black dark:text-gray-200 w-20 min-h-screen overflow-y-auto fixed lg:static lg:translate-x-0 shadow-lg z-20 flex flex-col items-center pt-12"
    >
      <div className="flex flex-col items-center mb-8">
        <div className="w-12 h-12 bg-gray-300 rounded-full mb-4"></div>
        <p className="text-xs text-gray-500">Dashboard</p>
      </div>
      <nav className="flex-1">
        {tabs.map((tab) => (
          <motion.button
            key={tab.label}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setActiveTab(tab.label)}
            aria-label={`Navigate to ${tab.label}`}
            className={`flex items-center justify-center py-3 w-full transition-colors ${
              activeTab === tab.label
                ? "bg-teal-500 text-white"
                : "hover:bg-[#293038]"
            }`}
          >
            <motion.div
              className={`flex items-center justify-center rounded-full ${
                activeTab === tab.label ? "bg-teal-500" : "bg-transparent"
              }`}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <tab.icon
                size={24}
                className={activeTab === tab.label ? "text-white" : "text-[#9dabb8]"}
              />
            </motion.div>
            <motion.span
              className="ml-2 text-sm font-medium hidden group-hover:inline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {tab.label}
            </motion.span>
          </motion.button>
        ))}
      </nav>
    </motion.aside>
  );
};

export default Sidebar;
