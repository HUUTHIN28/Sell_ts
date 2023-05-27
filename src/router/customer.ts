import express from "express";
import { getCustomer, postCustomer } from "../controllers/customer";

const custormerRouter = express.Router();

custormerRouter.get("", getCustomer);
custormerRouter.post("", postCustomer);

export default custormerRouter;
