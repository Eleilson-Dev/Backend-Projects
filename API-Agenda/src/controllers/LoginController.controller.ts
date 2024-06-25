import { Request, Response } from 'express';

class LoginController {
  index(req: Request, res: Response) {
    return res.status(200).json({ meg: 'tudo certo' });
  }
}

export const loginController = new LoginController();
