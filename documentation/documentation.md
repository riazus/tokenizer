# Token Riazus42 Documentation

## Overview

The Token Riazus42 contract leverages the ERC20 standard from the OpenZeppelin contracts library. It includes all standard ERC20 methods while modifying the "Mint" function to incorporate an ownership mechanism.

## Ownership

Ownership is assigned to the account that deploys the contract, effectively making the deployer the owner. This design ensures that the initial control of the contract's functionalities, including minting tokens, is exclusively held by the deployer.

## Prerequisites

Before deployment, ensure that the `.env` file is located within the `code/` directory. Please note that executing the following commands may require superuser (`sudo`) privileges.

## Installation and Compilation

1. Install necessary packages:
   ```
   npm install
   ```

2. Compile the contract using Hardhat:
   ```
   npx hardhat compile
   ```

## Deployment

### Local Deployment

To deploy the Token Riazus42 contract on a local network, follow these steps:

1. Start a local Ethereum node:
   ```
   npx hardhat node
   ```

2. Deploy the contract to the local network:
   ```
   npx hardhat run ../deployments/deploy.js --network localhost
   ```

### Test Network Deployment

To deploy the contract on the Sepolia test network, use the following command:

```
npx hardhat run ../deployments/deploy.js --network sepolia
```

Ensure you have configured your Hardhat environment to interact with the Sepolia network before executing the deployment command.