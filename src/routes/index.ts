import { Router } from 'express';
import {parseXML} from '../controllers/parser/ParserController.js';

export const router = Router();


router.post('/parser/', parseXML)