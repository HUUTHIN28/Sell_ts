"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
const typeorm_1 = require("typeorm");
const house_1 = require("./house");
const model_1 = __importDefault(require("./model"));
const electricity_1 = require("./electricity");
const water_1 = require("./water");
const roomService_1 = require("./roomService");
const customer_1 = require("./customer");
let Room = class Room extends model_1.default {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Room.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Room.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Room.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => house_1.House, (house) => house.rooms),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", house_1.House)
], Room.prototype, "house", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => electricity_1.Electricity, (electricity) => electricity === null || electricity === void 0 ? void 0 : electricity.room),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Room.prototype, "electricity", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => water_1.Water, (water) => water === null || water === void 0 ? void 0 : water.room),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Room.prototype, "water", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => customer_1.Custormer, (custormer) => custormer.room),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", customer_1.Custormer)
], Room.prototype, "custormer", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => roomService_1.RoomService, (roomservice) => roomservice === null || roomservice === void 0 ? void 0 : roomservice.room),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", roomService_1.RoomService)
], Room.prototype, "roomService", void 0);
Room = __decorate([
    (0, typeorm_1.Entity)()
], Room);
exports.Room = Room;
