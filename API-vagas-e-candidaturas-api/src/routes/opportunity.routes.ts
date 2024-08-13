import { Router } from 'express';
import { OpportunityController } from '../controllers/Opportunity.controller';
import { applicationRouter } from './application.routes';
import { OpportunityServices } from '../services/Opportunity.services';
import { ValidateBody } from '../middlewares/ValidatyBody.middleware';
import {
  opportunityCreateSchema,
  opportunityUpdateSchema,
} from '../schemas/opportunity.schema';
import { IsOpportunityIdValide } from '../middlewares/IsOpportunityIdValide.middleware';
import { container } from 'tsyringe';
import { VerifyToken } from '../middlewares/verifyToken.middleware';
import { IsOpportunityOwner } from '../middlewares/IsOpportunityOwner.middleware';

export const opportunityRouter = Router();

container.registerSingleton('OpportunityServices', OpportunityServices);
const opportunityController = container.resolve(OpportunityController);

opportunityRouter.post(
  '/',
  ValidateBody.execute(opportunityCreateSchema),
  VerifyToken.execute,
  (req, res) => opportunityController.create(req, res)
);

opportunityRouter.get('/', (req, res) =>
  opportunityController.findMany(req, res)
);

opportunityRouter.use('/:id', IsOpportunityIdValide.execute);
opportunityRouter.get('/:id', (req, res) =>
  opportunityController.findOne(req, res)
);

opportunityRouter.patch(
  '/:id',
  ValidateBody.execute(opportunityUpdateSchema),
  VerifyToken.execute,
  IsOpportunityOwner.execute,
  (req, res) => opportunityController.update(req, res)
);

opportunityRouter.delete(
  '/:id',
  VerifyToken.execute,
  IsOpportunityOwner.execute,
  (req, res) => opportunityController.delete(req, res)
);

opportunityRouter.use('/', applicationRouter);
