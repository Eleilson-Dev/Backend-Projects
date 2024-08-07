import { Router } from 'express';
import { upload } from '../config/multer';
import { imagensController } from '../controllers/Images.controller';
import { VerifyToken } from '../middlewares/VirifyToken.middleware';
export const imagesRouter = Router();

imagesRouter.post(
  '/uploads/:userID',
  VerifyToken.execute,
  upload.single('file'),
  imagensController.createImage
);

imagesRouter.delete('/exclude/image/:imageID', imagensController.deleteImage);
