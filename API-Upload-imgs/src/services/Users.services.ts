import pool from '../connection/db';
import { IBodyUser, IBodyImg } from '../interfaces/IBodyData.interface';

class UsersServices {
  public async getAll() {
    const client = await pool.connect();

    try {
      const result = await pool.query(`SELECT * FROM users`);
      return result.rows;
    } finally {
      client.release();
    }
  }

  public async register(bodyUser: IBodyUser) {
    const client = await pool.connect();

    try {
      const result = await pool.query(
        `INSERT INTO users ("name", "email", "password") VALUES ($1, $2, $3) RETURNING *`,
        [bodyUser.name, bodyUser.email, bodyUser.password]
      );

      return result.rows[0];
    } finally {
      client.release();
    }
  }
}

export const usersServices = new UsersServices();
