import { Router } from 'express';
import { UserController } from '../controllers/User.controller';
import { UserServices } from '../services/User.services';
import { container } from 'tsyringe';
import { opportunityRouter } from './opportunity.routes';
import { ValidateBody } from '../middlewares/ValidatyBody.middleware';
import {
  userLoginBodySchema,
  userRegisterBodySchema,
} from '../schemas/user.scheme';
import { VerifyToken } from '../middlewares/verifyToken.middleware';
export const userRouter = Router();

container.registerSingleton('UserServices', UserServices);
const userController = container.resolve(UserController);

userRouter.post('/', ValidateBody.execute(userRegisterBodySchema), (req, res) =>
  userController.register(req, res)
);

userRouter.post(
  '/login',
  ValidateBody.execute(userLoginBodySchema),
  (req, res) => userController.login(req, res)
);

userRouter.get('/getuser', VerifyToken.execute, (req, res) =>
  userController.getUser(req, res)
);
