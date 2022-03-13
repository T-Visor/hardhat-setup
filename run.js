const main = async () => {
  contractName = ""; // TODO: Put contract address name here

  const [owner] = await hre.ethers.getSigners();

  // Deploy the smart contract
  const contractFactory = await hre.ethers.getContractFactory(contractName);
  const contract = await contractFactory.deploy();
  await contract.deployed();
  console.log("Contract deployed to:", contract.address, "\n");
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
