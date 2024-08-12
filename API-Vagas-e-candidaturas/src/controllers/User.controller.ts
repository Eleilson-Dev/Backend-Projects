import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { UserServices } from '../services/User.services';

@injectable()
export class UserController {
  constructor(@inject('UserServices') private userServices: UserServices) {}

  public register = async (req: Request, res: Response): Promise<Response> => {
    const response = await this.userServices.register(req.body);

    return res.status(201).json(response);
  };

  public login = async (req: Request, res: Response): Promise<Response> => {
    const response = await this.userServices.login(req.body);

    return res.status(200).json(response);
  };

  public getUser = async (req: Request, res: Response): Promise<Response> => {
    const id = res.locals.decode.id;
    const response = await this.userServices.getUser(id);

    return res.status(200).json(response);
  };
}
