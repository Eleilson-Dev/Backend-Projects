import { prisma } from '../database/prisma';
import {
  TCreateProductBody,
  TUpdateProductBody,
} from '../interfaces/products.interface';

class ProductServices {
  public async create(body: TCreateProductBody) {
    return await prisma.product.create({ data: body });
  }

  public async updateMany(storeId: number, data: TUpdateProductBody) {
    return await prisma.product.updateMany({ where: { storeId }, data });
  }
}

export const productServices = new ProductServices();
