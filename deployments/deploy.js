async function main() {
  const Riazus42 = await ethers.getContractFactory("Riazus42");

  const myToken = await Riazus42.deploy();

  console.log("Contract Deployed to Address:", myToken.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
