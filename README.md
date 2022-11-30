# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
npx hardhat run --network localhost ./scripts/1_deploy.js
npx hardhat compile     
npx hardhat console --network localhost  
const bal = await ethers.provider.getBalance(accountSigners[0])
const accountSigners = await ethers.getSigners()
const token = await ethers.getContractAt('Token','0x5fbdb2315678afecb367f032d93f642f64180aa3')
npx hardhat test
```
