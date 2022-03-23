import { Router } from 'express';
import parserRouter from './parser.route';

const routes = Router();

routes.use(parserRouter);

export default routes;