import { Request, Response } from 'express';
import { imagensServices } from '../services/Images.services';

class ImagensController {
  public createImage = async (req: Request, res: Response) => {
    if (!req.file) {
      return res.status(400).json({ error: 'Arquivo não enviado' });
    }

    const result = await imagensServices.createImage({
      name: req.body.name,
      src: req.file.path,
      userId: Number(req.params.userID),
    });
    return res.status(200).json(result);
  };

  public deleteImage = async (req: Request, res: Response) => {
    const result = await imagensServices.deleteImage(
      Number(req.params.imageID)
    );
    return res.status(200).json(result);
  };
}

export const imagensController = new ImagensController();
