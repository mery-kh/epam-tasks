const express = require('express');
const cluster = require('cluster');
const app = express();
function factorial(num) {
    let fact = 1;
    if(num === 0 ){
        return 1;
    }
    for (let i = 1; i <= num; i++){
        fact *= i;
    }
    return fact;
}
app.get('/', (req,res) => {
    const result = factorial(50);
    console.log(result)
    res.send(`Ok... ${result}`)
});
if(cluster.isMaster){
    for(let i = 0; i < 2; i++){
      cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => console.log(`Worker ${worker.process.pid} died`));
}
else{
    app.listen(3000, () => console.log(`🚀 server ${process.pid} @ http://localhost:3000`));
}