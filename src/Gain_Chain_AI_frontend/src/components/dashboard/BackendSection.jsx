import React from 'react';
const BackendSection = ({ projectName, onNext }) => {
    // Mock backend code for demonstration purposes
    const backendCode = `// Backend Code for ${projectName}
  const express = require('express');
  const app = express();
  
  app.get('/', (req, res) => {
    res.send('Welcome to the ${projectName} backend');
  });
  
  app.listen(3000, () => {
    console.log('${projectName} backend running on port 3000');
  });`;
  
    return (
      <div className="p-4">
        <h2 className="text-lg font-semibold">Backend Code for {projectName}</h2>
        <textarea
          value={backendCode}
          readOnly
          className="border border-gray-300 p-2 w-full h-40"
        />
        <button
          onClick={() => onNext(backendCode)}
          className="bg-teal-400 text-white p-2 rounded mt-4"
        >
          Generate Files
        </button>
      </div>
    );
};

export default BackendSection;
