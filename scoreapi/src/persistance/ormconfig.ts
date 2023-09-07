 import { DataSource } from "typeorm";

export const DatabaseConfig = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [
    __dirname + '/../**/*.model{.ts,.js}',
  ],
  synchronize: true,
});