import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

// cors
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Backend on...');
});

export const router = Router();

server.use('/api', router);

createConnection()
  .then((connection) => {})
  .catch((error) => console.log(error));
