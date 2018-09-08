import * as express from 'express';
import { Application, Response, Request } from 'express';

const port: number = 3000;
const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Listening on port 3000');
});

app.listen(port, (req: Request, res: Response) => {
  console.log(`listening on ${port}`);
});