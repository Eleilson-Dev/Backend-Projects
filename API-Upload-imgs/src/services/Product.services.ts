import { prisma } from '../database/prisma';
import { TCreateProductBody } from '../interfaces/products.interface';

class ProductServices {
  public async create(body: TCreateProductBody) {
    return await prisma.product.create({ data: body });
  }
}

export const productServices = new ProductServices();
