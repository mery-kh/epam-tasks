const cluster = require('cluster');
function factorial(n) {
    if(n>=1) {
        return factorial(n - 1) * n
    }
    return 1;
}
if(cluster.isMaster){
    for(let i = 0; i < 2; i++){
      cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => console.log(`Worker ${worker.process.pid} died`));
}
else{
    console.log(` ${factorial(50)} [${process.pid}]`);
    process.exit(0);
}