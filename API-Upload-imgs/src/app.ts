import express from 'express';
import { usersRouter } from './routes/User.routes';
import { imagesRouter } from './routes/Images.routes';
import { HandleErros } from './middlewares/HandleErrors.middleware';

export const app = express();

app.use(express.json());

app.use('/users', usersRouter);
app.use('/images', imagesRouter);
app.use(HandleErros.execute);
