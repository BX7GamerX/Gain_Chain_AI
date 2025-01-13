import React, { useState } from "react";
import ProjectNameSection from "./ProjectNameSection";
import CodeGenerationPrompt from "./Codegeneration"; // Import the new prompt component
import BackendSection from "./BackendSection";
import FrontendCanvasSection from "./FrontendCanvasSection";
import ProjectFileSetupSection from "./ProjectFileSection";
import DeploymentSection from "./DeploymentSection";

const NewProject = () => {
  const [step, setStep] = useState(1);
  const [projectName, setProjectName] = useState("");
  const [customization, setCustomization] = useState(""); // State to capture prompt customization

  const nextStep = (data = "") => {
    if (step === 1) setProjectName(data); // Set project name at step 1
    if (step === 2) setCustomization(data); // Set customization input at step 2
    setStep(step + 1);
  };

  return (
    <div className="p-4 text-black">
      <h1 className="text-2xl font-bold">Project Setup Flow</h1>

      {step === 1 && <ProjectNameSection onNext={nextStep} />}
      {step === 2 && (
        <CodeGenerationPrompt onNext={nextStep} />
      )} {/* Add prompt step */}
      {step === 3 && (
        <BackendSection projectName={projectName} onNext={nextStep} />
      )}
      {step === 4 && (
        <FrontendCanvasSection projectName={projectName} onNext={nextStep} />
      )}
      {step === 5 && (
        <ProjectFileSetupSection projectName={projectName} />
      )}
      {step === 6 && (
        <DeploymentSection projectName={projectName} />
      )}
    </div>
  );
};

export default NewProject;
