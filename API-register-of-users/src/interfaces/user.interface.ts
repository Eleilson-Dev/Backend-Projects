import { AnyZodObject } from 'zod';

export interface IRequestSchemas {
  params?: AnyZodObject;
  body?: AnyZodObject;
  query?: AnyZodObject;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  work: string;
  wage: number;
  createdAt: Date;
  updatedAt: Date;
}

export type TUserOmited = Omit<IUser, 'id' | 'createdAt' | 'updatedAt'>;
export type TUpdateUser = Partial<TUserOmited>;
