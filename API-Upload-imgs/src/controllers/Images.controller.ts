import { Request, Response } from 'express';
import { ImagesServices } from '../services/Images.services';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ImagesController {
  constructor(
    @inject('ImagesServices') private imagesServices: ImagesServices
  ) {}

  public createImage = async (req: Request, res: Response) => {
    if (!req.file) {
      return res.status(400).json({ error: 'Arquivo não enviado' });
    }

    const result = await this.imagesServices.createImage({
      name: req.body.name,
      src: req.file.path,
      userId: Number(req.params.userID),
    });
    return res.status(200).json(result);
  };

  public deleteImage = async (req: Request, res: Response) => {
    const result = await this.imagesServices.deleteImage(
      Number(req.params.imageID)
    );
    return res.status(200).json(result);
  };
}
