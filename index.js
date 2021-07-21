// let cluster = require('cluster');
//
// function factorial(n) {
//     if (n <= 1 || n === 0) {
//         return 1
//     }
//     return n * factorial(n - 1)
// }
// if (cluster.isMaster) {
//     let worker;
//     for (let i = 0; i < 2; i++) {
//         worker = cluster.fork();
//     }
//     worker.on('message', msg => {
//         console.log(`Factorial of a number ${msg.number} = ${msg.result}`);
//     });
//     for (let process in cluster.workers) {
//         cluster.workers[process].send({
//             number: 50
//         });
//     }
//     cluster.on('exit', function(worker, code, signal) {
//         console.log(`Worker died with code ${code} and signal: ${signal}`);
//     });
// } else {
//     process.on('message', msg => {
//         process.send({
//             number: msg.number,
//             result: factorial(msg.number)
//         });
//     });
// }

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