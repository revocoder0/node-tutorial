const EventEmitter = require('events');

const custonEmitter = new EventEmitter();
custonEmitter.on('response', (name, id)=>{
    console.log(`Data Recive user ${name} with id: ${id}`);
})
custonEmitter.on('response', ()=>{
    console.log(`Some other logic here`);
})
custonEmitter.emit('response', 'Than Zaw Aou', 42);