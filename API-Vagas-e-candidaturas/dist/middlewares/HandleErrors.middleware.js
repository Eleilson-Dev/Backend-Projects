"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleErros = void 0;
const appError_1 = require("../erros/appError");
const zod_1 = require("zod");
const jsonwebtoken_1 = require("jsonwebtoken");
class HandleErros {
    static execute(error, req, res, next) {
        if (error instanceof appError_1.AppError) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        if (error instanceof zod_1.ZodError) {
            return res.status(422).json(error);
        }
        if (error instanceof jsonwebtoken_1.JsonWebTokenError) {
            return res.status(403).json({ message: error.message });
        }
        console.log(error);
        return res.status(500).json({ message: 'internal server error' });
    }
}
exports.HandleErros = HandleErros;
