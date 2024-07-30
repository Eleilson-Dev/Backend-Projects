export interface IProduct {
  id: number;
  name: string;
  description?: string;
  price: number;
  storeId: number;
}

export type TCreateProductBody = Omit<IProduct, 'id'>;
export type TUpdateProductBody = Partial<Omit<IProduct, 'id' | 'storeId'>>;
