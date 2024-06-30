import dotenv from 'dotenv';
import { app } from './app';
import { connect } from './connection/connectDB';

dotenv.config();

const port = 3000;

connect();

app.listen(port, () => {
  console.log(`API Runing on port ${port}}`);
});
