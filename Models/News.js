const mongoose = require("mongoose");
const newsSchema = new mongoose.Schema({
  news: {
    type: String,
  },
});
mongoose.model("News", newsSchema);
