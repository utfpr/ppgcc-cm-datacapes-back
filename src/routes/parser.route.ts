
import { Router } from 'express';
import multer from 'multer';

const upload = multer({ dest: '../uploads/' })

import { parseFile } from '../controllers/parser/ParserController';
const parserRouter = Router();

parserRouter.post('/api/parser/', upload.single('arquivo'), parseFile);

export default parserRouter;