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
exports.Water = void 0;
const typeorm_1 = require("typeorm");
const model_1 = __importDefault(require("./model"));
const room_1 = require("./room");
let Water = class Water extends model_1.default {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Water.prototype, "indexOLD", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Water.prototype, "indexNEW", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Water.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Water.prototype, "used", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => room_1.Room, (room) => room === null || room === void 0 ? void 0 : room.water),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", room_1.Room)
], Water.prototype, "room", void 0);
Water = __decorate([
    (0, typeorm_1.Entity)()
], Water);
exports.Water = Water;
