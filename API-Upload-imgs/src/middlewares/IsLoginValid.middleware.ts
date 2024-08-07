import { Request, Response, NextFunction } from 'express';
import { prisma } from '../database/prisma';
import bcrypt from 'bcryptjs';
import { AppError } from '../errors/appError';

export class IsLoginValid {
  static async execute(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await prisma.user.findFirst({
        where: { email: req.body.email },
      });

      if (!user) {
        throw new AppError(403, 'Email and password doesnt match');
      }

      const compare = await bcrypt.compare(req.body.password, user.password);

      if (!compare) {
        throw new AppError(403, 'Email and password doesnt match');
      }

      const userAccess = { id: user.id, email: user.email };

      res.locals.userAccess = userAccess;
      res.locals.user = user;
      next();
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
