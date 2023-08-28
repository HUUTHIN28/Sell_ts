import express from "express";
import userRouter from "./user";
import houseRouter from "./house";
import roomRouter from "./room";
import custormerRouter from "./customer";
import listMerberRouter from "./listMerber";
import { get } from "../helper/redis";

const routerIndex = express.Router();
routerIndex.use("/user", userRouter);
routerIndex.use("/house", houseRouter);
routerIndex.use("/room", roomRouter);
routerIndex.use("/customer", custormerRouter);
routerIndex.use("/listMerber", listMerberRouter);
export default routerIndex;
