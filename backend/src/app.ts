import express from 'express';
import dotenv from 'dotenv';
import logger from './config/winston';
import 'reflect-metadata';
import indexRouter from './routes/index';
import connectToMongoDB from './config/mongoDB';
import mysqlClient from './config/mysql-client';

dotenv.config();
const app = express();

app.use('/api', indexRouter);

// 데이터베이스 연결
connectToMongoDB();

// 포트 연결
app.listen(process.env.PORT ?? 8080, () => {
  logger.info(`The server is listening to ${process.env.PORT}`);
});
