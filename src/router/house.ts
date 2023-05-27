import express from "express";
import {
  deleteHouse,
  detailHouse,
  getHouse,
  postHouse,
  updateDetail,
  uploadFile,
} from "../controllers/house";
import { checkPermissions, requireLogin } from "../middleware/permission";
import { upload } from "../helper/file";

const houseRouter = express.Router();

houseRouter.get("", requireLogin, checkPermissions("ADMIN", "USER"), getHouse);
houseRouter.post("", upload.single("image"), postHouse);
houseRouter.get("/:id", detailHouse);
houseRouter.delete("/:id", deleteHouse);
houseRouter.put("", updateDetail);
houseRouter.post("/upload", upload.single("image"), uploadFile);

export default houseRouter;
