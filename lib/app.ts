import express, { Application, Response, Request } from 'express';
import morgan from 'morgan';
import isCommonPassword from './is-common';

const app: Application = express();

app.use(morgan('short'));

app.get('/check/:password', (req: Request, res: Response) => {
  const { password } = req.params;
  res.json({
    password,
    isCommon: isCommonPassword(decodeURIComponent(password))
  });
});

export default app;
