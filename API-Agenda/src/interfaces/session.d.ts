import { IUser } from './interfaces';

declare module 'express-session' {
  interface SessionData {
    user: IUser;
  }
}
