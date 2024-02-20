import { ethers } from "hardhat";

async function main() {
   const lockDealNFt = ""
   const collateralProvider = ""

  const RefundProvider = await ethers.getContractFactory("RefundProvider");
  const refundProvider = await RefundProvider.deploy(lockDealNFt, collateralProvider);
  await refundProvider.deployed();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
