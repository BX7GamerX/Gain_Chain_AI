import React, { useState } from "react";

const Chatbot = ({ setShowChatbot }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to the chat
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    // Determine bot's reply
    let chatbotReply;

    if (messages.length === 0) {
      // Respond with a greeting and intro if it's the first message
      chatbotReply =
        "Hello! Welcome to Gain Chain 🚀. Gain Chain is a decentralized social media platform where you can interact, share, and earn G-Chain coins securely. How can I assist you today?";
    } else {
      // Simulate a response
      chatbotReply = "I'm here to help! What can I do for you?";
    }

    // Simulate typing delay for realism
    setTimeout(() => {
      const botMessage = { sender: "bot", text: chatbotReply };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);

    // Clear input
    setInput("");
  };

  return (
    <div className="relative w-fullmax-w-lg bg-white shadow-lg rounded-lg border border-gray-300 p-4 z-60">
      {/* Chat Header */}
      <div className="bg-blue-500 text-white p-4 rounded-t-lg shadow-md flex justify-between items-center">
        <h2 className="text-lg font-semibold text-center">hello G-Bot</h2>
        <button
          onClick={() => setShowChatbot(false)}
          className="text-white text-lg font-bold"
        >
          ×
        </button>
      </div>

      {/* Chat Messages */}
      <div className="p-4 h-80 overflow-y-auto space-y-4 bg-gray-50">
        {messages.length === 0 ? (
          <p className="text-center text-gray-500 italic">
            Hello , I am G-Bot 
          </p>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-xs text-sm ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-white text-gray-800 border border-gray-300 shadow-md"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Input Box */}
      <div className="flex items-center border-t border-gray-300 p-2 bg-white">
        <input
          type="text"
          className="flex-1 px-4 py-2 border rounded-full outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 shadow-md transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
