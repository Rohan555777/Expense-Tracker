const User = require("../model/user");
const validator = require("validator");
const updateProfile = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;

    // Build an object containing only provided fields
    const updates = {};

    if (firstName !== undefined) updates.firstName = firstName;
    if (lastName !== undefined) updates.lastName = lastName;
    if (email !== undefined) updates.email = email;

    // Prevent empty update requests
    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        message: "At least one field is required",
      });
    }

    // Check whether the new email is already used
    if (email !== undefined) {
      const existingUser = await User.findOne({
        email,
        _id: { $ne: req.user._id },
      });

      if (existingUser) {
        return res.status(409).json({
          message: "Email is already registered",
        });
      }
      if (!validator.isEmail(email)) {
        return res.status(400).json({
          message: "invalid email",
        });
      }
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { $set: updates },
      {
        new: true,
        runValidators: true,
      },
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "Profile updated successfully!",
      user: updatedUser,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to update profile",
    });
  }
};

module.exports = updateProfile;
