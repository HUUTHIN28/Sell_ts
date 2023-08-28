import express from "express";
import { getCustomer, postCustomer } from "../controllers/customer";
import { get } from "../helper/redis";

const custormerRouter = express.Router();

custormerRouter.get("", get, getCustomer);
custormerRouter.post("", postCustomer);

export default custormerRouter;
