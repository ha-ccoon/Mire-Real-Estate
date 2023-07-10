import express from 'express';
import dotenv from 'dotenv';
import logger from './config/winston';
import 'reflect-metadata';
import indexRouter from './routes/index';
import pool from './config/mysql';
import connectMongo from './config/mongoDB';
// import { PoolConnection } from 'mysql2/typings/mysql/lib/PoolConnection';

dotenv.config();
const app = express();

app.use('/api', indexRouter);

// MySQL 연결
// pool.getConnection((error: Error, connection: PoolConnection | undefined) => {
//   if (error) {
//     logger.error('MySQL Connection: ', error);
//   }

//   logger.info('MySQL is connected');
//   pool.releaseConnection(connection);
// });

// MongoDB 연결
connectMongo();

// 포트 연결
app.listen(process.env.PORT ?? 8080, () => {
  logger.info(`The server is listening to ${process.env.PORT}`);
});
