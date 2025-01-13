import React from 'react';
const ProjectFileSetupSection = ({ projectName }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Set Up Your Project Files</h2>
      <p className="my-4">Project: {projectName}</p>
      <button className="bg-teal-400 text-black p-2 rounded mt-4">
        Set Up Files
      </button>
    </div>
  );
};

export default ProjectFileSetupSection;
