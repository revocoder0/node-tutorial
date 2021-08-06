const express = require('express');
const app = express();
const logger = require('./logger.js');
const authroze = require('./authroze.js');
app.use([logger,authroze])

app.get('/' , (req , res)=>{
    res.send('Home Page')
})
app.get('/about' , (req , res)=>{
    res.send('About Page')
})
app.get('/Product' , (req , res)=>{
    res.send('Product Page')
})
app.get('/api/Items' , (req , res)=>{
    console.log(req.user)
    res.send('Items Page')
})
app.get('/api/Items/category' ,(req , res)=>{
    res.send('Category Page')
})

app.listen(5000, ()=>{
    console.log('Server is on port 5000...');
})