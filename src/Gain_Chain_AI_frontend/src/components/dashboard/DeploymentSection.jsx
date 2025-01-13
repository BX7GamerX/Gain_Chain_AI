import React, { useState } from "react";

const DeploymentSection = ({ projectName }) => {
    const [isDeployToChain, setIsDeployToChain] = useState(false);
    const [domain, setDomain] = useState("");
  
    const handleDeploy = () => {
      if (isDeployToChain && domain) {
        alert(`Deploying ${projectName} to ${domain}`);
      } else {
        alert("Please ensure all fields are filled.");
      }
    };
  
    return (
      <div className="p-4">
        <h2 className="text-lg font-semibold">Deploy Your Project</h2>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={isDeployToChain}
            onChange={() => setIsDeployToChain(!isDeployToChain)}
            className="mr-2"
          />
          <label className="text-gray-600">
            Deploy to blockchain (ICP with Cycles)
          </label>
        </div>
  
        {isDeployToChain && (
          <div className="my-4">
            <label className="block text-gray-600">Select Domain</label>
            <select
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="border border-gray-300 p-2 w-full"
            >
              <option value="">Select Domain</option>
              <option value="mswendoh.com">mswendoh.com</option>
              <option value="mswendoh.world">mswendoh.world</option>
              <option value="example.com">example.com</option>
            </select>
          </div>
        )}
  
        <button
          onClick={handleDeploy}
          className="bg-teal-400 text-white p-2 rounded mt-4"
        >
          Deploy
        </button>
      </div>
    );
};

export default DeploymentSection;
