let mongoose = require("mongoose");

let transectionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    amount: {
      type: Number,
      required: true,
      trim: true,
      min: 1,
      max: 1000000,
    },
    type: {
      type: String,
      enum: ["income", "expense"],
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 100,
      default: "not Provided",
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

let Transection = mongoose.model("Transection", transectionSchema);
module.exports = Transection;
