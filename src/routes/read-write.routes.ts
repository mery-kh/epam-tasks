import * as express from "express";
const router = express.Router();
import {rwController} from '../controllers/read-write.controller';
router.get('/read-file', rwController.readFile)
router.get('/write-file', rwController.writeFile)
module.exports = router;