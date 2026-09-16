const JWT = require("jsonwebtoken");
const User = require("../model/user");

let auth = async (req, res, next) => {
  try {
    //verify jwt
    let { token } = req.cookies;
    if (!token) throw new Error("empty token ");

    const { email } = JWT.verify(token, process.env.JWT_SECRET);
    if (!email) {
      throw new Error("Token invalid !");
    }
    let user = await User.findOne({ email });
    if (!user) {
      throw new Error("user not exist");
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

module.exports = auth;
