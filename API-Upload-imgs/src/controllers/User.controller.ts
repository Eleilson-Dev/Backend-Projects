import { Request, Response } from 'express';
import { userServices } from '../services/User.services';

class UserController {
  public createUser = async (req: Request, res: Response) => {
    const result = await userServices.createUser({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    return res.status(201).json(result);
  };

  public login = async (req: Request, res: Response) => {
    const { user, userAccess } = res.locals;
    const response = await userServices.login(user, userAccess);

    return res.status(200).json(response);
  };

  public findAll = async (req: Request, res: Response) => {
    const result = await userServices.findAll();
    return res.status(200).json(result);
  };

  public findOne = async (req: Request, res: Response) => {
    const result = await userServices.findOne(Number(req.params.userID));
    return res.status(200).json(result);
  };

  public updateUser = async (req: Request, res: Response) => {
    const result = await userServices.updateUser(
      Number(req.params.userID),
      req.body
    );

    return res.status(200).json(result);
  };

  public deleteUser = async (req: Request, res: Response) => {
    await userServices.deleteUser(Number(req.params.userID));
    res.status(200).json({ msg: 'user deleted' });
  };
}

export const userController = new UserController();
