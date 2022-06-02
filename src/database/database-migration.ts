import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const mysqlDataSource : TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10),
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER_NAME,
    password: process.env.DATABASE_USER_PASSWORD,
    entities: [`src/**/*.entity{.ts, .js}`],
    migrations: [`src/database/migrations/*{.ts, .js}`],
    migrationsTableName: 'migrations',
    cli: {
        migrationsDir: `src/database/migrations`
    }
}

const databaseConnectionOptions = () : TypeOrmModuleOptions => {
   switch(process.env.DATABASE_TYPE){
    case 'mysql':
        return mysqlDataSource;
    default:
        return {};
   }
}


export default databaseConnectionOptions();
