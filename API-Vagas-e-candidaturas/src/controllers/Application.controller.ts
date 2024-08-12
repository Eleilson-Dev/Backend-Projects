import { Request, Response } from 'express';
import { ApplicationServices } from '../services/Application.services';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ApplicationController {
  constructor(
    @inject('ApplicationServices')
    private applicationServices: ApplicationServices
  ) {}

  public create = async (req: Request, res: Response) => {
    const reponse = await this.applicationServices.create(
      Number(req.params.id),
      req.body
    );

    return res.status(201).json(reponse);
  };

  public findMany = async (req: Request, res: Response) => {
    const response = await this.applicationServices.findMany(
      Number(req.params.id)
    );

    return res.status(200).json(response);
  };
}
