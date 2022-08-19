const express = require("express");
const cors = require("cors");
const app = express();
const getPH = require("./service/getPH");

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
 * desc: Gets array integer by reading by reading from * ph.txt mention at constant/fileURS - phFilePath
 */
app.get("/api/ph", getPH);
// =========

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
