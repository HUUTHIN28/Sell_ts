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
exports.postHouse = exports.getHouse = void 0;
const house_1 = require("../services/house");
const getHouse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listhouse = yield (0, house_1.getAllhouse)();
    return res.status(200).json({ mes: true, data: listhouse });
    //   return res.status(400).json({ message: "true", data: listhouse });
});
exports.getHouse = getHouse;
const postHouse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const filterHouse = (0, house_1.filterService)({ name: data.name });
        if (!filterHouse) {
            return res.status(400).json({ mes: "phòng trọ đã tồn tại" });
        }
        yield (0, house_1.postHouseService)(data);
        return res.status(200).json({ mes: true });
    }
    catch (_a) {
        return res.status(400).json({ mes: false });
    }
});
exports.postHouse = postHouse;
