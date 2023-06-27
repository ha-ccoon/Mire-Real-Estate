import express from 'express';
import dotenv from 'dotenv';
import { logger } from './config/winston';
import 'reflect-metadata';
import AppDataSource from './config/data-source';

const app = express();

app.listen(5000, () => {
  logger.info('The server is listening to 5000');
});

app.get('/', (req, res) => {
  logger.info('GET /');
  res.sendStatus(200);
});

app.get('/error', (req, res) => {
  logger.error('Error message');
  res.sendStatus(500);
});

AppDataSource.initialize()
  .then(() => {
    logger.info('Database is connected');
  })
  .catch((error) => logger.error(error));
