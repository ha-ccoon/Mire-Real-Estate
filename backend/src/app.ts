import express from 'express';
import dotenv from 'dotenv';
import logger from './config/winston';
import 'reflect-metadata';
import indexRouter from './routes/index';
import pool from './config/mysql';
import connectToMongoDB from './config/mongoDB';

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
connectToMongoDB();

// 포트 연결
app.listen(process.env.PORT ?? 8080, () => {
  logger.info(`The server is listening to ${process.env.PORT}`);
});
