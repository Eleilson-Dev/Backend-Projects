import { Request, Response } from 'express';
import { UserServices } from '../services/User.services';
import { inject, injectable } from 'tsyringe';

@injectable()
export class UserController {
  constructor(@inject('UserServices') private userServices: UserServices) {}

  public createUser = async (req: Request, res: Response) => {
    const result = await this.userServices.createUser({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    return res.status(201).json(result);
  };

  public login = async (req: Request, res: Response) => {
    const { user, userAccess } = res.locals;

    const response = await this.userServices.login(user, userAccess);

    return res.status(200).json(response);
  };

  public findAll = async (req: Request, res: Response) => {
    const result = await this.userServices.findAll();
    return res.status(200).json(result);
  };

  public findOne = async (req: Request, res: Response) => {
    const result = await this.userServices.findOne(Number(req.params.userID));
    return res.status(200).json(result);
  };

  public updateUser = async (req: Request, res: Response) => {
    const result = await this.userServices.updateUser(
      Number(req.params.userID),
      req.body
    );

    return res.status(200).json(result);
  };

  public deleteUser = async (req: Request, res: Response) => {
    await this.userServices.deleteUser(Number(req.params.userID));
    res.status(200).json({ msg: 'user deleted' });
  };
}
