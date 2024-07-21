const express = require('express');

const usersRouter = express.Router();

usersRouter.get('/', (req, res) => {
  return res.json({ msg: 'hello' });
});

module.exports = usersRouter;
