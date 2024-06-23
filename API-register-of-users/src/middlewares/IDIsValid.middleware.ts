import { NextFunction, Request, Response } from 'express';
import { AppError } from '../errors/AppError';
import pool from '../connection/db';

export class IDIsValid {
  static execute = async (req: Request, res: Response, next: NextFunction) => {
    const userID = Number(req.params.id);

    try {
      const result = await pool.query('SELECT * FROM users WHERE id = $1', [
        userID,
      ]);

      if (result.rows.length === 0) {
        throw new AppError(404, 'User not found');
      }

      return next();
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ error: error.message });
      } else {
        console.error('Error checking user validity:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  };
}
