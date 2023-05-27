import express from "express";
import { CreateAccount, Singin } from "../controllers/user";

const userRouter = express.Router();
userRouter.post("", Singin);
userRouter.post("/create", CreateAccount);
export default userRouter;
