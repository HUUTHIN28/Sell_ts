"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.CreateAccount = exports.Singin = void 0;
const database_1 = require("../utils/database");
const auth_1 = require("../entities/auth");
const bcrypt = __importStar(require("bcryptjs"));
const user_1 = require("../services/user");
const userModel = database_1.AppDataSource.getRepository(auth_1.auth);
const Singin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        console.log("checkEmail", req.body);
        const checkUser = yield userModel.findOneBy({ email: email });
        if (!(checkUser === null || checkUser === void 0 ? void 0 : checkUser.email)) {
            return res.status(400).json({ message: "User not foud" });
        }
        const isMatch = yield bcrypt.compareSync(password, checkUser === null || checkUser === void 0 ? void 0 : checkUser.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const payload = {
            email: checkUser === null || checkUser === void 0 ? void 0 : checkUser.email,
            user: checkUser === null || checkUser === void 0 ? void 0 : checkUser.user,
            role: checkUser === null || checkUser === void 0 ? void 0 : checkUser.role,
        };
        const results = yield (0, user_1.generateToken)(payload);
        res.status(200).json({ mes: "success", data: results });
    }
    catch (_a) {
        res.status(401).json({ mes: "thất bại" });
    }
});
exports.Singin = Singin;
const CreateAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, role, user } = req.body;
        const checkEmail = yield userModel.findOneBy({ email });
        if (checkEmail) {
            return res.status(400).json({ message: "User already exists" });
        }
        console.log("checkEmail", checkEmail);
        const hashedPassword = yield bcrypt.hashSync(password, 12);
        console.log("hashedPassword", hashedPassword);
        const createUser = userModel.create({
            user,
            email,
            role,
            password: hashedPassword,
        });
        userModel.save(createUser);
        return res.status(200).json({ message: "User registered successfully" });
    }
    catch (_b) {
        return res.status(400).json({ message: false });
    }
});
exports.CreateAccount = CreateAccount;
