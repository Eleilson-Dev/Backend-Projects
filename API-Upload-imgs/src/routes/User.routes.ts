import { Router } from 'express';
import { userController } from '../controllers/User.controller';
import { IsEmailExists } from '../middlewares/IsEmailExists.middleware';

export const usersRouter = Router();

usersRouter.post(
  '/create/user',
  IsEmailExists.execute,
  userController.createUser
);
usersRouter.get('/list', userController.findAll);
usersRouter.get('/findone/user/:userID', userController.findOne);
usersRouter.put('/update/user/:userID', userController.updateUser);
usersRouter.delete('/exclude/user/:userID', userController.deleteUser);
