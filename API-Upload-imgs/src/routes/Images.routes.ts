import { Router } from 'express';
import { upload } from '../config/multer';
import { imagensController } from '../controllers/Images.controller';

export const imagesRouter = Router();

imagesRouter.post(
  '/uploads/:userID',
  upload.single('file'),

  imagensController.createImage
);

imagesRouter.delete('/exclude/image/:imageID', imagensController.deleteImage);
