import React from 'react';
import Header from './Landing/Header';
import Footer from './Landing/Footer';
import coinLogo from '../images/gchcoinfinale.png'; // Replace with your coin logo path
import coinAvatar from '../images/coin.webp';  // Replace with your coin avatar path

const GCHCoinInfo = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section id="gch-coin-info" className="bg-gray-100 py-12 px-6 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-blue-800 mb-8">About GCH Coin</h2>

            {/* Section for large coin logo */}
            <div className="flex justify-center mb-8">
              <img
                src={coinLogo}
                alt="GCH Coin Logo"
                className="max-w-md h-auto shadow-lg rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>

            <p className="text-lg text-gray-700 mb-6">
              The GCH Coin is a revolutionary digital asset designed to power the Gain Chain ecosystem. With
              a focus on decentralization, transparency, and community governance, GCH Coin is a cornerstone
              of our commitment to building a blockchain-powered future.
            </p>

            {/* Section for coin avatar */}
            <div className="flex justify-center mb-8">
              <img
                src={coinAvatar}
                alt="GCH Coin Avatar"
                className="w-32 h-32 object-cover shadow-lg rounded-full border-4 border-blue-800 hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-semibold text-blue-700 mb-4">How It Works</h3>
                <p className="text-md text-gray-700 mb-4">
                  GCH Coin can be earned through various activities within the Gain Chain ecosystem, including
                  content creation, user engagement, and participation in community initiatives. The coin's
                  utility extends beyond mere transactions; it is a tool for empowering users and fostering a
                  vibrant and participatory ecosystem.
                </p>
                <p className="text-md text-gray-700 mb-4">
                  Users can leverage GCH Coin to unlock exclusive features, participate in governance decisions,
                  and access special community events. The coin's ecosystem encourages sustainable growth and
                  benefits for all members.
                </p>
                <p className="text-md text-gray-700 mb-4">
                  With GCH Coin, every action contributes to a greater cause, rewarding users for engaging
                  in a decentralized, transparent, and user-driven platform.
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-blue-700 mb-4">Tokenomics</h3>
                <ul className="text-md text-gray-700 space-y-2">
                  <li><strong>Total Supply:</strong> 1 Billion GCH Coins</li>
                  <li><strong>Initial Circulation:</strong> 100 Million GCH Coins</li>
                  <li><strong>Distribution:</strong> 
                    50% Community Rewards, 20% Team, 15% Partnerships, 10% Reserve, 5% Development Fund
                  </li>
                  <li><strong>Transaction Fee:</strong> 1% for network sustainability</li>
                  <li><strong>Governance:</strong> Community voting on proposals to enhance platform development</li>
                  <li><strong>Staking:</strong> Opportunities to stake GCH Coins for passive income and voting power</li>
                  <li><strong>Incentives:</strong> Rewards for contributors, developers, and top community members</li>
                </ul>
                <p className="text-md text-gray-700 mt-4">
                  The GCH Coin ecosystem is designed to ensure maximum utility and growth while maintaining
                  transparency in every step. The coin also supports integration with other blockchain projects, 
                  opening up new opportunities for cross-chain collaboration.
                </p>
              </div>
            </div>

            {/* Call to action section */}
            <div className="mt-8 text-center bg-blue-800 text-white py-6 px-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-lg font-semibold mb-4">Ready to join the future of decentralized communities?</p>
              <p className="text-md mb-4">Start engaging, earning, and making a difference with GCH Coin today!</p>
              <a href="/signup" className="inline-block bg-teal-500 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:bg-teal-600 transition-all">
                Get Started
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GCHCoinInfo;
