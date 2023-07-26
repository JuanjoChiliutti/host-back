const mongoose = require("mongoose");
const checkListSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  cuit: {
    type: String,
  },
  description: {
    type: String,
  },
  notes: {
    type: String,
  },
  check: {
    type: String,
    enum: ["SI", "NO", "NO APLICA"],
  },
  checked: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("Checklist", checkListSchema);
