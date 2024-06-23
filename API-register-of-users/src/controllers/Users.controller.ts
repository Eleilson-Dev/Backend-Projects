import { Request, Response } from 'express';
import { usersService } from '../services/Users.services';

class UsersControllers {
  createUser = async (req: Request, res: Response): Promise<Response> => {
    try {
      const user = await usersService.createUser(req.body);
      return res.status(201).json(user);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: error });
    }
  };

  getAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const allUsers = await usersService.getAll();
      return res.status(200).json(allUsers);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  };

  getById = async (req: Request, res: Response): Promise<Response> => {
    try {
      const foundUser = await usersService.getById(Number(req.params.id));
      return res.status(200).json(foundUser);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  };

  updateUser = async (req: Request, res: Response): Promise<Response> => {
    try {
      const userUpdated = await usersService.updateUser(
        Number(req.params.id),
        req.body
      );

      return res.status(200).json(userUpdated);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  };

  deleteUser = async (req: Request, res: Response): Promise<Response> => {
    try {
      await usersService.deleteUser(Number(req.params.id));
      return res.status(200).json({ message: 'user deleted' });
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  };
}

export const usersControllers = new UsersControllers();
