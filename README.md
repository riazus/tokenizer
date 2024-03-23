# Riazus42 Token

## Introduction

The Riazus42 Token is an ERC20-compliant token built on the Ethereum blockchain. It provides a standard interface for transferring and managing tokens within the Ethereum ecosystem.

## Features

- Token Transfer: The token can be transferred from one Ethereum address to another.
- Token Minting: The token admin can mint new tokens and assign them to specific addresses.
- Token Burning: Token holders can burn their tokens to permanently remove them from circulation.
- Token Approval: Token holders can approve other addresses to spend tokens on their behalf.
- Allowance Mechanism: The approved addresses can spend tokens up to the approved limit.

## Technology Stack

- Ethereum: The Ethereum blockchain was chosen for its well-established ecosystem and wide adoption within the blockchain community.
- Solidity: The smart contract language chosen for its compatibility with the Ethereum Virtual Machine (EVM) and extensive developer support.
- Hardhat: Used for development and deployment of the smart contract. Hardhat provides a powerful and extensible development environment with built-in testing and debugging capabilities.
- OpenZeppelin: The OpenZeppelin library was leveraged to ensure the security and reliability of the smart contract. It provides a collection of pre-audited reusable smart contract components.
- ethers.js: Used to interact with the Ethereum blockchain from JavaScript applications. ethers.js provides a clean and simple API for interacting with smart contracts and sending transactions.

## Getting Started

Follow these steps to get started with the Riazus42 Token:

1. Install dependencies: Run `npm install` to install the required dependencies.
2. Compile the smart contract: Use `npx hardhat compile` to compile the smart contract.
3. Deploy the smart contract: Use `npx hardhat run ../deployments/deploy.js --network <network>` to deploy the smart contract to the Ethereum network. Replace <network> with the desired network name, such as localhost or sepolia.
4. Interact with the smart contract:
   - Test on remix.ethereum.org: You can test the smart contract and its functions on the [remix.ethereum.org](http://remix.ethereum.org) website. Simply copy and paste the smart contract code into the Remix editor, compile it, and interact with the deployed contract.
   - Test in Sepolia network: You can also test the smart contract in the Sepolia network by connecting to your MetaMask wallet and adding the token contract address.
   - Add token to MetaMask: To add the token to your MetaMask wallet, click on "Add Token" and enter the token contract address.
   - Track on Etherscan: You can track the token on Etherscan by searching for the token contract address.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
