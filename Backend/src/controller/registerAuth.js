const User = require("../model/user");
const bcrypt = require("bcrypt");
const validator = require("validator");

const registerAuth = async (req, res) => {
  let { firstName, lastName, email, password } = req.body;
  //check Fields
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  //check Already register
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({
      message: "User is already exist",
    });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({
      message: "invalid email",
    });
  }
  //pass validator
  if (!validator.isStrongPassword(password)) {
    return res.status(400).json({
      message: "please use strong password ",
    });
  }
  //password hashing
  hashpass = await bcrypt.hash(password, 10);
  //save USer

  let user = new User({
    firstName,
    lastName,
    email,
    password: hashpass,
  });
  console.log(user);
  await user.save();
  res.json({
    message: "User Registred Successfully !",
    user: user,
  });
};

module.exports = registerAuth;
