import { Router } from 'express';
import { usersController } from '../controllers/Users.controller';

export const usersRouter = Router();

usersRouter.post('/users', usersController.register);
