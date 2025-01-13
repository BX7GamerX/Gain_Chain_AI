import React from "react";

const FrontendCanvasSection = ({ projectName, onNext }) => {
    // Mock frontend component structure
    const frontendCode = `// Frontend Code for ${projectName}
  import React from 'react';
  
  const App = () => {
    return (
      <div>
        <header>
          <h1>Welcome to ${projectName}</h1>
        </header>
        <main>
          <p>This is a mock frontend for ${projectName}</p>
        </main>
      </div>
    );
  };
  
  export default App;`;
  
    return (
      <div className="p-4">
        <h2 className="text-lg font-semibold">Adjust Your Frontend Canvas</h2>
        <div className="border border-gray-300 p-4 h-64 mb-4">
          {/* Mock Canvas UI */}
          <div className="flex justify-center items-center h-full text-gray-600">
            <span className="font-semibold">Canvas Preview (Mock)</span>
          </div>
        </div>
        <textarea
          value={frontendCode}
          readOnly
          className="border border-gray-300 p-2 w-full h-40"
        />
        <button
          onClick={() => onNext(frontendCode)}
          className="bg-teal-400 text-white p-2 rounded mt-4"
        >
          Generate Frontend Files
        </button>
      </div>
    );
};

export default FrontendCanvasSection;
