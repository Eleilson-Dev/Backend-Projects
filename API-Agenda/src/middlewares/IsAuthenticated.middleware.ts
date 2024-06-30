import { Request, Response, NextFunction } from 'express';
import User from '../models/UserModel.model';
import jwt from 'jsonwebtoken';

export class IsAuthenticated {
  static execute = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res
          .status(401)
          .json({ message: 'Unauthorized: No token provided' });
      }

      const token = authHeader.split(' ')[1];
      if (!token) {
        return res
          .status(401)
          .json({ message: 'Unauthorized: Token is missing' });
      }

      const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!) as {
        userId: string;
      };

      const user = await User.findById(decodedToken.userId);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      next();
    } catch (err: any) {
      if (
        err.name === 'JsonWebTokenError' ||
        err.name === 'TokenExpiredError'
      ) {
        return res
          .status(401)
          .json({ message: 'Unauthorized: Invalid or expired token' });
      }
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
}
