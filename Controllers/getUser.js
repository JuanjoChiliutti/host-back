const mongoose = require("mongoose");
const User = require("../Models/Users.js");

const getUser = async (req, res) => {
  try {
    const users = await User.find({}).exec();
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getUser,
};
