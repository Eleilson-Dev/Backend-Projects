import express, { json } from 'express';
import dotenv from 'dotenv';
import { usersRouter } from './routes/usersRouter';

dotenv.config();

export const app = express();

app.use(json());
app.use(usersRouter);
