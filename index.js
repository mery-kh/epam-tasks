// console.log(process.argv); // env is object where are ours global variables

const events = require('events');
const argv = require('minimist')(process.argv.slice(2));

const logger = new events();

let users = [];
let msgs = [];
if(argv.addUser) {
    users.push(argv.addUser)
}
if(argv.message) {
    msgs.push(argv.message)
}
logger.on('message', (...msg) => {
    msgs.push(msg);
    console.log(`New message - ${msg}`);
})
logger.emit('message', 'Hello, World!', 'Hiii');
logger.emit('message', 'Barev!', 'Bye');


logger.on('login', (name)=>{
    users.push(name);
    console.log(`New user - ${name}`);
})
logger.emit('login', 'Sam');
logger.emit('login', 'Ann');
logger.emit('login', 'Jack');

logger.on('getUsers', () => {
    console.log(`Logged users`)
    users.forEach((user)=> {
        console.log(user);
    })
})
logger.emit('getUsers');

logger.on('getMessages', () => {
    console.log(`Messages`)
    msgs.forEach((msg)=> {
        console.log(msg);
    })
});
logger.emit('getMessages');