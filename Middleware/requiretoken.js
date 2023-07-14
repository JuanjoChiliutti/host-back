const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');
const { JWTKEY } = process.env;

function requireToken(req, res, next){

    const { authorization } = req.headers;
    if(!authorization){
        return res.status(403).send({error: "You must be logged in"});
    }
    const token = authorization.replace("Bearer ","");
    jwt.verify(token, JWTKEY, async (err, data) =>{
    if(err){
        return res.status(403).send({error: "You must be logged in"});
    }
    const {userId} = data;
    const user = await User.findById(userId);
    req.user = user; 
    res.send(req.user)
    next();
    });
};

module.exports = {
    requireToken
};