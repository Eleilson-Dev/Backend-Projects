import { NextFunction, Request, Response } from 'express';
import User from '../models/UserModel.model';

export class IsEmailExists {
  static async execute(req: Request, res: Response, next: NextFunction) {
    try {
      const userExists = await User.findOne({ email: req.body.email });

      if (userExists) {
        return res.status(409).json({ error: 'email already exists' });
      }

      next();
    } catch (error) {
      console.log(error);

      return res.status(400).json(error);
    }
  }
}
