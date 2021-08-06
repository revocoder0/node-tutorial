const {readFile} = require('fs');
console.log('Start a first tesk');

readFile('../content/first.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log('complate first tesk');
})
console.log('Starting next tesk');