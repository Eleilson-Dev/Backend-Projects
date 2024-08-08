import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import { usersRouter } from './routes/User.routes';
import { HandleErros } from './middlewares/HandleErrors.middleware';

export const app = express();

app.use(express.json());

app.use('/users', usersRouter);
app.use(HandleErros.execute);
