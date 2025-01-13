import React, { useState } from "react";

const ProjectNameSection = ({ onNext }) => {
  const [projectName, setProjectName] = useState("");

  const handleSubmit = () => {
    if (projectName) {
      onNext(projectName);
    } else {
      alert("Please provide a project name.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Enter Project Name</h2>
      <input
        type="text"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        placeholder="Enter project name"
        className="border text-black border-gray-300 p-2 w-full my-2"
      />
      <button
        onClick={handleSubmit}
        className="bg-teal-400 text-white p-2 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default ProjectNameSection;
