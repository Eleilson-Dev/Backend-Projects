export interface IUserData {
  name: string;
  email: string;
}

export type TUserUpdateData = Pick<IUserData, 'name'>;
