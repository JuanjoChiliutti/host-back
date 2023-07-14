require('dotenv').config()
const mongoose = require("mongoose");
const {MONGODB_URI} = process.env;
mongoose.set('strictQuery', false)

const db = mongoose
    .connect(MONGODB_URI, {
    useNewUrlParser:true, autoIndex: true})
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));

module.exports = db;
