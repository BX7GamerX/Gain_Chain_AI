import React, { useEffect, useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
      <div className="flex items-center justify-between">
        <span className="text-lg">Dark Mode</span>
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className={`w-10 h-6 flex items-center rounded-full p-1 transition ${
            darkMode ? "bg-orange-500" : "bg-gray-300"
          }`}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
              darkMode ? "translate-x-4" : "translate-x-0"
            }`}
          ></div>
        </button>
      </div>
    </div>
  );
};

export default Settings;
