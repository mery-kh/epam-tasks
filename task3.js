const path = require('path');
const fs = require('fs')
const decompress = require('decompress');
decompress( path.join(__dirname,'data','node_modules.zip'),'./data').then(files => {
    const filePath = path.join(__dirname,'data','node_modules');
    fs.readdirSync(filePath).forEach(file => {
        console.log(file);
    });
});
