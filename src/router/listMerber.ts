import express from "express";
import {
  deleteMerber,
  getListMerber,
  postListMerber,
  updateListMerber,
} from "../controllers/listMerber";

const listMerberRouter = express.Router();

listMerberRouter.get("", getListMerber);
listMerberRouter.post("", postListMerber);
listMerberRouter.put("/:id", updateListMerber);
listMerberRouter.delete("", deleteMerber);

export default listMerberRouter;
