import { Router } from 'express';
import { homeController } from '../controllers/HomeController.controller';
import { loginController } from '../controllers/LoginController.controller';

export const agendaRouter = Router();

agendaRouter.get('/', homeController.index);
agendaRouter.get('/login', loginController.index);
