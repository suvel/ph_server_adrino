const fs = require("fs");

const readFile = (absoluteFilePath) => {
  return new Promise((resolve, reject) => {
    try {
      fs.readFile(absoluteFilePath, "utf8", (err, data) => {
        if (err) {
          console.log(
            `Exception occurred while reading file ${absoluteFilePath}`
          );
          reject(err);
        }
        console.log(`Successfully read file ${absoluteFilePath}`);
        resolve(data);
      });
    } catch (exc) {
      console.log("Error @ readFile, refer below for the error");
      console.log(exc);
      reject('');
    }
  });
};

module.exports = readFile;
