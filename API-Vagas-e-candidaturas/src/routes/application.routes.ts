import { Router } from 'express';
import { container } from 'tsyringe';
import { ApplicationController } from '../controllers/Application.controller';
import { ValidateBody } from '../middlewares/ValidatyBody.middleware';
import { applicationCreateSchema } from '../schemas/application.schema';
import { ApplicationServices } from '../services/Application.services';
export const applicationRouter = Router();

container.registerSingleton('ApplicationServices', ApplicationServices);
const applicationController = container.resolve(ApplicationController);

applicationRouter.post(
  '/:id/applications',
  ValidateBody.execute(applicationCreateSchema),
  (req, res) => applicationController.create(req, res)
);

applicationRouter.get('/:id/applications', (req, res) =>
  applicationController.findMany(req, res)
);
