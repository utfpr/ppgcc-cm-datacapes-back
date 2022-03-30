import 'reflect-metadata';
import { createConnection } from 'typeorm';
const http = require('http');
import './utils/response/customSuccess';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

createConnection()
  .then((connection) => {
    console.log(connection);
  })
  .catch((error) => console.log(error));
