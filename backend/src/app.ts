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

// swagger 셋업
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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

app.listen(process.env.PORT ?? 8080, () => {
  logger.info(`The server is listening to ${process.env.PORT}`);
});
