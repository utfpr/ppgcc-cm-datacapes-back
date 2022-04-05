
import { Router } from 'express';
import { parseFile } from '../controllers/parser/ParserController';

const parserRouter = Router();

parserRouter.post('/parser', parseFile);

export default parserRouter;