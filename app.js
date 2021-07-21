const cluster = require('cluster');
function factorial(n) {
    if(n>=1) {
        return factorial(n - 1) * n
    }
    return 1;
}
if(cluster.isMaster){
    let worker;
    for(let i = 0; i < 2; i++){
        worker = cluster.fork();
    }
    console.log(cluster.workers)
    worker.on('message', msg => {
        console.log(`${msg.n}! = ${msg.res}  [${process.pid}]`);
    });
    for (let id in cluster.workers) {
        cluster.workers[id].send({ n: 50});
    }
    cluster.on('exit', (worker, code, signal) => console.log(`Worker ${worker.process.pid} died`));
}
else{
    process.on('message', msg => {
        process.send({
            n: msg.n,
            res: factorial(msg.n)
        });
    });
}