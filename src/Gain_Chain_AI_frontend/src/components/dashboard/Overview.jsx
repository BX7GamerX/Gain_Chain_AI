import React from 'react';
import { motion } from 'framer-motion';
import { PlusCircle } from 'lucide-react';

const Overview = ({ user, projects, courses, gchCoins, onCreateProject }) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#111418] text-white p-6">
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>
        <div className="flex items-center mt-2">
          <img src={user.profilePicture} alt="Profile" className="w-12 h-12 rounded-full mr-3" />
          <div>
            <p>Completed Courses: {courses.completed}</p>
            <p>Total GCH Coins: {gchCoins.total}</p>
            <p>Active Projects: {projects.active.length}</p>
          </div>
        </div>
      </div>

      {/* Project Management Overview */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Project Management</h2>
        <div className="flex justify-between items-center mb-4">
          <button onClick={onCreateProject} className="flex items-center text-teal-500 hover:underline">
            <PlusCircle className="mr-2" />
            + Create New Project
          </button>
        </div>
        <div className="overflow-y-auto max-h-60">
          {projects.active.map((project) => (
            <div key={project.id} className="flex justify-between items-center bg-[#293038] p-4 mb-2 rounded">
              <div>
                <h3 className="font-medium">{project.name}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
              <div>
                <button className="bg-teal-500 text-white px-2 py-1 rounded">View</button>
                <button className="bg-blue-500 text-white px-2 py-1 rounded ml-2">Edit</button>
                <button className="bg-green-500 text-white px-2 py-1 rounded ml-2">Deploy</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Progress */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Learning Progress</h2>
        {courses.ongoing.map((course) => (
          <div key={course.id} className="bg-[#293038] p-4 mb-2 rounded">
            <h3 className="font-medium">{course.title}</h3>
            <p className="text-sm">Progress: {course.progress}%</p>
            <button className="bg-teal-500 text-white px-2 py-1 rounded mt-2">Continue Learning</button>
          </div>
        ))}
      </div>

      {/* GCH Coins Tracker */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">GCH Coins Tracker</h2>
        <div className="bg-[#293038] p-4 rounded">
          <p className="text-lg">Current Balance: {gchCoins.total}</p>
          <p className="text-sm">Coin Fragments: {gchCoins.fragments}</p>
          <button className="bg-teal-500 text-white px-2 py-1 rounded mt-2">Convert Fragments</button>
        </div>
      </div>

      {/* Announcements and Updates */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Announcements</h2>
        <div className="bg-[#293038] p-4 rounded">
          <p className="text-sm">Stay tuned for new courses and features coming soon!</p>
        </div>
      </div>

      {/* Quick Navigation Bar */}
      <div className="flex justify-around bg-[#1c2126] p-4 rounded">
        <button className="text-[#9dabb8]">Projects</button>
        <button className="text-[#9dabb8]">Courses</button>
        <button className="text-[#9dabb8]">Rewards</button>
        <button className="text-[#9dabb8]">Settings</button>
        <button className="text-[#9dabb8]">Premium Features</button>
      </div>

      {/* Floating Helper AI Chatbot */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-teal-500 text-white p-3 rounded-full shadow-lg">
          <span className="material-icons">chat</span>
        </button>
      </div>
    </div>
  );
};

export default Overview;