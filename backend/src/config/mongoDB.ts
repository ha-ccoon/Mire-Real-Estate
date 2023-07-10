import dotenv from 'dotenv';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { resolve } from 'path';
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
    throw error;
  }
};

export default connectToMongoDB;
