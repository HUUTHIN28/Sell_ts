"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./user"));
const house_1 = __importDefault(require("./house"));
const room_1 = __importDefault(require("./room"));
const routerIndex = express_1.default.Router();
routerIndex.use("/user", user_1.default);
routerIndex.use("/house", house_1.default);
routerIndex.use("/room", room_1.default);
exports.default = routerIndex;
