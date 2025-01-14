import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthClient } from "@dfinity/auth-client";
import { motion, AnimatePresence } from "framer-motion";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleInternetIdentityLogin = async () => {
    try {
      const authClient = await AuthClient.create();
      await authClient.login({
        identityProvider: process.env.II_URL || "https://identity.ic0.app",
        onSuccess: () => {
          console.log("Internet Identity login successful");
          localStorage.setItem('isAuthenticated', 'true');
          setShowSuccessPopup(true);
          // Navigate after showing popup
          setTimeout(() => {
            navigate("/profile", { replace: true });
          }, 2000);
        },
        onError: (error) => {
          console.error("Internet Identity login failed:", error);
        },
      });
    } catch (error) {
      console.error("Error initializing Internet Identity:", error);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex min-h-screen bg-gradient-to-br from-gray-900 to-gray-800"
    >
      {/* Success Popup */}
      <AnimatePresence>
        {showSuccessPopup && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center items-start pt-20"
          >
            <div className="bg-teal-500 text-white px-8 py-4 rounded-lg shadow-lg flex items-center space-x-3">
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
              <span className="font-semibold">Welcome! We're happy to have you here!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Left Half: Image Section */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="hidden md:flex w-1/2 items-center justify-center bg-gradient-to-br from-teal-600 to-teal-800"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          src="src/images/hand.jpg"
          alt="Sign Up Illustration"
          className="w-4/5 h-3/4 rounded-lg shadow-lg object-cover"
        />
      </motion.div>

      {/* Right Half: Signup Form */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 flex items-center justify-center bg-transparent px-8 py-16"
      >
        <div className="w-full max-w-md">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl font-bold text-white text-center mb-8"
          >
            Get Started
          </motion.h1>
          <motion.p 
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            className="text-gray-300 text-center mb-6"
          >
            Join the future of digital identity
          </motion.p>

          <div className="space-y-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleInternetIdentityLogin}
              className="w-full flex items-center justify-center py-4 px-6 text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl font-semibold shadow-lg hover:shadow-teal-500/25 transition-all duration-300 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <motion.div 
                className="relative flex items-center"
                whileHover={{ y: -2 }}
              >
                <svg
                  className="w-6 h-6 mr-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
                    fill="currentColor"
                  />
                </svg>
                Continue with Internet Identity
              </motion.div>
            </motion.button>
          </div>

          {/* Futuristic Decorative Elements */}
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-10 right-10 w-32 h-32 border-2 border-teal-500/20 rounded-full"
          />
          <motion.div 
            animate={{ 
              rotate: -360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-10 left-10 w-24 h-24 border-2 border-teal-500/10 rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SignUpPage;
