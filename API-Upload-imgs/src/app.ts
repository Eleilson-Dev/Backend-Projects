import express from 'express';
import { usersRouter } from './routes/User.routes';
import { imagesRouter } from './routes/Images.routes';

export const app = express();

app.use(express.json());

app.use('/users', usersRouter);
app.use('/images', imagesRouter);
