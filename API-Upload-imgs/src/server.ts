import { storeServices } from './services/Sotore.services';

const exampleController = async () => {
  const response = await storeServices.create('MxtDevCourse');
  console.log(response);
};

exampleController();
