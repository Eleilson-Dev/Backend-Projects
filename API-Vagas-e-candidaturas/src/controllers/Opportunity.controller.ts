import { Request, Response } from 'express';
import { OpportunityServices } from '../services/Opportunity.services';
import { injectable, inject } from 'tsyringe';

@injectable()
export class OpportunityController {
  constructor(
    @inject('OpportunityServices')
    private opportunityServices: OpportunityServices
  ) {}

  public create = async (req: Request, res: Response) => {
    const id = res.locals.decode.id;
    const response = await this.opportunityServices.create(id, req.body);

    return res.status(201).json(response);
  };

  public findMany = async (req: Request, res: Response) => {
    const response = await this.opportunityServices.findMany();

    return res.status(200).json(response);
  };

  public findOne = (req: Request, res: Response) => {
    const response = this.opportunityServices.findOne(res.locals.opportunity);

    return res.status(200).json(response);
  };

  public update = async (req: Request, res: Response) => {
    const response = await this.opportunityServices.update(
      Number(req.params.id),
      req.body
    );

    return res.status(200).json(response);
  };

  public delete = async (req: Request, res: Response) => {
    await this.opportunityServices.delete(Number(req.params.id));

    return res.status(204).json();
  };
}
