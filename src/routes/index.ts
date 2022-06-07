import { Router } from 'express';
import authorRouter from './parser.route';

const routes = Router();

routes.use(authorRouter);

export default routes;