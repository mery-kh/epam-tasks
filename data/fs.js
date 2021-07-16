// const fs = require('fs');
// const path = require('path')
// console.log(path.join(__dirname,'data','new.txt'))
// console.log(path.basename('C:\\temp\\myfile.html'))
// // normalized
// console.log(path.normalize('data////////new.txt')); //didn't work, check at home
// //resolved
// const myPath = path.normalize('data////new.txt')
// console.log(path.resolve(myPath)); //
//


//read about first error, buffer, file system flags,

//read file async
// fs.readFile('./new.txt', (err,data) => {
//     console.log('data',data.toString())
// })
//
// // write file async
// fs.writeFile('./write.txt', 'Hello world',(err,data) => {
//     console.log('data is successfully written')
// })
//
// //read file sync
// try {
//     const data = fs.readFileSync('./new.txt');
//     console.log('sync data', data.toString());
// }
// catch (err){
//     console.error(err)
// }
//
// //write file sync
// try {
//     fs.writeFileSync('./writee.txt', 'dddd');
//     if(fs.existsSync('./writee.txt')){
//         console.log('success')
//     }
//     // if(fs.accessSync('./writee.txt')){
//     //     console.log('success')
//     // }
// }
// catch (err){
//     console.error(err)
// }
//
//
// console.log(fs.statSync('.././data')) //about folder statistics
// console.log(fs.statSync('.././data/new.txt')) //about file statistics
//
////work
// fs.exists('./new.txt', () => {
//     fs.readFile('./new.txt', 'utf-8', (err, data) =>{
//        if(path.isAbsolute(data)){
//            console.log('Absolute');
//        }
//        else{
//            console.log('Relative');
//        }
//     });
// });



////about readline
// const readline = require('readline');
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// rl.question('What do you think of Node.js? ', (answer) => {
//     // TODO: Log the answer in a database
//     console.log(`Thank you for your valuable feedback: ${answer}`);
//
//     rl.close();
// });


//check access
// import { access } from 'fs/promises';
// import { constants } from 'fs';
//
// try {
//     await access('./new.txt', constants.R_OK | constants.W_OK);
//     console.log('can access');
// } catch {
//     console.error('cannot access');
// }

//copy file
// import { constants } from 'fs';
// import { copyFile } from 'fs/promises';
//
// try {
//     await copyFile('new.txt', 'destination.txt');
//     console.log('source.txt was copied to destination.txt');
// } catch {
//     console.log('The file could not be copied');
// }
//
// // By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
// try {
//     await copyFile('nex.txt', 'destination.txt', constants.COPYFILE_EXCL);
//     console.log('source.txt was copied to destination.txt');
// } catch {
//     console.log('The file could not be copied');
// }

//make temporary directory
// import { mkdtemp } from 'fs/promises';
// import path from 'path';
// import * as os from "os";
// try {
//     await mkdtemp(path.join(os.tmpdir(), 'foo-'));
// } catch (err) {
//     console.error(err);
// }


// //open directory
// import { opendir } from 'fs/promises';
//
// try {
//     const dir = await opendir('./');
//     for await (const dirent of dir)
//         console.log(dirent.name);
// } catch (err) {
//     console.error(err);
// }

// read directory
// import { readdir } from 'fs/promises';
//
// try {
//   const files = await readdir("./");
//   for (const file of files)
//     console.log(file);
// } catch (err) {
//   console.error(err);
// }


