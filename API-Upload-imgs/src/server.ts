import { storeServices } from './services/Store.services';

const exampleController = async () => {
  // const response = await storeServices.createMany([
  //   'store1',
  //   'store2',
  //   'store3',
  // ]);
  const response = await storeServices.findAll();
  console.log(response);
};

exampleController();
