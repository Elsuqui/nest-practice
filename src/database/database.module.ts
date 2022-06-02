import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import config from '../config';

const API_KEY = '12345634';
const API_KEY_PROD = 'PROD1212121SA';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService : ConfigType<typeof config>) => ({
          type: 'mysql',
          host: configService.database.host,
          port: parseInt(configService.database.port),
          database: configService.database.name,
          username: configService.database.user,
          password: configService.database.password,
          //synchronize: true,
          autoLoadEntities: true,
          migrations: [`${__dirname}/src/database/migrations/*{.ts, .js}`],
          entities: [`${__dirname}/src/**/*.entity{.ts, .js}`],
          //migrationsTableName: 'migrations',
          cli: {
            migrationsDir: `${__dirname}/src/database/migrations`
          }
          //entities: [__dirname + '/../**/**.entity{.ts,.js}']
      }),
      inject: [config.KEY]
    })
  ],
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
  ],
  exports: ['API_KEY', TypeOrmModule],
})
export class DatabaseModule {}
