const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.provider.getBalance(deployer.getAddress());
  
    console.log("Deploying contracts with account: ", deployer.getAddress());
    console.log("Account balance: ", accountBalance.toString());
  
    //const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    //const waveContract = await waveContractFactory.deploy();
    //await waveContract.deployed();
    const waveContract = await hre.ethers.deployContract("WavePortal");
    await waveContract.waitForDeployment();
    
    console.log("WavePortal address: ", await waveContract.getAddress());
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