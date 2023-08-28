import express from "express";
import {
  deleteMerber,
  getListMerber,
  postListMerber,
  updateListMerber,
} from "../controllers/listMerber";
import { get } from "../helper/redis";

const listMerberRouter = express.Router();

listMerberRouter.get("", get, getListMerber);
listMerberRouter.post("", postListMerber);
listMerberRouter.put("/:id", updateListMerber);
listMerberRouter.delete("", deleteMerber);

export default listMerberRouter;
