import express from 'express';
import dotenv from 'dotenv';
import { logger } from './config/winston';
import 'reflect-metadata';
import indexRouter from './routes/index';

dotenv.config();
const app = express();

app.use('/api', indexRouter);

// 포트 연결
app.listen(process.env.PORT ?? 8080, () => {
  logger.info(`The server is listening to ${process.env.PORT}`);
});
