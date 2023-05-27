import { DataSource } from "typeorm";
import "reflect-metadata";
export const AppDataSource = new DataSource({
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "",
  database: `graduation`,
  type: "mysql",
  logging: true,
  synchronize: true,
  entities: [__dirname + "/../entities/*.{js,ts}"],
  migrations: ["../migrations/**/*{.ts,.js}"],
  subscribers: ["../subscribers/**/*{.ts,.js}"],

  // connectTimeout: 1500,
});
