import { Request, Response, NextFunction } from 'express';
import { retryDbConnection } from '../utils/retryDbConnection';

export const errorHandler = async (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err.message);

  // Check if the error is a Sequelize connection error
  if (err.name === 'SequelizeConnectionError' || err.name === 'SequelizeHostNotFoundError' || err.name === 'SequelizeAccessDeniedError') {
    console.log('Database connection error detected. Retrying...');

    try {
      // Call the retry function to reconnect to the database
      await retryDbConnection();
      console.log('Reconnected to the database successfully.');
    } catch (retryError) {
      
    }
  }

  res.status(500).json({ 
    message: 'Something went wrong', 
    error: err.message 
  });
};
