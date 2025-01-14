import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AuthClient } from "@dfinity/auth-client";

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const authClient = await AuthClient.create();
      await authClient.logout();
      localStorage.removeItem('isAuthenticated');
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="bg-gray-800 rounded-xl p-8 shadow-lg"
        >
          <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
          
          {/* Add your profile content here */}
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLogout}
            className="mt-6 px-6 py-3 bg-teal-500 rounded-lg hover:bg-teal-600 transition-colors"
          >
            Logout
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfilePage; 