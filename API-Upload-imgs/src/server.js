const express = require('express');
const usersRouter = require('./routes/users.routes');
require('./database');

const app = express();

const PORT = 3000;

app.use(express.json());
app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log(`app runing on http://localhost:${PORT}`);
});
