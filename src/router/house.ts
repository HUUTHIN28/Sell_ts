import express from "express";
import {
  deleteHouse,
  detailHouse,
  exporttHouseExcel,
  getHouse,
  postHouse,
  updateDetail,
  uploadFile,
} from "../controllers/house";
import { checkPermissions, requireLogin } from "../middleware/permission";
import { upload } from "../helper/file";
import { get } from "../helper/redis";

const houseRouter = express.Router();

// houseRouter.get("", requireLogin, checkPermissions("ADMIN", "USER"), getHouse);
houseRouter.get("", getHouse);
houseRouter.post("", upload.single("image"), postHouse);
houseRouter.get("/:id", detailHouse);
houseRouter.delete("/:id", deleteHouse);
houseRouter.put("", updateDetail);
houseRouter.post("/upload", upload.single("image"), uploadFile);
houseRouter.get("", requireLogin, checkPermissions("ADMIN", "USER"), getHouse);
houseRouter.get("/:id", detailHouse);
houseRouter.get("/export", exporttHouseExcel);

export default houseRouter;
