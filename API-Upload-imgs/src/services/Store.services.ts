import { prisma } from '../database/prisma';

class StoreServices {
  public async create(storeName: string) {
    return await prisma.store.create({ data: { name: storeName } });
  }

  public async createMany(storeNames: string[]) {
    const stores = storeNames.map((storeName) => ({ name: storeName }));
    return await prisma.store.createMany({ data: stores });
  }

  public async findAll() {
    return await prisma.store.findMany();
  }

  public async deleteOne(storeId: number) {
    return await prisma.store.delete({ where: { id: storeId } });
  }
}

export const storeServices = new StoreServices();
