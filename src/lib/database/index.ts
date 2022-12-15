import mongoose from 'mongoose';
import config from '../../configs/config';
mongoose
  .connect(`mongodb://${config.mongo.host}:${config.mongo.port}`, {
    dbName: config.mongo.name,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err: any) => console.log(err.message));

mongoose.connection.on('connected', () => {
  console.log('Mongoose connection is UP.');
});

mongoose.connection.on('error', (err: any) => {
  console.log(err.message);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection is DOWN.');
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  process.exit(0);
});
