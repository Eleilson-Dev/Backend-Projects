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

  public async getAllImgs(userId: Number) {
    const client = await pool.connect();

    try {
      const result = await pool.query(
        ` 
          SELECT 
            users."id", users."name" AS "userName", users."email", 
            users_imgs."name" AS "imgName", users_imgs."src", users_imgs."user_id" 
          FROM users JOIN users_imgs ON users."id" = users_imgs."user_id" WHERE users."id" = $1
        `,
        [userId]
      );

      return result.rows;
    } finally {
      client.release();
    }
  }

  public async sendImg(userId: Number, bodyImg: IBodyImg) {
    const client = await pool.connect();

    try {
      const result = await pool.query(
        `INSERT INTO users_imgs ("name", "src", "user_id") VALUES ($1, $2, $3) RETURNING *`,
        [bodyImg.name, bodyImg.src, userId]
      );

      return result.rows[0];
    } finally {
      client.release();
    }
  }
}

export const usersServices = new UsersServices();
