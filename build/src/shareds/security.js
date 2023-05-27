"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signJwt = (payload, secretKey, expiresIn) => {
    return jsonwebtoken_1.default.sign(payload, secretKey, {
        expiresIn: expiresIn,
    });
};
exports.signJwt = signJwt;
