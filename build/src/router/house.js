"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const house_1 = require("../controllers/house");
const houseRouter = express_1.default.Router();
houseRouter.get("", house_1.getHouse);
houseRouter.post("", house_1.postHouse);
exports.default = houseRouter;
