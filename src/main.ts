import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule, { cors: true });
  const app = await NestFactory.create(AppModule);
  // const sequelize = app.get<Sequelize>(Sequelize);
  // app.enableCors();
  await app.listen(3000);
}
bootstrap();
