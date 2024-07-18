import { Router } from 'express';
import { usersController } from '../controllers/Users.controller';

export const usersRouter = Router();

usersRouter.get('/', usersController.getAll);
usersRouter.post('/register', usersController.register);
usersRouter.post('/uploads/:id', usersController.sendImg);
usersRouter.get('/getallimgs/:id', usersController.getAllImgs);
