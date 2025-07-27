import express  from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import  connectDB from './config/db.js';
import generateToken from './config/jwt.js';
 // Ensure JWT config is loaded
import errorMiddleware from './middlewares/errorMiddleware.js';

// Load env vars
dotenv.config();

// Connect to database
connectDB();

generateToken(); // Ensure JWT token generation is available
// Route files
import authRoutes from './routes/authRoutes.js';
import movieRoutes from './routes/movieRoutes.js';
import userRoutes from './routes/userRoutes.js';

// Route files
// const authRoutes = require('./routes/authRoutes');
// const movieRoutes = require('./routes/movieRoutes');
// const userRoutes = require('./routes/userRoutes');

const app = express();

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Enable CORS
app.use(cors());

// Set security headers
app.use(helmet());

// Mount routers
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/movies', movieRoutes);
app.use('/api/v1/users', userRoutes);

// Error handler middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});