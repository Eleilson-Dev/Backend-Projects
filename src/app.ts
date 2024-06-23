import express, { json } from 'express';
import { router } from './routes/users.routes';

export const app = express();

app.use(json());
app.use('/users', router);
