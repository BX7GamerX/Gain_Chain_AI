const ConversionTool = ({ rate, onConvert }) => {
    const [amount, setAmount] = React.useState("");
    const [convertTo, setConvertTo] = React.useState("GCH");
  
    const handleConvert = () => {
      if (!amount) return;
      onConvert(amount, convertTo);
    };
  
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-xl font-bold">Convert Tokens</h3>
        <div className="flex items-center mt-4">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="border p-2 rounded-lg w-full"
          />
          <select
            value={convertTo}
            onChange={(e) => setConvertTo(e.target.value)}
            className="border p-2 rounded-lg ml-2"
          >
            <option value="GCH">To GCH</option>
            <option value="ICP">To ICP</option>
          </select>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Current rate: 1 ICP = {rate} GCH
        </p>
        <button
          onClick={handleConvert}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Convert
        </button>
      </div>
    );
  };
  
  export default ConversionTool;
  