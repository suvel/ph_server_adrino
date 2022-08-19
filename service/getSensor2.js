const sensor2Reader = require("../functions/sensor2Reader");

const getSensor2 = async (req, res) => {
  try {
    const sensor2Data = await sensor2Reader();
    res.status(200).send({ data: sensor2Data });
  } catch (exp) {
    console.log("Error @ getSensor2, please refer below");
    console.log(exp);
    res.status(500).send();
  }
};

module.exports = getSensor2;
