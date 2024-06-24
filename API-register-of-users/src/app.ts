import 'express-async-errors';
import express, { json } from 'express';
import helmet from 'helmet';
import { usersRouter } from './routes/usersRouter.routes';
import { HandleErrors } from './errors/HandleErrors.middleware';

export const app = express();

app.use(helmet());
app.use(json());
app.use('/users', usersRouter);
app.use(HandleErrors.execute);
