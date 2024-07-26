import { prisma } from '../database/prisma';

class StoreServices {
  async create(storeName: string) {
    return await prisma.store.create({ data: { name: storeName } });
  }
}

export const storeServices = new StoreServices();
