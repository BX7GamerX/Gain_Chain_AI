import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  FolderPlus,
  Folder,
  MessageCircle,
  LogOut,
  Settings as SettingsIcon,
  BookOpen,
} from "lucide-react";
import Sidebar from "../components/dashboard/Sidebar.jsx";
import Header from "../components/dashboard/Header.jsx";
import Overview from "../components/dashboard/Overview.jsx";
import NewProject from "../components/dashboard/newproject.jsx";
import MyProjects from "../components/dashboard/MyProjects.jsx";
import ChatSection from "../components/dashboard/ChatSection.jsx";
import Settings from "./dashboard/Settings.jsx";
import CourseSection from "./dashboard/CourseSection.jsx";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const user = {
    name: "John Doe",
    profilePicture: "path/to/profile/picture.jpg",
  };

  const projects = {
    active: [
      { id: 1, name: "Project 1", description: "Description of Project 1" },
      { id: 2, name: "Project 2", description: "Description of Project 2" },
    ],
  };

  const courses = {
    completed: 5,
    ongoing: [
      { id: 1, title: "Course 1", progress: 75 },
      { id: 2, title: "Course 2", progress: 50 },
    ],
  };

  const gchCoins = {
    total: 100,
    fragments: 20,
  };

  const tabs = [
    { label: "Overview", icon: Home },
    { label: "New Project", icon: FolderPlus },
    { label: "My Projects", icon: Folder },
    { label: "Chat Section", icon: MessageCircle },
    { label: "Settings", icon: SettingsIcon },
    { label: "Courses", icon: BookOpen },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return <Overview user={user} projects={projects} courses={courses} gchCoins={gchCoins} />;
      case "New Project":
        return <NewProject />;
      case "My Projects":
        return <MyProjects projects={projects.active} />;
      case "Chat Section":
        return <ChatSection />;
      case "Settings":
        return <Settings />;
      case "Courses":
        return <CourseSection />;
      default:
        return <Overview user={user} projects={projects} courses={courses} gchCoins={gchCoins} />;
    }
  };

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
