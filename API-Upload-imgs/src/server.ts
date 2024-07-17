import { config } from 'dotenv';
config();

import { app } from './app';
import { ensureTableExists } from './connection/db';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await ensureTableExists();

    app.listen(PORT, () => {
      console.log(`API successfully on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
