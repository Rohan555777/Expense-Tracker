const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const User = require("../model/user");

const loginAuth = async (req, res) => {
  const { email, password } = req.body;

  const userExist = await User.findOne({ email }).select("password firstName lastName");
  console.log(userExist + "rohan");
  if (!userExist) {
    res.status(409).json({
      message: "Invalid credential",
    });
  }
  //get pass and check
  let passCheck = await bcrypt.compare(password, userExist.password);
  if (!passCheck) {
    res.status(409).json({
      message: "Invalid credential P ",
    });
  }
  // set token
  const token = await JWT.sign({ email }, process.env.JWT_SECRET);
  res.cookie("token", token).json({
    message: "logged in successfully !",
    user: userExist,
  });
};

module.exports = loginAuth;
