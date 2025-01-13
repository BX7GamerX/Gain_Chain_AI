import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const FolderPage = () => {
  const { folderName } = useParams(); // Get the folder name from the URL
  const navigate = useNavigate(); // Hook for navigation

  // Sample data for folder contents
  const folderContents = [
    "File 1",
    "File 2",
    "File 3",
    "File 4",
  ];

  // Sample data for other files the user has
  const otherFiles = [
    "File 5",
    "File 6",
    "File 7",
    "File 8",
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-teal-600 p-4 flex justify-between items-center shadow-md">
        <button
          onClick={() => navigate("/profile")}
          className="text-white text-lg font-semibold hover:bg-teal-500 px-3 py-2 rounded"
        >
          Back to Profile
        </button>
        <h1 className="text-white text-xl font-bold">Folder: {folderName}</h1>
      </nav>

      {/* Main Content */}
      <div className="p-6">
        {/* Current Folder Contents */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-teal-800">Contents of {folderName}</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {folderContents.map((file, index) => (
              <li key={index} className="bg-white p-4 shadow rounded hover:shadow-lg transition-shadow">
                <p className="text-center text-teal-800 font-medium">{file}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Other Files Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-800">Other Files</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherFiles.map((file, index) => (
              <li
                key={index}
                className="bg-white p-4 shadow rounded hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => navigate(`/folder/${file}`)} // Navigate to the clicked file's folder route
              >
                <p className="text-center text-teal-800 font-medium">{file}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FolderPage;
