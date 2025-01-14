import React from 'react';

const Overview = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#111418] dark justify-between group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
    >
      <div>
        <div className="flex items-center bg-[#111418] p-4 pb-2 justify-between">
          <div className="text-white flex size-12 shrink-0 items-center" data-icon="ArrowLeft" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Deployed Projects</h2>
        </div>
        <div className="flex flex-wrap gap-4 px-4 py-6">
          <div className="flex min-w-72 flex-1 flex-col gap-2">
            <p className="text-white text-base font-medium leading-normal">GCH Balance</p>
            <p className="text-white tracking-light text-[32px] font-bold leading-tight truncate">5,943</p>
            <div className="flex gap-1">
              <p className="text-[#9dabb8] text-base font-normal leading-normal">Last 30 Days</p>
              <p className="text-[#0bda5b] text-base font-medium leading-normal">+12%</p>
            </div>
            <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
              <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path
                  d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                  fill="url(#paint0_linear_1131_5935)"
                ></path>
                <path
                  d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                  stroke="#9dabb8"
                  strokeWidth="3"
                  strokeLinecap="round"
                ></path>
                <defs>
                  <linearGradient id="paint0_linear_1131_5935" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#293038"></stop>
                    <stop offset="1" stopColor="#293038" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex justify-around">
                <p className="text-[#9dabb8] text-[13px] font-bold leading-normal tracking-[0.015em]">1D</p>
                <p className="text-[#9dabb8] text-[13px] font-bold leading-normal tracking-[0.015em]">1W</p>
                <p className="text-[#9dabb8] text-[13px] font-bold leading-normal tracking-[0.015em]">1M</p>
                <p className="text-[#9dabb8] text-[13px] font-bold leading-normal tracking-[0.015em]">3M</p>
                <p className="text-[#9dabb8] text-[13px] font-bold leading-normal tracking-[0.015em]">1Y</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#111418] px-4 min-h-[72px] py-2 justify-between">
          <div className="flex flex-col justify-center">
            <p className="text-white text-base font-medium leading-normal line-clamp-1">Project 1</p>
            <p className="text-[#9dabb8] text-sm font-normal leading-normal line-clamp-2">Deployed</p>
          </div>
          <div className="shrink-0">
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#293038] text-white text-sm font-medium leading-normal w-fit"
            >
              <span className="truncate">Open</span>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#111418] px-4 min-h-[72px] py-2 justify-between">
          <div className="flex flex-col justify-center">
            <p className="text-white text-base font-medium leading-normal line-clamp-1">Project 2</p>
            <p className="text-[#9dabb8] text-sm font-normal leading-normal line-clamp-2">Deployed</p>
          </div>
          <div className="shrink-0">
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#293038] text-white text-sm font-medium leading-normal w-fit"
            >
              <span className="truncate">Open</span>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#111418] px-4 min-h-[72px] py-2 justify-between">
          <div className="flex flex-col justify-center">
            <p className="text-white text-base font-medium leading-normal line-clamp-1">Project 3</p>
            <p className="text-[#9dabb8] text-sm font-normal leading-normal line-clamp-2">Deployed</p>
          </div>
          <div className="shrink-0">
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#293038] text-white text-sm font-medium leading-normal w-fit"
            >
              <span className="truncate">Open</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-2 border-t border-[#293038] bg-[#1c2126] px-4 pb-3 pt-2">
          <a className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#9dabb8]" href="#">
            <div className="text-[#9dabb8] flex h-8 items-center justify-center" data-icon="House" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"
                ></path>
              </svg>
            </div>
            <p className="text-[#9dabb8] text-xs font-medium leading-normal tracking-[0.015em]">Home</p>
          </a>
          <a className="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-white" href="#">
            <div className="text-white flex h-8 items-center justify-center" data-icon="Briefcase" data-size="24px" data-weight="fill">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M152,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,112Zm80-40V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56H80V48a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v8h40A16,16,0,0,1,232,72ZM96,56h64V48a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8Zm120,57.61V72H40v41.61A184,184,0,0,0,128,136,184,184,0,0,0,216,113.61Z"
                ></path>
              </svg>
            </div>
            <p className="text-white text-xs font-medium leading-normal tracking-[0.015em]">Projects</p>
          </a>
          <a className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#9dabb8]" href="#">
            <div className="text-[#9dabb8] flex h-8 items-center justify-center" data-icon="ShoppingBag" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"
                ></path>
              </svg>
            </div>
            <p className="text-[#9dabb8] text-xs font-medium leading-normal tracking-[0.015em]">Marketplace</p>
          </a>
          <a className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#9dabb8]" href="#">
            <div className="text-[#9dabb8] flex h-8 items-center justify-center" data-icon="UserCircle" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"
                ></path>
              </svg>
            </div>
            <p className="text-[#9dabb8] text-xs font-medium leading-normal tracking-[0.015em]">Profile</p>
          </a>
        </div>
        <div className="h-5 bg-[#1c2126]"></div>
      </div>
    </div>
  );
};

export default Overview;