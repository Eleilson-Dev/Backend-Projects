import { Router } from 'express';
import { usersController } from '../controllers/Users.controller';
import { pictureController } from '../controllers/Picture.controller';
import { upload } from '../config/multer';
export const usersRouter = Router();

usersRouter.get('/', usersController.getAll);
usersRouter.post('/register', usersController.register);

usersRouter.post(
  '/uploads/:id',
  upload.single('file'),
  pictureController.sendImg
);
usersRouter.get('/pictures/:id', pictureController.findImgsByIdUser);
usersRouter.get('/pictures/', pictureController.findAllImgs);
usersRouter.delete('/pictures/exclude/:id', pictureController.deleteImg);
