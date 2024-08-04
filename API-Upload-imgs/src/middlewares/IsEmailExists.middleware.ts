import { NextFunction, Request, Response } from 'express';

export class IsEmailExists {
  static async execute(req: Request, res: Response, next: NextFunction) {
    if (!req.file) {
      return res.status(400).json({ error: 'Arquivo não enviado' });
    }

    const userID = Number(req.params.userID);
    if (isNaN(userID)) {
      return res.status(400).json({ error: 'ID do usuário inválido' });
    }

    req.body.userID = userID;

    next();
  }
}
