const phReader = require("../functions/phReader");

const getPH = async (req, res) => {
  try {
    const phData = await phReader();
    res.status(200).send({ data: phData });
  } catch (exp) {
    console.log("Error @ getPH, please refer below");
    console.log(exp);
    res.status(500).send();
  }
};

module.exports = getPH;
