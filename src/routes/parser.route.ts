
import { Router } from 'express';
import { parseFile } from '../controllers/parser/ParserController';
import { uploadFile } from './../services/multer/multer';

const parserRouter = Router();

parserRouter.post('/parser', uploadFile.single('arquivo'), parseFile);

export default parserRouter;