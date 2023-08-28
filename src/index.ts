import * as dotenv from "dotenv";
import express, { NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import { AppDataSource } from "./utils/database";
import routerIndex from "./router";
import { Request, Response } from "express";
import session from "express-session";
import wss from "./ws/ws";
import { redisClient } from "./helper/redis";

AppDataSource.initialize()
  .then(async () => {
    // const PORT: number = parseInt(process.env.PORT as string, 10);

    dotenv.config();
    if (!process.env.PORT) {
      process.exit(1);
    }

    const app = express();

    redisClient.connect();
    wss();
    app.use(helmet());
    app.use(cors());
    app.use(express.json());
    app.set("trust proxy", 1);

    app.use(
      session({
        resave: true,
        saveUninitialized: true,
        secret: "somesecret",
        cookie: { maxAge: 60000 },
      })
    );
    app.get("/", (req: Request, res: Response) => {
      console.log("req", req.params);

      res.status(200).json({ mess: "huuthin", data: req?.params });
    });

    app.use("/api", routerIndex);
    app.listen(8080, () => {
      console.log(`Listening on port ${8080}`);
    });
  })
  .catch((error) => {
    console.log("thin", error);
  });
