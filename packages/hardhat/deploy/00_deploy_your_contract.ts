import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const BATCH_NUMBER = "8";

const deployAllContracts: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Deploy the original BatchRegistry contract
  const batchRegistryDeployment = await deploy("BatchRegistry", {
    from: deployer,
    args: [deployer, BATCH_NUMBER],
    log: true,
    autoMine: true,
  });

  const batchRegistryAddress = batchRegistryDeployment.address;
  console.log("\nBatchRegistry deployed to:", batchRegistryAddress);

  // Deploy the MemberList contract
  const memberListDeployment = await deploy("MemberList", {
    from: deployer,
    args: [deployer, BATCH_NUMBER],
    log: true,
    autoMine: true,
  });

  const memberListAddress = memberListDeployment.address;
  console.log("MemberList deployed to:", memberListAddress);

  // Deploy the CheckIn contract using the MemberList address
  const checkInDeployment = await deploy("CheckIn", {
    from: deployer,
    args: [memberListAddress], // Use MemberList address here
    log: true,
    autoMine: true,
  });

  const checkInAddress = checkInDeployment.address;
  console.log("CheckIn deployed to:", checkInAddress);

  // Get the deployed contracts to interact with them after deploying.
  const memberList = await hre.ethers.getContract<Contract>("MemberList", deployer);
  await hre.ethers.getContract<Contract>("CheckIn", deployer);
  console.log("\nMemberList deployed to:", await memberList.getAddress());
  console.log("Remember to update the allow list!\n");

  // The GraduationNFT contract is deployed on the BatchRegistry constructor.
  const batchGraduationNFTAddress = await memberList.batchGraduationNFT();
  console.log("BatchGraduation NFT deployed to:", batchGraduationNFTAddress, "\n");
};

export default deployAllContracts;
deployAllContracts.tags = ["BatchRegistry", "MemberList", "CheckIn"];
