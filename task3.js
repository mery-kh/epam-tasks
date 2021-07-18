const path = require('path');
const fs = require('fs')
const decompress = require('decompress');
decompress( path.join(__dirname,'data','node_modules.zip'),'./data').then(files => {
    files.map(file => console.log(file.path))
});
