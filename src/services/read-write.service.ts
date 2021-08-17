import * as fs from 'fs';
import * as path from "path";
import {Response} from "express";
class ReadWriteService {
    readFile(data:Response){
        fs.createReadStream(path.join('data', 'readData.txt'),{encoding:'utf-8'}).pipe(data)
    }
    writeFile(){
        let txtFile:any = fs.readFileSync(path.join('data', 'readData.txt'), 'utf-8');
        let arr = txtFile.split('\n');
        let obj: {[index: string]:any} = {};
        let nestedObj: {[index: string]:any} = {};
        let key: string;
        let bigKey: string;
        let value: any;
        arr.forEach((row:any) => {
            if(row.includes('.')){
                key = row.slice(row.lastIndexOf('.')+1, row.indexOf('='));
                bigKey = row.slice(0, row.indexOf('.'))
                value = row.slice(row.indexOf('=')+1);
                nestedObj[key]=value;
                obj[bigKey]=nestedObj;
            }
            else{
                key = row.slice(0, row.indexOf('='));
                value = row.slice(row.indexOf('=')+1);
                obj[key] = value;
            }
        });
        fs.writeFileSync(path.join('data', 'json.json'), JSON.stringify(obj));
    }
}
export const rwService = new ReadWriteService();