import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import { dbCreateConnection } from './database/dbCreateConnection';

(async () => {
  await dbCreateConnection();
})();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(3333, () => {
  console.log('Backend on...');
});
