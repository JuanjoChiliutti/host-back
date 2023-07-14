const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');
const { JWTKEY } = process.env;


const login = async ( req, res )=>{
    const { email, password } = req.body;
   
    if( ! email || ! password ){
        return res.status(401).send({ message:"must provide email or password"});
    } 
        
    const user = await User.findOne({email:email})
    if( ! user ) {
        return res.status(401).send({ message:"Must login with an existing user"});
    }
    try {
        await user.comparePassword(password);
        const token = jwt.sign({userId: user._id}, JWTKEY)
        res.send({token});
    } catch (error) {
        return res.status(401).send({ message:"Must login with an existing user"});
    }
}

module.exports = {
    login,
}