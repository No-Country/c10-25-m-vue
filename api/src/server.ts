import compression from 'compression';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import xss from 'xss-clean';
import AppError from './utils/appError';
import globalErrorHandler from './controllers/error.controllers';

const app = express()
  .use(express.json({ limit: '10kb' }))
  .use(cors())
  .use(helmet())
  .use(express.urlencoded({ extended: true, limit: '10kb' }));

app.enable('trust proxy');
app.options('*', cors());

app.enable('trust proxy');

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

app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'price',
    ],
  }),
);

app.use(compression());

//routes
app.get('/api/v1/example', (req, res, next) => {
  return res.status(200).json({
    ok: true,
  });
});

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  return next(
    new AppError(`Can't find ${req.originalUrl} on this server!`, 404),
  );
});

app.use(globalErrorHandler);

export default app;
