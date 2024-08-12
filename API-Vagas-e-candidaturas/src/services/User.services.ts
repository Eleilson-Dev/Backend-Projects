import { injectable } from 'tsyringe';
import {
  TUserLoginBody,
  TUserLoginReturn,
  TUserRegisterReturn,
  TUserRegiterBody,
  TUserReturn,
  userRegisterReturnSchema,
  userReturnSchema,
} from '../schemas/user.scheme';
import { prisma } from '../database/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AppError } from '../erros/appError';

@injectable()
export class UserServices {
  public register = async (
    body: TUserRegiterBody
  ): Promise<TUserRegisterReturn> => {
    const hash = await bcrypt.hash(body.password, 10);

    const user = userRegisterReturnSchema.parse(
      await prisma.user.create({
        data: { ...body, password: hash },
      })
    );

    return user;
  };

  public login = async (body: TUserLoginBody): Promise<TUserLoginReturn> => {
    const user = await prisma.user.findFirst({ where: { email: body.email } });

    if (!user) {
      throw new AppError(403, 'User not registered');
    }

    const compare = await bcrypt.compare(body.password, user.password);

    if (!compare) {
      throw new AppError(403, 'Email end password doesnt match');
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: '24h',
    });

    return { user: userReturnSchema.parse(user), accessToken: token };
  };

  public getUser = async (id: number): Promise<TUserReturn> => {
    const user = userReturnSchema.parse(
      await prisma.user.findFirst({
        where: { id },
      })
    );

    if (!user) {
      throw new AppError(403, 'User not found');
    }

    return user;
  };
}
