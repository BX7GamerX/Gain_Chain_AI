import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  FolderPlus,
  Folder,
  MessageCircle,
  LogOut,
  Settings as SettingsIcon,
} from "lucide-react";
import Sidebar from "../components/dashboard/Sidebar.jsx";
import Header from "../components/dashboard/Header.jsx";
import Overview from "../components/dashboard/Overview.jsx";
import NewProject from "../components/dashboard/newproject.jsx";
import MyProjects from "../components/dashboard/MyProjects.jsx";
import ChatSection from "../components/dashboard/ChatSection.jsx";
import Settings from "./dashboard/Settings.jsx";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const mockData = {
    stats: {
      activeJobs: 12,
      applicants: 150,
      hires: 20,
    },
    newProjects: [
      { name: "Blockchain Explorer", status: "Ongoing" },
      { name: "Smart Contract Manager", status: "Completed" },
    ],
    myProjects: [
      { name: "Portfolio Redesign", status: "Completed" },
      { name: "Recruitment App", status: "In Progress" },
    ],
    chatMessages: [
      { sender: "Team Lead", message: "Don't forget the roadmap meeting!" },
      { sender: "Developer", message: "I'll update the feature by EOD." },
    ],
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return <Overview />;
      case "New Project":
        return <NewProject projects={mockData.newProjects} />;
      case "My Projects":
        return <MyProjects projects={mockData.myProjects} />;
      case "Chat Section":
        return <ChatSection messages={mockData.chatMessages} />;
      case "Settings":
        return <Settings />;
      case "Logout":
        // Simulate logout
        window.location.href = "/login";
        break;
      default:
        return <Overview stats={mockData.stats} />;
    }
  };

  const tabs = [
    { icon: Home, label: "Overview" },
    { icon: FolderPlus, label: "New Project" },
    { icon: Folder, label: "My Projects" },
    { icon: MessageCircle, label: "Chat Section" },
    { icon: LogOut, label: "Logout" },
    { icon: SettingsIcon, label: "Settings" },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Header
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        notificationCount={3}
      />
      <div className="flex flex-1">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={tabs}
          isOpen={isSidebarOpen}
        />
        <main className="flex-1 overflow-y-auto bg-white dark:bg-[#1c1f24]">
          <div className="container mx-auto px-6 py-8">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-3xl font-bold mb-6 text-teal-600">
                {activeTab}
              </h1>
              {renderContent()}
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
