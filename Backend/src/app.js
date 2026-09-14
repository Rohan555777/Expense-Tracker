let express = require("express");
let app = express();
require("dotenv").config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Backend is working!");
});

module.exports = app;
