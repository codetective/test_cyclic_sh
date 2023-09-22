import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SuperAdmin } from './entities/SuperAdmin';
import { Operator } from './entities/Operators';
import { Doctor } from './entities/Doctors';
import { Hospital } from './entities/Hospital';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService): Promise<any> => ({
        dialect: 'mysql',
        host: 'sql.freedb.tech',
        port: 3306,
        username: 'freedb_retinopathy',
        password: configService.get('MYSQL_PASSWORD'),
        database: 'freedb_retinopathy',
        models: [SuperAdmin, Operator, Doctor, Hospital],
        autoLoadModels: true,
        synchronize: true,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
