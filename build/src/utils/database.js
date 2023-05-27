"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
require("reflect-metadata");
exports.AppDataSource = new typeorm_1.DataSource({
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
