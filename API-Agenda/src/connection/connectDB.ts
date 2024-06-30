import mongoose from 'mongoose';

export const connect = async () => {
  try {
    await mongoose.connect(`${process.env.CONNECTIONSTRING}`, {
      dbName: 'myDatabase',
    });

    console.log('MongoDB connected...');
  } catch (error: any) {
    console.log(error.message);
    process.exit(1);
  }
};
