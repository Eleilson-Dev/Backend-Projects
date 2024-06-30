import { NextFunction, Request, Response } from 'express';
import { IUser } from '../interfaces/interfaces';

export class IsRegisterBodyValid {
  static execute(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body as IUser;

    if (!email || !password) {
      return res.status(200).json({ error: 'Email and password are required' });
    }

    next();
  }
}
