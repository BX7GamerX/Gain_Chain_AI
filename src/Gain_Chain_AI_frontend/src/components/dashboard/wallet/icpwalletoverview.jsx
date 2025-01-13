const ICPWalletOverview = ({ walletAddress, balance, onConnect }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-xl font-bold">ICP Wallet</h3>
        {walletAddress ? (
          <div>
            <p>
              <span className="font-semibold">Address: </span>
              <span
                className="text-blue-500 underline cursor-pointer"
                onClick={() => navigator.clipboard.writeText(walletAddress)}
              >
                {walletAddress}
              </span>
            </p>
            <p className="mt-2">
              <span className="font-semibold">Balance: </span>
              {balance} ICP
            </p>
          </div>
        ) : (
          <div className="mt-4">
            <button
              onClick={onConnect}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Connect ICP Wallet
            </button>
          </div>
        )}
      </div>
    );
  };
  
  export default ICPWalletOverview;
  