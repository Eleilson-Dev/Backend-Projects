const express = require('express');
const usersRouter = require('./routes/users.routes');

const app = express();

const PORT = 3000;

app.use(usersRouter);

app.listen(PORT, () => {
  console.log(`app runing on http://localhost:${PORT}`);
});
