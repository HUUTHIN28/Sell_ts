import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { AppDataSource } from "./utils/database";
import routerIndex from "./router";
import { Request, Response } from "express";
import session from "express-session";

AppDataSource.initialize()
  .then(async () => {
    // const PORT: number = parseInt(process.env.PORT as string, 10);

    dotenv.config();
    if (!process.env.PORT) {
      process.exit(1);
    }

    const app = express();
    // const storage = multer.diskStorage({
    //   destination: (req: Request, file: any, res: Response) => {
    //     res(null, "./assets/file");
    //   },
    //   filename: (req: Request, file: any, res: Response) => {
    //     res(null, file.originalname);
    //   },
    // });

    app.use(helmet());
    app.use(cors());
    app.use(express.json());
    app.set("trust proxy", 1);
    // app.use(
    //   session({
    //     secret: "*$rWKIAE9+zuSCn6ps#)ML@qUB4DyR%YZX8vxH2k(j^FQmtwdexxx" ?? "",
    //     resave: false,
    //     saveUninitialized: true,
    //     cookie: { secure: true, httpOnly: true },
    //   })
    // );
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
