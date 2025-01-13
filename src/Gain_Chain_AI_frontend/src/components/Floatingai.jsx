import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import neuralImage from "../images/neuro.png"; // Replace with your neural network image
import Chatbot from "./ChatBot.jsx"; // Import the Chatbot component

const FloatingButton = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsPopupVisible(true); // Show the popup when the button is clicked
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Floating Button */}
      <motion.div
        className="group w-16 h-16 bg-white border-2 border-blue-500 rounded-full shadow-2xl flex items-center justify-center cursor-pointer relative overflow-hidden"
        whileHover={{
          scale: 1.2,
          rotate: 10,
          boxShadow: "0px 0px 15px rgba(0, 123, 255, 0.6)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={handleClick}
        title="Chat with AI"
      >
        {/* Neural Network Image */}
        <img
          src={neuralImage}
          alt="Neuro Icon"
          className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </motion.div>

      {/* Popup Message */}
      {isPopupVisible && (
        <Chatbot setShowChatbot={setIsPopupVisible} />
      )}
    </div>
  );
};

export default FloatingButton;
