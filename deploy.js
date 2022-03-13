const main = async () => {
  const contractName = ""; // TODO: Put contract address name here
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  // Display account information of the deployer.
  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());

  // Deploy the contract.
  const contractFactory = await hre.ethers.getContractFactory(contractName);
  const contract = await contractFactory.deploy();
  await contract.deployed();

  console.log("Contract address:", contract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
