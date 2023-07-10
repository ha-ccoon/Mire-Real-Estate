import dotenv from 'dotenv';
import mongoose from 'mongoose';
import logger from './winston';

dotenv.config();

const connectToMongoDB = async () => {
  try {
    const url = String(process.env.MONGO_URI);
    const name = process.env.MONGODB_NAME;

    const connection = await mongoose.connect(url);
    logger.info('MongoDB is connected');

    return connection;
  } catch (error) {
    logger.error('MongoDB connection error', error);
  }
};

export default connectToMongoDB;
