import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(3333, () => {
  console.log('Backend on...');
});

createConnection()
  .then((connection) => { })
  .catch((error) => console.log(error));
