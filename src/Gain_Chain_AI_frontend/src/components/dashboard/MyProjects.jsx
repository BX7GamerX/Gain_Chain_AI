import React from "react";
import { useNavigate } from "react-router-dom";

const MyProjects = ({ projects }) => {
  const navigate = useNavigate();

  const handleProjectClick = (projectName) => {
    navigate(`/project/${projectName}`);
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#111418] dark justify-between group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
    >
      <div>
        <div className="flex items-center bg-[#111418] p-4 pb-2 justify-between">
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">
            Dashboard
          </h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
              <div
                className="text-white"
                data-icon="MagnifyingGlass"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-stretch justify-between gap-4 rounded-xl">
            <div className="flex flex-[2_2_0px] flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-white text-base font-bold leading-tight">
                  New Project
                </p>
                <p className="text-[#9dabb8] text-sm font-normal leading-normal">
                  Start a new project with our AI tools
                </p>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#293038] text-white text-sm font-medium leading-normal w-fit">
                <span className="truncate">Get Started</span>
              </button>
            </div>
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/sdxl10/eeb704c2-5cc2-4be6-9fe8-6e190d110715.png")',
              }}
            ></div>
          </div>
        </div>
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Recent Projects
        </h2>
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-[#111418] px-4 min-h-[72px] py-2 cursor-pointer hover:bg-[#293038] transition-colors"
            onClick={() => handleProjectClick(project.name)}
          >
            <div className="flex flex-col justify-center">
              <p className="text-white text-base font-medium leading-normal line-clamp-1">
                {project.name}
              </p>
              <p className="text-[#9dabb8] text-sm font-normal leading-normal line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="flex gap-2 border-t border-[#293038] bg-[#1c2126] px-4 pb-3 pt-2">
          <a
            className="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-white"
            href="#"
          >
            <div
              className="text-white flex h-8 items-center justify-center"
              data-icon="House"
              data-size="24px"
              data-weight="fill"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
              </svg>
            </div>
            <p className="text-white text-xs font-medium leading-normal tracking-[0.015em]">
              Home
            </p>
          </a>
          <a
            className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#9dabb8]"
            href="#"
          >
            <div
              className="text-[#9dabb8] flex h-8 items-center justify-center"
              data-icon="Folder"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM40,56H92.69l16,16H40ZM216,200H40V88H216Z"></path>
              </svg>
            </div>
            <p className="text-[#9dabb8] text-xs font-medium leading-normal tracking-[0.015em]">
              Projects
            </p>
          </a>
          <a
            className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#9dabb8]"
            href="#"
          >
            <div
              className="text-[#9dabb8] flex h-8 items-center justify-center"
              data-icon="Robot"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-28,16v24H120V152ZM80,164a12,12,0,0,1,12-12h12v24H92A12,12,0,0,1,80,164Zm84,12H152V152h12a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z"></path>
              </svg>
            </div>
            <p className="text-[#9dabb8] text-xs font-medium leading-normal tracking-[0.015em]">
              AI
            </p>
          </a>
          <a
            className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#9dabb8]"
            href="#"
          >
            <div
              className="text-[#9dabb8] flex h-8 items-center justify-center"
              data-icon="Bell"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
              </svg>
            </div>
            <p className="text-[#9dabb8] text-xs font-medium leading-normal tracking-[0.015em]">
              Notifications
            </p>
          </a>
          <a
            className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#9dabb8]"
            href="#"
          >
            <div
              className="text-[#9dabb8] flex h-8 items-center justify-center"
              data-icon="User"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
              </svg>
            </div>
            <p className="text-[#9dabb8] text-xs font-medium leading-normal tracking-[0.015em]">
              Me
            </p>
          </a>
        </div>
        <div className="h-5 bg-[#1c2126]"></div>
      </div>
    </div>
  );
};

export default MyProjects;
