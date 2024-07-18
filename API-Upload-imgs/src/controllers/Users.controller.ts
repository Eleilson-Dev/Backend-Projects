import { Request, Response } from 'express';
import { usersServices } from '../services/Users.services';

class UsersController {
  public async getAll(req: Request, res: Response) {
    try {
      const result = await usersServices.getAll();
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  }

  public async register(req: Request, res: Response) {
    try {
      const result = await usersServices.register(req.body);
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  }
}

export const usersController = new UsersController();
