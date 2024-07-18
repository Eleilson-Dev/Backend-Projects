import express, { json } from 'express';
import { usersRouter } from './routes/usersRouter';

export const app = express();

app.use(json());
app.use('/users', usersRouter);
