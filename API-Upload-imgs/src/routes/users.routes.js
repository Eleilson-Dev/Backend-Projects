const express = require('express');
const usersController = require('../controllers/Users.controller');

const usersRouter = express.Router();

usersRouter.get('/list', usersController.listUsers);
usersRouter.post('/store', usersController.store);

module.exports = usersRouter;
