import React, { useState } from "react";
import ProjectNameSection from "./ProjectNameSection";
import CodeGenerationPrompt from "./Codegeneration";
import BackendSection from "./BackendSection";
import FrontendCanvasSection from "./FrontendCanvasSection";
import ProjectFileSetupSection from "./ProjectFileSection";
import DeploymentSection from "./DeploymentSection";

const NewProject = () => {
  const [step, setStep] = useState(1);
  const [projectName, setProjectName] = useState("");
  const [customization, setCustomization] = useState("");

  const nextStep = (data = "") => {
    if (step === 1) setProjectName(data);
    if (step === 2) setCustomization(data);
    setStep(step + 1);
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden" style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}>
      <div className="flex items-center bg-[#111418] p-4 pb-2 justify-between">
        <div className="text-white flex size-12 shrink-0 items-center" data-icon="ArrowLeft" data-size="24px" data-weight="regular">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
          </svg>
        </div>
      </div>
      <h1 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">Tell us about your project</h1>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <textarea
            placeholder="What are you trying to build?"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#3c4753] bg-[#1c2126] focus:border-[#3c4753] min-h-36 placeholder:text-[#9dabb8] p-[15px] text-base font-normal leading-normal"
          ></textarea>
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-white text-base font-medium leading-normal pb-2">Project type</p>
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#293038] focus:border-none h-14 placeholder:text-[#9dabb8] p-4 text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <div className="flex items-center gap-4 bg-[#111418] px-4 min-h-14 justify-between">
        <p className="text-white text-base font-normal leading-normal flex-1 truncate">AI-generated code</p>
        <div className="shrink-0">
          <label
            className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-[#293038] p-0.5 has-[:checked]:justify-end has-[:checked]:bg-[#1980e6]"
          >
            <div className="h-full w-[27px] rounded-full bg-white" style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px" }}></div>
            <input type="checkbox" className="invisible absolute" />
          </label>
        </div>
      </div>
      <div className="flex justify-stretch">
        <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-between">
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[#293038] text-white text-base font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Preview results</span>
          </button>
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[#1980e6] text-white text-base font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Generate</span>
          </button>
        </div>
      </div>
      <div className="h-5 bg-[#111418]"></div>
    </div>
  );
};

export default NewProject;
