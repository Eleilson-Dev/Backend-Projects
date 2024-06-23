import { IUser } from '../interfaces/user.interface';
export const usersDatabase: IUser[] = [];

let id: number = 0;

export const generatID = () => {
  id++;
  return id;
};
