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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationController = void 0;
const Application_services_1 = require("../services/Application.services");
const tsyringe_1 = require("tsyringe");
let ApplicationController = class ApplicationController {
    applicationServices;
    constructor(applicationServices) {
        this.applicationServices = applicationServices;
    }
    create = async (req, res) => {
        const reponse = await this.applicationServices.create(Number(req.params.id), req.body);
        return res.status(201).json(reponse);
    };
    findMany = async (req, res) => {
        const response = await this.applicationServices.findMany(Number(req.params.id));
        return res.status(200).json(response);
    };
};
exports.ApplicationController = ApplicationController;
exports.ApplicationController = ApplicationController = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('ApplicationServices')),
    __metadata("design:paramtypes", [Application_services_1.ApplicationServices])
], ApplicationController);
