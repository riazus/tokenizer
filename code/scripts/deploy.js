async function main() {
  const Riazus42 = await ethers.getContractFactory("Riazus42");
  
  // TODO: address must be changed
  const myToken = await Riazus42.deploy("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");

  console.log("Contract Deployed to Address:", myToken.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
