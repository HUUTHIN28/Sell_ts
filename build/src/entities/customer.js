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
exports.Custormer = void 0;
const typeorm_1 = require("typeorm");
const model_1 = __importDefault(require("./model"));
const auth_1 = require("./auth");
const room_1 = require("./room");
const listMember_1 = require("./listMember");
const house_1 = require("./house");
let Custormer = class Custormer extends model_1.default {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Custormer.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Custormer.prototype, "is_blocked", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Custormer.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Custormer.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Custormer.prototype, "other", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Custormer.prototype, "cardNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Custormer.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => room_1.Room, (room) => room.custormer),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Custormer.prototype, "room", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => auth_1.auth),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", auth_1.auth)
], Custormer.prototype, "auth", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => house_1.House),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", house_1.House)
], Custormer.prototype, "house", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => listMember_1.ListMember),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", listMember_1.ListMember)
], Custormer.prototype, "listMember", void 0);
Custormer = __decorate([
    (0, typeorm_1.Entity)()
], Custormer);
exports.Custormer = Custormer;
