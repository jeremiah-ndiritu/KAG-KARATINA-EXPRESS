import type { RequestHandler } from 'express';
import { HttpException } from '@exceptions/HttpExceptions';

export const NotFoundMiddleware: RequestHandler = (_req, _res, next) => {
  next(new HttpException(404, 'Not Found'));
};
