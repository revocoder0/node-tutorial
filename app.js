const express = require('express');
const app = express();
const people =require('./data.js');
app.use(express.static('./method-public'));
app.use(express.urlencoded({extended:false}));

app.get('/api/people', (req , res)=>{
    res.status(200).json({success:true, data:people});
});

app.post('/login', (req, res)=>{
    let {name} = req.body;
    if(name){
        return res.status(400).send(`Welcome ${name}`);
    }
    res.status(401).send('Please Provide Cerdentails')
})
app.put('/api/people:id', (req, res)=>{
    const {id}=req.params;
    const {name} = req.body;

    const people =people.find((person)=>person.id === Number(id))
    if(!people){
        return res.status(404).json({success:false, msg: `no person with id ${id}`})
    }
    const newPeople = people.map((person)=>{
        if(person.id===Number(id)){
            person.name = name;
        }
        return person;
    })
    res.status(200).json({success:true, data:newPeople})
})

app.listen(4000,()=>{
    console.log('Server is listening on port 4000...')
})