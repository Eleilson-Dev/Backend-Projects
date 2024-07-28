import { productServices } from './services/Product.services';
import { storeServices } from './services/Store.services';

const exampleController = async () => {
  // const response = await storeServices.createMany([
  //   'store1',
  //   'store2',
  //   'store3',
  // ]);
  // const response = await storeServices.findAll();
  // console.log(response);
  const response = await productServices.create({
    name: 'computador',
    price: 2500,
    storeId: 5,
  });
  console.log(response);
};

exampleController();
