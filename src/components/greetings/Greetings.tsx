export default function Greetings() {
  const handleLearnMoreClick = () => {
    window.open("https://www.ibm.com/topics/smart-contracts", "_blank");
  };
  return (
    <div
      className="getting-started-page pl-5 pr-5 min-h-screen"
      style={{ marginTop: "20px" }}
    >
      <div className="bg-gray-200 mb-4 p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-2">
          Welcome to the Smart Contracts-based Commitments System
        </h3>
        <h4 className="text-lg">Here's a simple guide to get started!</h4>
      </div>

      <div className="bg-gray-200 mb-4 p-4 rounded-lg">
        <h5 className="text-lg font-bold mb-2">What is a Smart Contract?</h5>
        <p className="text-base">
          Imagine a traditional contract, but instead of being written on paper
          and stored in a drawer, it's coded on a blockchain, a kind of
          immutable and distributed digital ledger. A Smart Contract is a set of
          code that automates the execution and enforcement of agreements
          without the need for intermediaries.
        </p>
      </div>

      <div className="bg-gray-200 mb-4 p-4 rounded-lg">
        <h5 className="text-lg font-bold mb-2">How Does It Work?</h5>
        <ul>
          <li className="flex items-center mb-2">
            <span>
              Contract Creation: First, you and the other party agree on the
              terms of the contract, such as deadlines, conditions, and values.
              These terms are then coded into a Smart Contract.
            </span>
          </li>
          <li className="flex items-center mb-2">
            <span>
              Automatic Execution: Once the contract is activated on the
              blockchain, it goes into action automatically, monitoring whether
              the conditions are met.
            </span>
          </li>
          <li className="flex items-center">
            <span>
              Validation and Enforcement: An automatic validator checks if the
              contract terms have been fulfilled. If yes, the agreed-upon value
              is released to the corresponding party. If not, the value remains
              secure on the blockchain.
            </span>
          </li>
        </ul>
      </div>

      <div className="bg-gray-200 mb-4 p-4 rounded-lg">
        <h5 className="text-lg font-bold mb-2">Why Use Smart Contracts?</h5>
        <ul>
          <li className="flex items-center mb-2">
            <span>
              Security: Since contracts are automatically executed on the
              blockchain, there's no room for manipulation or human error.
            </span>
          </li>
          <li className="flex items-center mb-2">
            <span>
              Transparency: All contract transactions and conditions are visible
              and auditable on the blockchain, ensuring transparency for all
              involved parties.
            </span>
          </li>
          <li className="flex items-center">
            <span>
              Efficiency: Automating contract enforcement saves time and
              resources, eliminating the need for intermediaries.
            </span>
          </li>
        </ul>
        <div>
          <button
            onClick={handleLearnMoreClick}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="bg-gray-200 p-4 rounded-lg">
        <h5 className="text-lg font-bold mb-2">Next Steps:</h5>
        <ul>
          <li className="flex items-center mb-2">
            <span>
              Register: Create an account on our platform to start creating and
              signing contracts.
            </span>
          </li>
          <li className="flex items-center mb-2">
            <span>
              Create a Contract: Use our simple tools to code the terms of your
              contract into a Smart Contract.
            </span>
          </li>
          <li className="flex items-center mb-2">
            <span>
              Sign and Activate: Sign the contract digitally and activate it on
              the blockchain to begin monitoring compliance with the terms.
            </span>
          </li>
          <li className="flex items-center">
            <span>
              Monitor and Receive: Track the contract's progress and
              automatically receive payments when the terms are met.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
