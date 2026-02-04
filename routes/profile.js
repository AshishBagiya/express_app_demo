const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/protected',auth,(req,res)=>{
    res.json({message:'protected router.',user:req.user});
})

module.exports = router;