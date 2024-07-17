import { Request, Response } from 'express';
import pool from '../connection/db';

class UsersController {
  public async register(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const client = await pool.connect();

    try {
      const result = await pool.query(
        `INSERT INTO users ("name", "email", "password") VALUES ($1, $2, $3) RETURNING *`,
        [name, email, password]
      );

      return res.status(200).json(result.rows[0]);
    } finally {
      client.release();
    }
  }
}

export const usersController = new UsersController();
