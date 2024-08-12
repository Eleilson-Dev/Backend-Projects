"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const tsyringe_1 = require("tsyringe");
const user_scheme_1 = require("../schemas/user.scheme");
const prisma_1 = require("../database/prisma");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const appError_1 = require("../erros/appError");
let UserServices = class UserServices {
    register = async (body) => {
        const hash = await bcryptjs_1.default.hash(body.password, 10);
        const user = user_scheme_1.userRegisterReturnSchema.parse(await prisma_1.prisma.user.create({
            data: { ...body, password: hash },
        }));
        return user;
    };
    login = async (body) => {
        const user = await prisma_1.prisma.user.findFirst({ where: { email: body.email } });
        if (!user) {
            throw new appError_1.AppError(403, 'User not registered');
        }
        const compare = await bcryptjs_1.default.compare(body.password, user.password);
        if (!compare) {
            throw new appError_1.AppError(403, 'Email end password doesnt match');
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: '24h',
        });
        return { user: user_scheme_1.userReturnSchema.parse(user), accessToken: token };
    };
    getUser = async (id) => {
        const user = user_scheme_1.userReturnSchema.parse(await prisma_1.prisma.user.findFirst({
            where: { id },
        }));
        if (!user) {
            throw new appError_1.AppError(403, 'User not found');
        }
        return user;
    };
};
exports.UserServices = UserServices;
exports.UserServices = UserServices = __decorate([
    (0, tsyringe_1.injectable)()
], UserServices);
