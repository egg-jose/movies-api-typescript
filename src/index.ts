import * as express from 'express';

const server = express();

server.use('/', (_req, res) => {
  res.status(200).json('Hello World');
});

server.listen(4000, () => {
  console.log('Running at localhost:4000');
});
