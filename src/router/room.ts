import express from "express";
import { getRoom, postRoom } from "../controllers/room";

const roomRouter = express.Router();

roomRouter.get("", getRoom);
roomRouter.post("", postRoom);

export default roomRouter;
