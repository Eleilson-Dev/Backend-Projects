import { Request, Response } from 'express';
import { pictureServices } from '../services/Picture.services';

class PictureController {
  public async findAllImgs(req: Request, res: Response) {
    try {
      const result = await pictureServices.findAllImgs();

      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  }

  public async findImgsByIdUser(req: Request, res: Response) {
    try {
      const result = await pictureServices.findImgsByIdUser(
        Number(req.params.id)
      );
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  }

  public async sendImg(req: Request, res: Response) {
    try {
      const result = await pictureServices.sendImg(
        Number(req.params.id),
        req.body.name as string,
        req.file?.path as string
      );

      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  }

  public async deleteImg(req: Request, res: Response) {
    try {
      const result = await pictureServices.deleteImg(Number(req.params.id));

      return res.status(200).json({ msg: 'image Deleted', result });
    } catch (error) {
      console.log(error);
    }
  }
}

export const pictureController = new PictureController();
