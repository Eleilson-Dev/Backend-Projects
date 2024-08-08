import { Router } from 'express';
import { UserController } from '../controllers/User.controller';
import { UserServices } from '../services/User.services';
import { IsEmailExists } from '../middlewares/IsEmailExists.middleware';
import { IsLoginValid } from '../middlewares/IsLoginValid.middleware';
import { imagesRouter } from './Images.routes';
import { container } from 'tsyringe';

export const usersRouter = Router();

container.registerSingleton('UserServices', UserServices);
const userController = container.resolve(UserController);

usersRouter.post('/create/user', IsEmailExists.execute, (req, res) =>
  userController.createUser(req, res)
);

usersRouter.post('/login/user', IsLoginValid.execute, (req, res) =>
  userController.login(req, res)
);

usersRouter.get('/list', (req, res) => userController.findAll(req, res));

usersRouter.get('/findone/user/:userID', (req, res) =>
  userController.findOne(req, res)
);

usersRouter.put('/update/user/:userID', (req, res) =>
  userController.updateUser(req, res)
);

usersRouter.delete('/exclude/user/:userID', (req, res) =>
  userController.deleteUser(req, res)
);

usersRouter.use('', imagesRouter);
