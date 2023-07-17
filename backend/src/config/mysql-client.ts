import mysql, { Pool, PoolOptions } from 'mysql2/promise';
import dotenv from 'dotenv';
import logger from './winston';

dotenv.config();

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

class ConnectToMySQL {
  pool: Pool;

  constructor() {
    this.pool = mysql.createPool(poolOptions);
    this.checkConnection();
  }

  async checkConnection() {
    try {
      const connection = await this.pool.getConnection();
      logger.info('[MYSQL]: MySQL is connected.');
      connection.release();
    } catch (error: any) {
      switch (error.code) {
        case 'PROTOCOL_CONNECTION_LOST':
          logger.error('[MYSQL]: Database connection was closed.');
          break;
        case 'ER_CON_COUNT_ERROR':
          logger.error('[MYSQL]: Database has too many connections.');
          break;
        case 'ECONNREFUSED':
          logger.error('[MYSQL]: Database connection was refused.');
          break;
        default:
          logger.error(
            '[MYSQL]: Unknown error occurred while connecting to the database.',
            error
          );
          break;
      }
    }
  }
}

export default new ConnectToMySQL();
