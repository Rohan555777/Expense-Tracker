const express = require("express");
const auth = require("../middleware/auth");
const Transection = require("../model/transection");
let router = express.Router();
router.post("/transaction", auth, async (req, res) => {
  try {
    const user = req.user;

    const { amount, type, category, description, date } = req.body;

    // Validate required fields
    const requiredFields = {
      amount,
      type,
      category,
    };

    for (const [field, value] of Object.entries(requiredFields)) {
      if (value === undefined || value === null || value === "") {
        return res.status(400).json({
          message: `${field} is missing`,
        });
      }
    }

    // Validate amount
    if (Number(amount) <= 0) {
      return res.status(400).json({
        message: "Amount must be greater than zero",
      });
    }

    // Validate transaction type
    if (!["income", "expense"].includes(type)) {
      return res.status(400).json({
        message: "Type must be either income or expense",
      });
    }

    const transaction = await new Transection({
      userId: user._id,
      amount: Number(amount),
      type,
      category,
      description: description || "",
      date: date || Date.now(),
    }).save();

    res.status(201).json({
      message: "Transaction saved successfully!",
      transaction,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to save transaction " + err.message,
    });
  }
});

router.get("/transaction", auth, async (req, res) => {
  const user = req.user;

  let transections = await Transection.find({ _Id: user._Id });

  res.json({
    message: "transection fetched",
    transections,
  });
});

router.patch("/transaction/:id", auth, async (req, res) => {
  try {
    const transactionId = req.params.id;
    const userId = req.user._id;
    const { amount, type, category, description, date } = req.body;

    const transaction = await Transection.findOne({ _id: transactionId, userId });
    if (!transaction) throw new Error("invalid transition");

    //amount validating

    if (amount !== undefined) {
      if (Number(amount) <= 0) {
        throw new Error("invalid amount");
      }

      transaction.amount = Number(amount);
    }

    //type validating
    if (type !== undefined) {
      if (!["expense", "income"].includes(type)) {
        throw new Error("invalid type");
      }
      transaction.type = type;
    }

    if (category !== undefined) {
      transaction.category = category;
    }

    if (description !== undefined) {
      transaction.description = description;
    }

    if (date !== undefined) {
      transaction.date = date;
    }

    const updateTransaction = await transaction.save();

    res.json({
      message: "transaction updated !",
      transaction: updateTransaction,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/transaction/:id", auth, async (req, res) => {
  const transactionId = req.params.id;
  userId = req.user._id;

  // validate transactionId & userId

  let transaction = await Transection.deleteOne({ _id: transactionId, userId });
  if (!transaction.deletedCount || !transaction.acknowledged) {
    res.status(400).json({ message: "invalid transaction" });
  }
  res.json({ message: "transaction deleted !", transaction });
});

module.exports = router;
