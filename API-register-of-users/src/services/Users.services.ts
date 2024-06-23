import pool from '../connection/db';
import { generatID, usersDatabase } from '../database/database';
import { IUser, TUpdateUser, TUserOmited } from '../interfaces/user.interface';

class UsersServices {
  createUser = async (userData: TUserOmited) => {
    const client = await pool.connect();

    try {
      const result = await pool.query(
        `
        INSERT INTO users (name, email, work, wage) VALUES ($1, $2, $3, $4) RETURNING *`,
        [userData.name, userData.email, userData.work, userData.wage]
      );

      return result.rows[0];
    } finally {
      client.release();
    }
  };

  getAll = async () => {
    const client = await pool.connect();

    try {
      const result = await pool.query(`SELECT * FROM users`);
      return result.rows;
    } finally {
      client.release();
    }
  };

  getById = async (userID: number) => {
    const client = await pool.connect();

    try {
      const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [
        userID,
      ]);

      return result.rows[0];
    } finally {
      client.release();
    }
  };

  updateUser = async (userID: number, userData: TUpdateUser) => {
    const client = await pool.connect();
    try {
      const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [
        userID,
      ]);

      const currentUser = result.rows[0];
      const { name, email, work, wage } = userData;

      const newName = name === undefined ? currentUser.name : name;
      const newEmail = email === undefined ? currentUser.email : email;
      const newWork = work === undefined ? currentUser.work : work;
      const newWage = wage === undefined ? currentUser.wage : wage;

      const updateQuery = {
        text: 'UPDATE users SET name = $1, email = $2, work = $3, wage = $4, updated_At = $5 WHERE id = $6',
        values: [newName, newEmail, newWork, newWage, new Date(), userID],
      };

      await pool.query(updateQuery);

      return { user: 'updated' };
    } finally {
      client.release();
    }
  };

  deleteUser = async (userID: number) => {
    const client = await pool.connect();

    try {
      const result = await pool.query(`DELETE FROM users WHERE id = $1`, [
        userID,
      ]);

      return result.rows[0];
    } finally {
      client.release();
    }
  };
}

export const usersService = new UsersServices();
