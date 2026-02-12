require('dotenv');
const express = require('express');
const authRouter = require('./routes/auth');
const profileRouter = require('./routes/profile');
const morgan = require('morgan');
// const cache = require('./cache');
const app = express();
const port = process.env.APP_PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));
app.use('/auth',authRouter);
app.use('/profile',profileRouter);

app.get('/',(req,res)=>{
    console.log('API working...');
    res.json({message:'API working'});  
})

app.post('/hello',(req,res)=>{
    const {name} = req.body;
    res.json({message:`Hello ${name}`});
})

// app.get('/cache',async (req,res)=>{
//  const cached = await cache.get('data');

//  if(cached) return res.json({source:'redis',data : JSON.parse(cached)});

//  const data = { time: new Date() };

//  await cache.set('data', JSON.stringify(data), { EX: 30 });

//  res.json({ source: 'api', data });
// })

app.use(require('./middleware/error'));

app.listen(port,"0.0.0.0",()=>{
    console.log(`application running on port ${port}`);
})