require('dotenv').config()
const userSchema = require("../Models/users.js");
const jwt = require("jsonwebtoken");
const { JWTKEY } = process.env


const signUp = async(req, res) => {

  const user = userSchema(req.body);
  try {
    await user.save()
    const token = jwt.sign({userId: user._id}, JWTKEY)
    res.send({token})
  }catch(error) {
    res.status(401).json({ message: error })
  }
};

module.exports = {
  signUp,
};
