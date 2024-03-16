async function main() {
  const Riazus42 = await ethers.getContractFactory("Riazus42");

  // TODO: address must be changed
  const myToken = await Riazus42.deploy(
    "0xF535B140c9223ee31714dc47040b36E706Aecfbb"
  );

  console.log("Contract Deployed to Address:", myToken.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
