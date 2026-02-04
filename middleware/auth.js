const jwt = require('jsonwebtoken')
module.exports = (req,res,next)=>{
    const token = req.headers.authorization;

    if(!token) res.status(400).json({error:'Invalid Token'});

    try{
        const decoded = jwt.verify(token,'secret');
        req.user = decoded;
        next();
    }catch(error){
        res.status(400).json('Invalid Token');
    }
};
