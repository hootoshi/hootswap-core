const HootSwapFactory = artifacts.require("HootSwapFactory");

const adminAddress = "0xb2e9ea2CaF0764AAb92085828Db7745adB3b65E8";
const feeCollectingAddress = "0xb2e9ea2CaF0764AAb92085828Db7745adB3b65E8";

module.exports = async (deployer) => {
  await deployer.deploy(HootSwapFactory, adminAddress);

  const contract = await HootSwapFactory.deployed();

  await contract.setFeeTo(feeCollectingAddress);
};
