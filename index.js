//node index.js  --folderName files
const path = require('path');
const fs = require('fs');
const zlib = require('zlib');
const argv = require('minimist')(process.argv.slice(2));

let oldDir = path.resolve(argv.folderName) ;
let newDir = path.join(path.resolve(argv.folderName, '..'), 'zipFiles') ;
if (!fs.existsSync(newDir)){
    fs.mkdirSync(newDir);
}
fs.readdir(oldDir, (err, files) => {
    if (err)
        console.log(err);
    else {
        files.forEach(file => {
            let gzip = zlib.createGzip();
            let r = fs.createReadStream(path.join(__dirname,'files', file));
            let w = fs.createWriteStream(path.join( newDir,`${file}.gzip`));
            r.pipe(gzip).pipe(w);
        })
    }
});