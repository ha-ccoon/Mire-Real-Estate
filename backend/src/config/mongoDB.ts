import dotenv from 'dotenv';
import { MongoClient, Db } from 'mongodb';
import logger from './winston';

dotenv.config();

const connectMongo = async (): Promise<Db | undefined> => {
  try {
    const url = String(process.env.MONGO_URI);
    const name = process.env.MONGODB_NAME;

    const client: MongoClient = await MongoClient.connect(url);
    const db: Db = client.db(name);

    logger.info('MongoDB is connected');
    return db;
  } catch (error) {
    logger.error('MongoDB connection error', error);
  }
};

export default connectMongo;
