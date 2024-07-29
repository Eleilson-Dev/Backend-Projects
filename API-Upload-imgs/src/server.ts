import { storeServices } from './services/Store.services';

const exampleController = async () => {
  const response = await storeServices.findOne(5);
  console.log(response);
};

exampleController();
