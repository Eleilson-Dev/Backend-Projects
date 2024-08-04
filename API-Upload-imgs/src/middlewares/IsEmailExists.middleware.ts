import { NextFunction, Request, Response } from 'express';
import { prisma } from '../database/prisma';

export class IsEmailExists {
  static async execute(req: Request, res: Response, next: NextFunction) {
    const user = await prisma.user.findFirst({
      where: { email: req.body.email },
    });

    if (user) {
      return res.status(409).json({ conflict: 'user already exists' });
    }

    next();
  }
}
