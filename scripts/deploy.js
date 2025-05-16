const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying InsurancePool contract to Core Testnet 2...");

  // Get the contract factory
  const InsurancePool = await ethers.getContractFactory("InsurancePool");
  
  // Deploy the contract
  const insurancePool = await InsurancePool.deploy();
  
  // Wait for deployment to complete
  await insurancePool.deployed();

  console.log(`InsurancePool deployed to: ${insurancePool.address}`);
  console.log("Deployment transaction:", insurancePool.deployTransaction.hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
