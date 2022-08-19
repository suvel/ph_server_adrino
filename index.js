const express = require("express");
const cors = require("cors");
const app = express();
const getPH = require("./service/getPH");
const getSensor2 = require("./service/getSensor2");

// ========= constants
const PORT = 3000;
// =========

// ========= middleware
app.use(cors());
// =========

// ========= routes
/**
 * url: http://localhost:3000/api/ph
 * method: GET
 * route: /api/ph
 * desc: Gets array integer by reading by reading from ph.txt mention at constant/fileURS - phFilePath
 */
app.get("/api/ph", getPH);
/**
 * url: http://localhost:3000/api/sensor2
 * method: GET
 * route: /api/sensor2
 * desc: Gets array integer by reading by reading from sensor2.txt mention at constant/fileURS - sensor2FilePath
 */
app.get("/api/sensor2", getSensor2);
// =========

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
