import React from "react";
import { BsFolder } from "react-icons/bs"; // Import a folder icon from react-icons
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook for navigation

const MyProjects = ({ projects }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleFolderClick = (projectName) => {
    // Navigate to the folder's details page
    navigate(`/folder/${projectName}`);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-md p-4 flex flex-col items-center justify-center shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => handleFolderClick(project.name)}
          >
            <div className="h-24 w-24 flex items-center justify-center mb-2">
              <BsFolder className="text-gray-600 text-6xl" /> {/* Display the folder icon */}
            </div>
            <span className="text-center font-semibold mt-2">{project.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
