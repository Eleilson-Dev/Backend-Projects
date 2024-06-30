import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { userServices } from '../services/UseServices.services';

class UserController {
  getAllUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
      const allUsers = await userServices.getAllUsers();

      return res.status(200).json(allUsers);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  };

  getUserByID = async (req: Request, res: Response): Promise<Response> => {
    try {
      const user = await userServices.getUserByID(req.params.id);

      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  };

  userLogin = async (req: Request, res: Response) => {
    try {
      const result = await userServices.userLogin(req.body);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json();
    }
  };

  userRegister = async (req: Request, res: Response): Promise<Response> => {
    try {
      const newUser = await userServices.userRegister(req.body);

      return res.status(200).json(newUser);
    } catch (error) {
      console.log(error);

      return res.status(400).json(error);
    }
  };
}

export const userController = new UserController();
