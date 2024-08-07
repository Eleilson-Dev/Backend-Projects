import { prisma } from '../database/prisma';
import { IUserData, TUserUpdateData } from '../interfaces/UserData.interface';
import fs from 'fs';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class UserServices {
  public createUser = async (UserData: IUserData) => {
    try {
      const passwordHash = (await bcrypt.hash(UserData.password, 10)) as string;

      return await prisma.user.create({
        data: { ...UserData, password: passwordHash },
      });
    } catch (error) {
      console.log(error);
      return { error: 'internal server error' };
    }
  };

  public login = (userData: any, userAccess: string) => {
    const token = jwt.sign(userAccess, process.env.JWT_SECRET as string, {
      expiresIn: '24h',
    });

    const user = {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      createdAt: userData.createdAt,
      updatedAt: userData.updatedAt,
    };

    return { user, token };
  };

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
      const user = await prisma.user.findFirst({
        where: { id: userID },
        include: { images: true },
      });

      if (!user) {
        return { error: 'user not found' };
      }

      user.images.forEach((image) => {
        fs.unlinkSync(image.src);
      });

      return await prisma.user.delete({ where: { id: userID } });
    } catch (error) {
      console.log(error);
      return { error: 'internal server error' };
    }
  };
}

export const userServices = new UserServices();
