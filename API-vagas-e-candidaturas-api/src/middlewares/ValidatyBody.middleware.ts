import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

export class ValidateBody {
  static execute(schema: ZodSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
      req.body = schema.parse(req.body);

      next();
    };
  }
}
