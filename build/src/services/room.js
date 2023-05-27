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
exports.postRoomService = exports.findOneRoom = exports.getAllRoom = void 0;
const room_1 = require("../entities/room");
const database_1 = require("../utils/database");
const roomModule = database_1.AppDataSource.getRepository(room_1.Room);
const getAllRoom = () => __awaiter(void 0, void 0, void 0, function* () {
    const roomlist = yield roomModule.find();
    return roomlist;
});
exports.getAllRoom = getAllRoom;
const findOneRoom = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    const data = roomModule.findOneBy(Object.assign({}, filter));
    return data;
});
exports.findOneRoom = findOneRoom;
const postRoomService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const createRoom = yield roomModule.create(data);
    return yield roomModule.save(createRoom);
});
exports.postRoomService = postRoomService;
