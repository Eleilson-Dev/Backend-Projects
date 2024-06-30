import { Router } from 'express';
import { userController } from '../controllers/UserController.controller';
import { IsRegisterBodyValid } from '../middlewares/IsRegisterBodyValid.middleware';
import { IsEmailExists } from '../middlewares/IsEmailExists.middleware';
import { IsUserExists } from '../middlewares/IsUserExists.middleware';
import { IsAuthenticated } from '../middlewares/IsAuthenticated.middleware';

export const agendaRouter = Router();

agendaRouter.get('/users', IsAuthenticated.execute, userController.getAllUsers);

agendaRouter.get(
  '/user/:id',
  IsAuthenticated.execute,
  userController.getUserByID
);

agendaRouter.post('/login', IsUserExists.execute, userController.userLogin);

agendaRouter.post(
  '/register',
  IsRegisterBodyValid.execute,
  IsEmailExists.execute,
  userController.userRegister
);
