import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Sequelize } from 'sequelize-typescript';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const sequelize = app.get<Sequelize>(Sequelize);

  try {
    await sequelize.authenticate();
    console.log('db connected');
    await sequelize.sync({});

    await app.listen(3000);
  } catch (err) {
    console.log('Failed to connect to the database:', err);
    return;
  }
}
bootstrap();
