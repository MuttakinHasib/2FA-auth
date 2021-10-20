// Config DotEnv
import './env.js';
import 'colors';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { errorHandler, notFound } from './middlewares/error.js';
import connectDB from './configs/db.js';
import userRoutes from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';

// Connect MongoDB
connectDB();

const app = express();

// Port
const port = process.env.PORT || 5000;

app.use(cookieParser());
// Bypass cors
app.use(cors({ credentials: true, origin: process.env.API_URL }));

// const __dirname = path.resolve();

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '/client/build')));
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(express.json());

// Default Routes
app.get('/', (_req, res) => {
  res.json({ message: 'Welcome to 2FA Authentication.' });
});

// Routes
app.use(`/api/users`, userRoutes);

// Error Handler
app.use(notFound);
app.use(errorHandler);

// Log Server Connection
app.listen(port, () =>
  console.log(`Server running on port: ${port}`.yellow.bold)
);
