import { injectable } from 'tsyringe';
import { prisma } from '../database/prisma';
import {
  TOpportunity,
  TOpportunityCreate,
  TOpportunityUpdate,
} from '../schemas/opportunity.schema';

@injectable()
export class OpportunityServices {
  public create = async (
    userId: number,
    body: TOpportunityCreate
  ): Promise<TOpportunity> => {
    const data = await prisma.opportunity.create({
      data: { ...body, userId: userId },
    });

    return data;
  };

  public findMany = async (): Promise<TOpportunity[]> => {
    const data = await prisma.opportunity.findMany();

    return data;
  };

  public findOne = (opportunity: TOpportunity): TOpportunity => {
    return opportunity;
  };

  public update = async (
    id: number,
    body: TOpportunityUpdate
  ): Promise<TOpportunity> => {
    const data = await prisma.opportunity.update({
      where: { id },
      data: body,
    });

    return data;
  };

  public delete = async (id: number): Promise<void> => {
    await prisma.opportunity.delete({ where: { id } });
  };
}
