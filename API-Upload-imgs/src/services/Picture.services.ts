import pool from '../connection/db';
import fs from 'fs';

class PictureServices {
  public async findAllImgs() {
    const client = await pool.connect();

    try {
      const result = await pool.query(`SELECT * FROM users_imgs;`);

      return result.rows;
    } finally {
      client.release();
    }
  }
  public async findImgsByIdUser(userId: Number) {
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

  public async sendImg(userId: Number, userName: String, srcImg: string) {
    const client = await pool.connect();

    try {
      const result = await pool.query(
        `INSERT INTO users_imgs ("name", "src", "user_id") VALUES ($1, $2, $3) RETURNING *`,
        [userName, srcImg, userId]
      );

      return result.rows[0];
    } finally {
      client.release();
    }
  }

  public async deleteImg(pictureId: Number) {
    const client = await pool.connect();

    try {
      const result = await pool.query(
        `DELETE FROM users_imgs WHERE "id" = $1 RETURNING *`,
        [pictureId]
      );

      fs.unlinkSync(result.rows[0].src);

      return result.rows[0];
    } finally {
      client.release();
    }
  }
}

export const pictureServices = new PictureServices();
