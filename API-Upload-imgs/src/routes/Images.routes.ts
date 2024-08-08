import { Router } from 'express';
import { upload } from '../config/multer';
import { ImagesController } from '../controllers/Images.controller';
import { ImagesServices } from '../services/Images.services';
import { VerifyToken } from '../middlewares/VirifyToken.middleware';
import { container } from 'tsyringe';

export const imagesRouter = Router();

container.registerSingleton('ImagesServices', ImagesServices);
const imagensController = container.resolve(ImagesController);

imagesRouter.post(
  '/upload/image/:userID',
  VerifyToken.execute,
  upload.single('file'),
  (req, res) => imagensController.createImage(req, res)
);

imagesRouter.delete('/exclude/image/:imageID', (req, res) =>
  imagensController.deleteImage(req, res)
);
