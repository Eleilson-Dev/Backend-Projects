import 'reflect-metadata';
import 'express-async-errors';
import express, { json } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { opportunityRouter } from './routes/opportunity.routes';
import { HandleErros } from './middlewares/HandleErrors.middleware';
import { userRouter } from './routes/user.routes';

export const app = express();

app.use(cors());
app.use(json());
app.use(helmet());
app.use('/opportunities', opportunityRouter);
app.use('/users', userRouter);
app.use(HandleErros.execute);
