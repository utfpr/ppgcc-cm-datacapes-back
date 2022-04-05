
import { Router } from 'express';
import { parseFile } from '../controllers/parser/ParserController';
import { uploadFile } from './../services/multer/multer';

const parserRouter = Router();

parserRouter.post('/parser', parseFile);

export default parserRouter;