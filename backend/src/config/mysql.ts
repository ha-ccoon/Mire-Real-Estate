import mysql, { Pool, PoolOptions } from 'mysql2/promise';
import dotenv from 'dotenv';
import logger from './winston';

dotenv.config();

const connectMySQL = async () => {
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

    const pool: Pool = mysql.createPool(poolOptions);
    await pool;

    // class 만등러야해
  } catch (error) {
    logger.error('MySQL Connection: ', error);
  }
};

export default connectMySQL;
