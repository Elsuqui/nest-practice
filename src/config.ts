import { registerAs } from '@nestjs/config';
import { DatabaseType } from 'typeorm';

export default registerAs('config', () => {
  return {
    database: {
      type: process.env.DATABASE_TYPE as DatabaseType,
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      name: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER_NAME,
      password: process.env.DATABASE_USER_PASSWORD,
    },
    apiKey: process.env.API_KEY,
  };
});
