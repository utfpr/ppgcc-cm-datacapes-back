import { Router } from 'express';
import authorRouter from './author.route';
import parserRouter from './parser.route'

const routes = Router();

routes.use(authorRouter);
routes.use(parserRouter);

export default routes;
