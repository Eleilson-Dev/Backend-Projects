import express, { json } from 'express';
import cors from 'cors';
import { agendaRoutes } from './routers/agendaRouter.routes';

export const app = express();

app.use(cors());
app.use(json());
app.use(agendaRoutes);
