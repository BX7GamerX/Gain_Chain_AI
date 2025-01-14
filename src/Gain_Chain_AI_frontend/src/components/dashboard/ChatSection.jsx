import React, { useState } from "react";

// Sample data for developer connections
const developerConnections = [
  { id: 1, name: "John Doe", status: "Online" },
  { id: 2, name: "Jane Smith", status: "Offline" },
  { id: 3, name: "Michael Johnson", status: "Online" },
  { id: 4, name: "Emily Davis", status: "Online" },
];

const ChatSection = ({ selectedConnection, messages, onSend }) => (
  <div className="bg-[#1c1f24] p-6 rounded-lg shadow-lg max-w-lg mx-auto text-white">
    <h3 className="text-2xl font-bold mb-4">{selectedConnection.name}'s Chat</h3>
    <div className="h-80 overflow-y-scroll border-b border-gray-600 mb-4">
      <ul>
        {messages.map((msg, index) => (
          <li key={index} className="mb-3">
            <strong>{msg.sender}:</strong> {msg.message}
          </li>
        ))}
      </ul>
    </div>
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 p-2 rounded-md bg-[#2a2e35] text-white border border-gray-500"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSend(e.target.value);
            e.target.value = '';
          }
        }}
      />
      <button
        className="bg-teal-500 text-white py-2 px-4 ml-2 rounded-md hover:bg-teal-600 transition"
        onClick={() => {
          const input = document.querySelector('#chat-input');
          if (input && input.value) {
            onSend(input.value);
            input.value = '';
          }
        }}
      >
        Send
      </button>
    </div>
  </div>
);

const ConnectionsList = ({ connections, onSelect }) => (
  <div className="bg-[#1c1f24] p-6 rounded-lg shadow-lg max-w-xs mx-auto text-white">
    <h2 className="text-2xl font-bold mb-4">Developer Connections</h2>
    <ul>
      {connections.map((connection) => (
        <li
          key={connection.id}
          className="p-2 mb-2 cursor-pointer hover:bg-teal-600 rounded-md"
          onClick={() => onSelect(connection)}
        >
          <span className="font-semibold">{connection.name}</span> - {connection.status}
        </li>
      ))}
    </ul>
  </div>
);

const ChatApp = () => {
  const [selectedConnection, setSelectedConnection] = useState(null);
  const [messages, setMessages] = useState([]);
  
  const handleSendMessage = (message) => {
    if (message.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "You", message },
      ]);
    }
  };

  return (
    <div className="flex justify-center space-x-4 p-6 bg-[#111418] min-h-screen">
      <ConnectionsList
        connections={developerConnections}
        onSelect={setSelectedConnection}
      />
      {selectedConnection && (
        <ChatSection
          selectedConnection={selectedConnection}
          messages={messages}
          onSend={handleSendMessage}
        />
      )}
    </div>
  );
};

export default ChatApp;
