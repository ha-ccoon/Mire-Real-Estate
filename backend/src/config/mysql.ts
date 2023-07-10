import mysql, { Pool, PoolOptions } from 'mysql2/promise';
import dotenv from 'dotenv';
import logger from './winston';

dotenv.config();

const connectToMySQL = async () => {
  try {
    const poolOptions: PoolOptions = {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      port: process.env.MYSQL_PORT
        ? parseInt(process.env.MYSQL_PORT, 10)
        : undefined,
      database: process.env.MYSQL_DATABASE,
      waitForConnections: true,
      connectionLimit: 10,
      maxIdle: 10,
      idleTimeout: 60000,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0,
    };

    const connectionPool: Pool = await mysql.createPool(poolOptions);
    logger.info('MySQL is connected');
    return connectionPool;
  } catch (error) {
    logger.error('MySQL Connection', error);
    throw error;
  }
};

export default connectToMySQL;
