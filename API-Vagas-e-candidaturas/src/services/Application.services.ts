import { injectable } from 'tsyringe';
import { prisma } from '../database/prisma';
import {
  TApplication,
  TApplicationCreate,
} from '../schemas/application.schema';

@injectable()
export class ApplicationServices {
  public create = async (
    opportunityId: number,
    body: TApplicationCreate
  ): Promise<TApplication> => {
    const data = await prisma.application.create({
      data: { opportunityId, ...body },
    });

    return data;
  };

  public findMany = async (opportunityId: number): Promise<TApplication[]> => {
    const data = await prisma.application.findMany({
      where: { id: opportunityId },
    });

    return data;
  };
}
