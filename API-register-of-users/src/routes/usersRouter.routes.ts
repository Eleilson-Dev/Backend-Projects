import { Router } from 'express';
import { usersControllers } from '../controllers/Users.controller';
import { IDIsValid } from '../middlewares/IDIsValid.middleware';
import { EmailExists } from '../middlewares/EmailExists.middleware';
import { ValidateBody } from '../middlewares/ValidateBody.middleware';
import { createUserBodySchema } from '../schemas/createUserBodySchema.schema';

export const usersRouter = Router();

usersRouter.get('/', usersControllers.getAll);

usersRouter.post(
  '/create',
  ValidateBody.execute({ body: createUserBodySchema }),
  EmailExists.execute,
  usersControllers.createUser
);

usersRouter.get('/user/:id', IDIsValid.execute, usersControllers.getById);

usersRouter.patch(
  '/update/:id',
  IDIsValid.execute,
  usersControllers.updateUser
);

usersRouter.delete(
  '/exclude/:id',
  IDIsValid.execute,
  usersControllers.deleteUser
);
