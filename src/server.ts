import express from 'express';
import * as dotenv from 'dotenv';
import { retryDbConnection } from './utils/retryDbConnection';
import authRoutes from './routes/auth.route';
import { errorHandler } from './middlewares/errorHandler';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use(errorHandler);

// Connect to database with retry logic
retryDbConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Application failed to start due to database connection error.');
  process.exit(1);
});
