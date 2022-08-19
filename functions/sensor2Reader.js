const readFile = require("./readFile");
const sensor2FilePath = require("../constant/fileURLS").sensor2FilePath;
const readSensor2 = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const sensor2DataString = await readFile(sensor2FilePath);
      const sensor2Data = sensor2DataString.split("\n").map((str) => {
        //extracting integer from string
        const intStr = str.replace(/[^\d.]/g, "");
        return parseInt(intStr);
      });
      resolve(sensor2Data);
    } catch (exc) {
      console.log("Error @ readSensor2, please refer below");
      console.log(exc);
      reject([]);
    }
  });
};

module.exports = readSensor2;
