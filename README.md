# Hardhat get Eth price with ChainLink

## Deploy on Local Blockchain

```
yarn hardhat node
```

## Deploy on Goerli

```
yarn hardhat deploy --network goerli
```

## Test on Local Blockchain

The interface 'contracts/test/MockV3Aggregator.sol' allows to test the PriceFeed on the local Blockchain

```
yarn hardhat test
```
