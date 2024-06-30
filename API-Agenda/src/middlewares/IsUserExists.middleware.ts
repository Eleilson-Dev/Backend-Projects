import { NextFunction, Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import User from '../models/UserModel.model';
import { IUser } from '../interfaces/interfaces';

export class IsUserExists {
  static async execute(req: Request, res: Response, next: NextFunction) {
    try {
      const user = (await User.findOne({ email: req.body.email })) as IUser;

      if (!user) {
        return res.status(404).json({ error: 'User not exists!' });
      }

      if (!bcryptjs.compareSync(req.body.password, user.password)) {
        return res.status(404).json({ error: 'Senha invalida!' });
      }

      next();
    } catch (error) {
      console.log(error);

      return res.status(400).json(error);
    }
  }
}
