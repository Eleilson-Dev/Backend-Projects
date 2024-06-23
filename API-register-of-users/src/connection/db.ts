import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: parseInt(process.env.PGPORT || '5432', 10),
});

pool.connect((err) => {
  if (err) {
    console.log('Error connecting database', err.stack);
  } else {
    console.log('connected database');
  }
});

export const ensureTableExists = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      email VARCHAR(50) UNIQUE NOT NULL,
      work VARCHAR(50),
      wage NUMERIC CHECK (wage > 0),
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `;

  const client = await pool.connect();

  try {
    await client.query(createTableQuery);
  } catch (error) {
    console.error('Error creating products table:', error);
  } finally {
    client.release();
  }
};

export default pool;
