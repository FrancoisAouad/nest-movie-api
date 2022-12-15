import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import './lib/database/index';
import config from './configs/config';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(config.app.port);
};
bootstrap();
