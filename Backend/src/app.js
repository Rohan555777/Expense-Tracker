let express = require("express");
let app = express();
require("dotenv").config();
const authRoute = require("./routes/auth");

app.use(express.json());

app.use(authRoute);
app.get("/", (req, res) => {
  res.send("Hello Backend is working!");
});

module.exports = app;
