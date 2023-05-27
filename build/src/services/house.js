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
exports.postHouseService = exports.filterService = exports.getAllhouse = void 0;
const database_1 = require("../utils/database");
const house_1 = require("../entities/house");
const houseModule = database_1.AppDataSource.getRepository(house_1.House);
const getAllhouse = () => __awaiter(void 0, void 0, void 0, function* () {
    const house = yield houseModule.find({
        select: {
            name: true,
            address: true,
            phone: true,
        },
        relations: {
            rooms: true,
        },
    });
    return house;
});
exports.getAllhouse = getAllhouse;
const filterService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const dataFilter = yield houseModule.findOneBy(Object.assign({}, data));
    return dataFilter;
});
exports.filterService = filterService;
const postHouseService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const createHouse = yield houseModule.create(data);
    return yield houseModule.save(createHouse);
});
exports.postHouseService = postHouseService;
