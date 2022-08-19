const phReader = require("./functions/phReader");

async function main() {
  const phData = await phReader();
  console.log({ phData });
}

main();
