const {readFileSync , writeFileSync} =require('fs');
readFileSync('./content/first.txt', 'utf8', (err,result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFileSync('./content/second.txt', 'utf8', (err,result) =>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFileSync('./content/s.txt', 'utf8',
            `Here is the result: ${first} ${second}`,
            (err,result) =>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log(result);
            }
        )
    })
});