import React, { useState } from "react";
import { HttpAgent } from "@dfinity/agent";

const ConnectICPWallet = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [balance, setBalance] = useState(null);

  const connectWallet = async () => {
    try {
      if (!window.ic?.plug) {
        alert("Please install Plug Wallet to proceed.");
        return;
      }

      await window.ic.plug.requestConnect();
      const principal = await window.ic.plug.agent.getPrincipal();
      setWalletAddress(principal.toText());

      // Fetch balance (example with ICP tokens)
      const agent = new HttpAgent({ host: "https://icp0.io" });
      const balanceResponse = await agent.queryBalance(walletAddress);
      setBalance(balanceResponse);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  return (
    <div>
      {!walletAddress ? (
        <button
          onClick={connectWallet}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Connect ICP Wallet
        </button>
      ) : (
        <div>
          <p>Wallet Address: {walletAddress}</p>
          <p>Balance: {balance} ICP</p>
        </div>
      )}
    </div>
  );
};

export default ConnectICPWallet;
