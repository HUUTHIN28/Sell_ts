"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
const userRouter = express_1.default.Router();
userRouter.post("", user_1.Singin);
userRouter.post("/create", user_1.CreateAccount);
exports.default = userRouter;
