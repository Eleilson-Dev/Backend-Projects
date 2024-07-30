import { prisma } from '../database/prisma';
import { TUpdateStoreBody } from '../interfaces/store.interface';

class StoreServices {
  public async create(storeName: string) {
    return await prisma.store.create({ data: { name: storeName } });
  }

  public async createMany(storeNames: string[]) {
    const stores = storeNames.map((storeName) => ({ name: storeName }));
    return await prisma.store.createMany({ data: stores });
  }

  public async findOne(storeId: number) {
    return await prisma.store.findFirst({
      where: { id: storeId },
      include: { products: true },
    });
  }

  public async findAll(search?: string) {
    return await prisma.store.findMany({
      where: { name: { contains: search || '', mode: 'insensitive' } },
      include: { products: true },
    });
  }

  public async updateOne(storeId: number, data: TUpdateStoreBody) {
    return await prisma.store.update({ where: { id: storeId }, data });
  }

  public async updateMany(storeId: number, data: TUpdateStoreBody) {
    return await prisma.store.update({ where: { id: storeId }, data });
  }

  public async deleteOne(storeId: number) {
    return await prisma.store.delete({ where: { id: storeId } });
  }
}

export const storeServices = new StoreServices();
