import { prisma } from '../database/prisma';
import { IImageData } from '../interfaces/ImageData.interface';
import fs from 'fs';
import { injectable } from 'tsyringe';

@injectable()
export class ImagesServices {
  public createImage = async (imageData: IImageData) => {
    const data = {
      name: imageData.name,
      src: imageData.src,
      userId: imageData.userId,
    };

    try {
      return await prisma.images.create({
        data,
      });
    } catch (error) {
      console.log(error);
      return { error: 'internal server error' };
    }
  };

  public deleteImage = async (imageID: number) => {
    const response = await prisma.images.findFirst({ where: { id: imageID } });

    if (!response) {
      return { error: 'user not found' };
    }

    fs.unlinkSync(response.src);

    await prisma.images.delete({ where: { id: imageID } });

    return { msg: 'image deleted' };
  };
}
