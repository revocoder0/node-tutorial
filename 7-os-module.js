const os=require('os');

const user = os.userInfo();
console.log(`Ths System up time is ${os.uptime()} seconds`);

const createOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(createOS);