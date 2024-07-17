import { Request, Response } from 'express';

class UsersController {
  public register(req: Request, res: Response) {
    return res.status(200).json({ msg: 'Tudo certo' });
  }
}

export const usersController = new UsersController();
