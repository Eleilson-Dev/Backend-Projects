import { generatID, usersDatabase } from '../database/database';
import { TUserOmited } from '../interfaces/user.interface';

class UsersServices {
  createUser(userData: TUserOmited) {
    const newUser = {
      id: generatID(),
      name: userData.name,
      email: userData.email,
      work: userData.work,
      wage: userData.wage,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    usersDatabase.push(newUser);

    return newUser;
  }

  getAll() {
    return usersDatabase;
  }

  getById(userID: number) {
    const foundIndex = usersDatabase.findIndex((user) => user.id === userID);

    if (foundIndex === -1) {
      return { error: 'user not found' };
    }

    return usersDatabase[foundIndex];
  }
}

export const usersService = new UsersServices();
