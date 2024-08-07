import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AppError } from '../errors/appError';

export class VerifyToken {
  static execute(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return next(new AppError(401, 'No token provided'));
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      return next(new AppError(401, 'No token provided'));
    }

    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
      if (err) {
        return next(new AppError(401, 'Invalid token'));
      }

      res.locals.user = decoded;
      next();
    });
  }
}
