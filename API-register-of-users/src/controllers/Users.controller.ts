import { Request, Response } from 'express';
import { usersService } from '../services/Users.services';

class UsersControllers {
  createUser(req: Request, res: Response): Response {
    const newUser = usersService.createUser(req.body);

    return res.status(200).json({ newUser });
  }

  getAll(req: Request, res: Response) {
    const database = usersService.getAll();
    return res.status(200).json(database);
  }

  getById(req: Request, res: Response) {
    const foundUser = usersService.getById(Number(req.params.id));
    return res.status(200).json(foundUser);
  }
}

export const usersControllers = new UsersControllers();
