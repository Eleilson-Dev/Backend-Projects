const express = require('express');
const usersController = require('../controllers/Users.controller');
const userImagesController = require('../controllers/UserImages.controller');
const upload = require('../config/multer');
const IsUserExists = require('../middlewares/IsUserExists.middleware');

const usersRouter = express.Router();

usersRouter.get('/list', usersController.listUsers);
usersRouter.get(
  '/finduser/:user_id',
  IsUserExists.execute,
  usersController.findUserById
);
usersRouter.post('/store', usersController.store);
usersRouter.delete(
  '/exclude/user/:user_id',
  IsUserExists.execute,
  usersController.deleteUser
);

usersRouter.post(
  '/uploads/:user_id',
  IsUserExists.execute,
  upload.single('file'),
  userImagesController.upload
);
usersRouter.get('/pictures', userImagesController.findAllImages);
usersRouter.delete('/pictures/exclude/:img_id', userImagesController.deleteImg);

module.exports = usersRouter;
