const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000 || 8080 || 8081;
app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
