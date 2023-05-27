"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRoom = exports.getRoom = void 0;
const room_1 = require("../services/room");
const getRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const room = yield (0, room_1.getAllRoom)();
        return res.status(200).json({ mes: true, data: room });
    }
    catch (_a) {
        return res.status(400).json({ mes: false });
    }
});
exports.getRoom = getRoom;
const postRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        console.log("data", data);
        const createRoom = yield (0, room_1.postRoomService)(data);
        return res.status(200).json({ mes: true, data: data });
    }
    catch (_b) {
        return res.status(400).json({ mes: false });
    }
});
exports.postRoom = postRoom;
