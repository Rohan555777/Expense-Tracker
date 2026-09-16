const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const updateProfile = require("../controller/updateProfile");

router.get("/profile", auth, async (req, res) => {
  const { firstName, lastName, email } = req.user;
  res.json({
    message: "user fetch successfully !",
    user: {
      firstName,
      lastName,
      email,
    },
  });
});

router.patch("/profile", auth, updateProfile);

module.exports = router;
