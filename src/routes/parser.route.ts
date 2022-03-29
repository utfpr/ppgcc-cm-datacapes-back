
import { Router } from 'express';
import { parseFile } from '../controllers/parser/ParserController';
import { uploadImg } from './../services/multer/multer';

const parserRouter = Router();

parserRouter.post('/parser', uploadImg.single('arquivo'), parseFile);

export default parserRouter;