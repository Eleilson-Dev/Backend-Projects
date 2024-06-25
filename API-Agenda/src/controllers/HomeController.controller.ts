import { Request, Response } from 'express';

class HomeController {
  index(req: Request, res: Response) {}
}

export const homeController = new HomeController();
