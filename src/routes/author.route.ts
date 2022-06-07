
import { Router } from 'express';
import { parseFile } from '../controllers/parser/ParserController';

const parserRouter = Router();

parserRouter.post('/author', parseFile);

export default parserRouter;
