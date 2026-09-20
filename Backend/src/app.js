let express = require("express");
let app = express();
require("dotenv").config();
const authRoute = require("./routes/auth");
const profileRoute = require("./routes/profile");
const transectionRouter = require("./routes/Transection");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use(authRoute);
app.use(profileRoute);
app.use(transectionRouter);
app.get("/", (req, res) => {
  res.send("Hello Backend is working!");
});

module.exports = app;
