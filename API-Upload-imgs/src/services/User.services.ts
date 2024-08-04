import { prisma } from '../database/prisma';
import { IUserData, TUserUpdateData } from '../interfaces/UserData.interface';

class UserServices {
  public findAll = async () => {
    try {
      return await prisma.user.findMany();
    } catch (error) {
      console.log(error);
      return { error: 'internal server error' };
    }
  };

  public findOne = async (userID: number) => {
    try {
      return await prisma.user.findFirst({
        where: { id: userID },
        include: { images: true },
      });
    } catch (error) {
      console.log(error);
      return { error: 'internal server error' };
    }
  };

  public createUser = async (UserData: IUserData) => {
    try {
      return await prisma.user.create({ data: UserData });
    } catch (error) {
      console.log(error);
      return { error: 'internal server error' };
    }
  };

  public updateUser = async (
    userID: number,
    userUpdateData: TUserUpdateData
  ) => {
    try {
      return await prisma.user.update({
        where: { id: userID },
        data: { ...userUpdateData, updatedAt: new Date() },
      });
    } catch (error) {
      console.log(error);
      return { error: 'internal server error' };
    }
  };

  public deleteUser = async (userID: number) => {
    try {
      return await prisma.user.delete({ where: { id: userID } });
    } catch (error) {
      console.log(error);
      return { error: 'internal server error' };
    }
  };
}

export const userServices = new UserServices();
