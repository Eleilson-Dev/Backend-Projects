import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: parseInt(process.env.PGPORT || '5432', 10),
});

pool.connect((err) => {
  if (err) {
    console.error('Error connecting to database', err.stack);
  } else {
    console.log('Connected database');
  }
});

export const ensureTableExists = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      price NUMERIC NOT NULL
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
