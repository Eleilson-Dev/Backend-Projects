export interface IUserData {
  name: string;
  email: string;
  password: string;
}

export type TUserUpdateData = Pick<IUserData, 'name'>;
export type TLoginData = Omit<IUserData, 'name'>;
