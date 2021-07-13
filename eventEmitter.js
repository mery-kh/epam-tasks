// const events = require('events');
// const argv = require('minimist')(process.argv.slice(2));
//
// const logger = new events();
//
// let users = [];
// let msgs = [];
//
// logger.on('message', (...msg) => {
//    msgs.push(msg);
//     console.log(`New message - ${msgs}`);
// })
// logger.emit('message', 'Hello, World!', 'Hiii');
// logger.emit('message', 'Barev!', 'Bye');
//
//
// logger.on('login', (name)=>{
//     users.push(name);
//     console.log(`New user - ${users}`);
// })
// logger.emit('login', 'Sam');
// logger.emit('login', 'Ann');
// logger.emit('login', 'Jack');
//
// logger.on('getUsers', () => {
//     console.log(`Logged users`)
//     users.forEach((user)=> {
//         console.log(user);
//     })
// })
// logger.emit('getUsers');
//
// logger.on('getMessages', () => {
//     console.log(`Messages`)
//     msgs.forEach((msg)=> {
//         console.log(msg);
//     })
// });
// logger.emit('getMessages');


// console.log(events.defaultMaxListeners); //default 10
// events.defaultMaxListeners = 1;
// let someCallback = () => {}
// logger.setMaxListeners(2);
// logger.addListener('login', () => {
//     console.log('aaa')
// })
// console.log(logger.listeners('login'));
// logger.removeListener('login', someCallback);
// logger.removeAllListeners();


//npm i mocha -D // for development
//repl  - read eval print loop
