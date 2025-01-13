import React, { useState } from "react";

const CodeGenerationPrompt = ({ onNext }) => {
  const [customization, setCustomization] = useState("");

  const handleProceed = () => {
    if (customization) {
      onNext(customization);
    } else {
      alert("Please provide the required information before proceeding.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Code Generation Prompt</h2>
      <p className="my-2">Provide any customization or details for the code generation:</p>
      <textarea
        value={customization}
        onChange={(e) => setCustomization(e.target.value)}
        placeholder="Enter your customization details here..."
        className="border border-gray-300 p-2 w-full h-24 my-2"
      />
      <button
        onClick={handleProceed}
        className="bg-teal-400 text-white p-2 rounded"
      >
        Proceed to Code Generation
      </button>
    </div>
  );
};

export default CodeGenerationPrompt;
