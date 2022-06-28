import { ConnectionOptions } from 'typeorm';
import dotenv from "dotenv";

dotenv.config();

const config: ConnectionOptions = {
  type: 'postgres',
  name: 'default',
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: false,
  logging: false,
  entities: ['src/database/entities/*.ts'],
  migrations: ['src/database/migrations/*.ts'],
  cli: {
    entitiesDir: 'src/database/entities',
    migrationsDir: 'src/database/migrations'
  },
};

export = config;
