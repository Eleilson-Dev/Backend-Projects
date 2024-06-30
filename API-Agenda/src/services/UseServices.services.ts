import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/UserModel.model';
import { IUser } from '../interfaces/interfaces';

class UserServices {
  getAllUsers = async () => {
    try {
      const allUsers = await User.find();
      return allUsers;
    } catch (error) {
      console.log(error);
    }
  };

  getUserByID = async (userID: string) => {
    try {
      const user = await User.findById(userID);

      return { user: { email: user?.email, id: user?._id } };
    } catch (error) {
      console.log(error);
    }
  };

  userLogin = async (loginData: { email: string }) => {
    try {
      const user = await User.findOne({ email: loginData.email });

      const token = jwt.sign(
        { userId: user?._id, email: user?.email },
        process.env.TOKEN_SECRET!,
        { expiresIn: '1h' }
      );

      return {
        message: 'User logged in',
        token,
        user: { email: user?.email, id: user?._id },
      };
    } catch (error) {
      return { message: 'Internal server error' };
    }
  };

  userRegister = async (userData: IUser) => {
    const salt = bcryptjs.genSaltSync();
    userData.password = bcryptjs.hashSync(userData.password, salt);

    try {
      const newUser = new User({
        email: userData.email,
        password: userData.password,
      });

      await newUser.save();
      return { message: 'user created', responseAPI: userData };
    } catch (error) {
      console.log(error);
    }
  };
}

export const userServices = new UserServices();
