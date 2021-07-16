const fs = require('fs');
const path = require('path');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Path... ', (answer) => {
    const filePath = path.join(__dirname, answer);
    let csvFile = fs.readFileSync(filePath, 'utf-8');
    let keys = csvFile.split('\n').shift().split(',')
    let jsonFile = [];
    csvFile.split('\n').slice(1).forEach((rows) => {
        let obj = {};
        let value = rows.split(',')
        for(let i = 0; i < keys.length; i++){
            obj[keys[i]] = value[i];
        }
        jsonFile.push(obj);
    });
    fs.writeFileSync('json.json', JSON.stringify(jsonFile));
    rl.close();
});


