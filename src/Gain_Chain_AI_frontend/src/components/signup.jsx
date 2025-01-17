import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthClient } from "@dfinity/auth-client";
import { motion, AnimatePresence } from "framer-motion";
import handImage from '../images/hand.jpg'; 


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
      className="relative flex min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-teal-500/10 rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Success Popup */}
      <AnimatePresence>
        {showSuccessPopup && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center items-start pt-20"
          >
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-lg shadow-lg backdrop-blur-md flex items-center space-x-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
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
              </motion.div>
              <span className="font-semibold">Welcome to the future of AI!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Left Half: Image Section */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="hidden md:flex w-1/2 items-center justify-center bg-gradient-to-br from-teal-600/20 to-transparent backdrop-blur-sm"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative w-4/5 h-3/4"
        >
<motion.img
  src={handImage}  // Use the imported image
  alt="Sign Up Illustration"
  className="w-full h-full rounded-2xl shadow-2xl object-cover"
  style={{ filter: 'brightness(0.8) contrast(1.2)' }}
/>
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-transparent rounded-2xl"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Right Half: Signup Form */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 flex items-center justify-center px-8 py-16 backdrop-blur-sm bg-black/20"
      >
        <div className="w-full max-w-md relative">
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 0 0 rgba(45, 212, 191, 0)",
                "0 0 20px 10px rgba(45, 212, 191, 0.1)",
                "0 0 0 0 rgba(45, 212, 191, 0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-3xl"
          />
          
          <div className="relative bg-gray-900/50 backdrop-blur-xl p-8 rounded-3xl border border-teal-500/20">
            <motion.h1 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-5xl font-bold text-white text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-200"
            >
              Get Started
            </motion.h1>
            <motion.p 
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              className="text-gray-300 text-center mb-8"
            >
              Step into the future of digital identity
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px 5px rgba(45, 212, 191, 0.2)" }}
              whileTap={{ scale: 0.98 }}
              onClick={handleInternetIdentityLogin}
              className="w-full flex items-center justify-center py-4 px-6 text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl font-semibold shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <motion.div 
                className="relative flex items-center space-x-2"
                whileHover={{ y: -2 }}
              >
                <svg
                  className="w-6 h-6"
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
                <span>Continue with Internet Identity</span>
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SignUpPage;
