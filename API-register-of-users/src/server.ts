import { app } from './app';
import { ensureTableExists } from './connection/db';

const port = 3000;

const startServer = async () => {
  try {
    await ensureTableExists();

    app.listen(port, () => {
      console.log(`API runing on => http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
