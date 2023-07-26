const mongoose = require("mongoose");
const checkListSchema = require("../Models/Checklist.js");

const createChecklist = async (req, res) => {
  const checklist = checkListSchema(req.body);
  checklist
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
};

module.exports = {
  createChecklist,
};
