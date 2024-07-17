import { app } from './app';

app.listen(process.env.PORT, () => {
  console.log(`API rodando em http://localhost:${process.env.PORT}`);
});
