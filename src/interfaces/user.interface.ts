export interface IUser {
  id: number;
  name: string;
  email: string;
  work: string;
  wage: number;
  createdAt: Date;
  updatedAt: Date;
}

export type TUserOmited = Omit<IUser, 'id' | 'createdAt' | 'updatedt'>;
