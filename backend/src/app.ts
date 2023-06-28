import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import path from 'path';
import * as swaggerDocument from '../swagger.json';
import { logger } from './config/winston';
import 'reflect-metadata';
import AppDataSource from './config/data-source';

dotenv.config();
const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(5000, () => {
  logger.info('The server is listening to 5000');
});

app.get('/api-docs', (req, res) => {
  logger.info('GET /');
  res.sendStatus(200);
});

app.get('/api/users', (req, res) => {
  const users = [
    { id: '1', name: 'John' },
    { id: '2', name: 'Jane' },
  ];
  res.json(users);
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
