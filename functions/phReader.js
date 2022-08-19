const readFile = require("./readFile");
const phFilePath = require("../constant/fileURLS");
const readPH = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const phDataString = await readFile(phFilePath);
      const phData = phDataString.split("\n").map((str) => {
        //extracting integer from string
        const intStr = str.replace(/[^\d.]/g, "");
        return parseInt(intStr);
      });
      resolve(phData);
    } catch (exc) {
      console.log("Error @ readPH, please refer below");
      console.log(exc);
      reject([]);
    }
  });
};

module.exports = readPH;
