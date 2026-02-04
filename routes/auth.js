const express = require('express');
const router = express.Router();
const becrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const users =[]; //temp storage DB
router.post('/register',async (req,res)=>{
    console.log('register api');
    const body = req.body;
    if(body && body?.email && body?.password){
        const hased = await becrypt.hash(body.password,10);
        const  user = {email:body.email,password:hased};
        users.push(user);
        res.json({message:'User Registerd...'})
    }else{
        res.status(400).json({error:'Invalid request body'})
    }
});

router.post('/login',async (req,res)=>{

    const {email,password} = req.body;

    const user = users.find(u => user.email === email);
    if(!user) res.status(400).json({error:'Invalid email'});

    const passMatch = await becrypt.compare(user.password , password);
    if(!passMatch) res.status(400).json({error:'Invalid password'});

    const token = await jwt.sign({user},'secret',{expiresIn:'1d'});

    console.log('login api');
    res.json({token});
});

module.exports = router;