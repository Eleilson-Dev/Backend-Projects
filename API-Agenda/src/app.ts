import express from 'express';
import cors from 'cors';
import { agendaRouter } from './routers/agendaRouter.routes';
import bodyParser from 'body-parser';
import session from 'express-session';

export const app = express();

app.use(cors());
app.use(
  session({
    secret: 'seuSegredoAqui',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(bodyParser.json());
app.use(agendaRouter);
