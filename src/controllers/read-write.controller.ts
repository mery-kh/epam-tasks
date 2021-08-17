import {Request, Response} from "express";
import {rwService} from '../services/read-write.service';
import AppError from '../utils/app.error';
import * as fs from "fs";
import * as path from "path";
class ReadWriteController {
    public readFile(req:Request,res:Response) {
       rwService.readFile(res);
    }
    public writeFile(req:Request,res:Response) {
        rwService.writeFile();
        res.send('Successful!')
    }
}
export const rwController = new ReadWriteController();