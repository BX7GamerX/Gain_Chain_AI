import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, LogOut, User, Settings } from "lucide-react"; // Add Settings icon

const Sidebar = ({ activeTab, setActiveTab, tabs, isOpen }) => {
  const mockData = {
    username: "John Doe",
    role: "Software Engineer",
  };

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: isOpen ? 0 : -300 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-white text-gray-800 w-64 min-h-screen overflow-y-auto fixed lg:static lg:translate-x-0 shadow-lg z-20 flex flex-col"
    >
      {/* Profile Section */}
      <div className="px-6 py-4 flex items-center space-x-4 border-b border-teal-300">
        <div className="w-12 h-12 flex items-center justify-center bg-gray-300 rounded-full border-2 border-teal-500">
          <User size={24} className="text-teal-500" /> {/* Profile icon */}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-teal-700">{mockData.username}</h3>
          <p className="text-sm text-gray-600">{mockData.role}</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav className="mt-4 px-4 flex-1">
        {tabs.map((tab) => (
          <motion.button
            key={tab.label}
            whileHover={{ x: 5 }}
            onClick={() => setActiveTab(tab.label)}
            aria-label={`Navigate to ${tab.label}`}
            className={`flex items-center space-x-3 py-3 px-4 w-full rounded-lg transition-colors ${
              activeTab === tab.label
                ? "bg-teal-500 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            <tab.icon size={20} />
            <span className="text-sm font-medium">{tab.label}</span>
            {activeTab === tab.label && (
              <ChevronRight className="ml-auto" size={16} />
            )}
          </motion.button>
        ))}
      </nav>

      {/* Settings and Logout Section */}
      <div className="px-4 py-4 border-t border-teal-300">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Settings"
          className="flex items-center space-x-3 py-3 px-4 w-full rounded-lg transition-colors hover:bg-gray-100"
        >
          <Settings size={20} />
          <span className="text-sm font-medium">Settings</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Logout"
          className="flex items-center space-x-3 py-3 px-4 w-full rounded-lg transition-colors hover:bg-gray-100 mt-4"
        >
          <LogOut size={20} />
          <span className="text-sm font-medium">Logout</span>
        </motion.button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
