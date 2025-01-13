import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { PieChart, Pie, Cell, Tooltip as PieTooltip, Legend as PieLegend } from "recharts";

const OverviewPage = ({ user }) => {
  const [userData, setUserData] = useState([]);
  const [coinsData, setCoinsData] = useState([]);

  // Mock data for the graphs
  const activityData = [
    { name: "Jan", posts: 20, likes: 50, shares: 15 },
    { name: "Feb", posts: 25, likes: 60, shares: 20 },
    { name: "Mar", posts: 30, likes: 70, shares: 25 },
  ];

  const blockchainData = [
    { name: "Jan", coins: 10 },
    { name: "Feb", coins: 15 },
    { name: "Mar", coins: 20 },
  ];

  // Mock Fetch: Replace with API call
  useEffect(() => {
    setUserData(activityData); // Fetch activity data
    setCoinsData(blockchainData); // Fetch coins data
  }, []);

  // Data for Pie (Doughnut) Chart
  const pieData = [
    { name: "Posts", value: activityData.reduce((acc, data) => acc + data.posts, 0) },
    { name: "Likes", value: activityData.reduce((acc, data) => acc + data.likes, 0) },
    { name: "Shares", value: activityData.reduce((acc, data) => acc + data.shares, 0) },
  ];

  // Color scheme for the pie chart
  const COLORS = ["#00bfae", "#4db6ac", "#26a69a"];

  return (
    <div className="bg-white text-teal-100 min-h-screen px-6 py-8">
      {/* Main Overview Section with White Background */}
      <div className="bg-white text-teal-900 p-6 rounded-lg shadow-lg">
        {/* Welcome Message */}
        <div className="mb-8">
          <p className="mt-2 text-teal-600">
            Explore your activity and contributions in the Gain Chain AI and Blockchain community.
          </p>
        </div>

        {/* Main Graph Section */}
        <div className="bg-teal-800 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-teal-50 mb-4">Your Activity Over Time</h2>
          <LineChart
            width={800}
            height={300}
            data={userData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="posts" stroke="#00bfae" strokeWidth={2} />
            <Line type="monotone" dataKey="likes" stroke="#4db6ac" strokeWidth={2} />
            <Line type="monotone" dataKey="shares" stroke="#26a69a" strokeWidth={2} />
          </LineChart>
        </div>

        {/* Doughnut Chart Section */}
        <div className="bg-teal-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-teal-50 mb-4">Activity Breakdown</h2>
          <PieChart width={400} height={400}>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={100}
              outerRadius={140}
              fill="#00bfae"
              paddingAngle={5}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <PieTooltip />
            <PieLegend iconSize={20} layout="vertical" verticalAlign="middle" align="right" />
          </PieChart>
        </div>

        {/* Additional AI and Blockchain Highlights */}
        <div className="mt-12 bg-teal-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-teal-50 mb-4">Community Highlights</h2>
          <ul className="text-teal-300 space-y-3">
            <li>📈 Total Active Users: <span className="text-teal-200">5,230</span></li>
            <li>🔗 Latest Blockchain Transactions: <span className="text-teal-200">1,045</span></li>
            <li>🤖 AI-Generated Insights: <span className="text-teal-200">123 summaries</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
