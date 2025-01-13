const chatbotAPI = {
  sendMessage: async (message) => {
    const response = await fetch('https://your-icp-chatbot-api-url.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    const data = await response.json();
    return data.reply; // Adjust based on your API's response structure
  },
};

export default chatbotAPI;
