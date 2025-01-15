import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import nfidLogo from '../images/nfid.png'; // Replace with your NFID logo path
import icpLogo from '../images/icp.png'; // Replace with your ICP logo path
import gchLogo from '../images/gchcoinfinale.png'; // Replace with your GCH Coin logo path

const GCHCoinIntegration = () => {
  // Sample data for coin value fluctuations
  const data = [
    { name: '1H', value: 100 },
    { name: '6H', value: 105 },
    { name: '12H', value: 102 },
    { name: '1D', value: 110 },
    { name: '1W', value: 95 },
    { name: '1M', value: 120 },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#111418] text-white p-6">
      <h2 className="text-3xl font-bold text-center mb-6">GCH Coin Integration</h2>

      {/* Wallet Integration Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-[#293038] p-4 rounded-lg shadow-lg">
          <img src={nfidLogo} alt="NFID" className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-center">Integrate with NFID</h3>
          <p className="text-center">Securely manage your GCH Coins with NFID.</p>
          <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded">Connect</button>
        </div>
        <div className="bg-[#293038] p-4 rounded-lg shadow-lg">
          <img src={icpLogo} alt="ICP" className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-center">Integrate with ICP</h3>
          <p className="text-center">Seamlessly connect your GCH Coins to ICP.</p>
          <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded">Connect</button>
        </div>
        <div className="bg-[#293038] p-4 rounded-lg shadow-lg">
          <img src={gchLogo} alt="GCH Coin" className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-center">Manage GCH Coins</h3>
          <p className="text-center">View and manage your GCH Coin balance.</p>
          <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded">Manage</button>
        </div>
      </div>

      {/* GCH Coin Statistics */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-center mb-4">GCH Coin Statistics</h2>
        <p className="text-center">Total GCH Coins: 1000</p>
        <p className="text-center">Coins Earned from Courses: 200</p>
        <div className="flex justify-center mt-4">
          <button className="bg-teal-500 text-white px-4 py-2 rounded mr-4">Send</button>
          <button className="bg-teal-500 text-white px-4 py-2 rounded">Receive</button>
        </div>
      </div>

      {/* Coin Value Fluctuation Graph */}
      <h2 className="text-2xl font-semibold text-center mb-4">Coin Value Fluctuation</h2>
      <LineChart width={600} height={300} data={data} className="mx-auto">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default GCHCoinIntegration; 