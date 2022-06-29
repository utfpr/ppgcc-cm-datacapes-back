
import { Router } from 'express';
import { AuthorController } from '../controllers/author/AuthorController';

const authorRouter = Router();

authorRouter.get('/author/:id', AuthorController.getAuthor);

export default authorRouter;
