import AppError from './utils/appError';
import compression from 'compression';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import globalErrorHandler from './controllers/error.controllers';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import xss from 'xss-clean';

import authRouter from './routes/auth.routes';

const app = express()
  .use(express.json({ limit: '10kb' }))
  .use(cors())
  .use(helmet())
  .use(express.urlencoded({ extended: true, limit: '10kb' }));

app.enable('trust proxy');
app.options('*', cors());

console.log('env: ', process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many request from this IP, please try again in an hour!',
});

app.use('/api', limiter);

app.use(xss());

app.use(hpp());

app.use(compression());

//routes
app.use('/api/v1/auth', authRouter);

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  return next(
    new AppError(`Can't find ${req.originalUrl} on this server!`, 404),
  );
});

app.use(globalErrorHandler);

export default app;
