import sequelize from '../config/db.config';

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const retryDbConnection = async () => {
  const backoffIntervals = [10, 20, 40]; // in seconds
  for (const seconds of backoffIntervals) {
    try {
      console.log(`Attempting to connect to the database... (Waited for ${seconds} seconds)`);
      await sequelize.authenticate();
      console.log('Database connected successfully.');
      return;
    } catch (error) {
      console.error(`Failed to connect to the database. Retrying in ${seconds} seconds... and the error is this : `, error);
      await wait(seconds * 1000);
    }
  }

  console.error('All retry attempts failed. Unable to connect to the database.');
  process.exit(1); // Exits the application if the database connection is not established
};
