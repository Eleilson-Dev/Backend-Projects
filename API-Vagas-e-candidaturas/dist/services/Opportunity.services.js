"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpportunityServices = void 0;
const tsyringe_1 = require("tsyringe");
const prisma_1 = require("../database/prisma");
let OpportunityServices = class OpportunityServices {
    create = async (userId, body) => {
        const data = await prisma_1.prisma.opportunity.create({
            data: { ...body, userId: userId },
        });
        return data;
    };
    findMany = async () => {
        const data = await prisma_1.prisma.opportunity.findMany();
        return data;
    };
    findOne = (opportunity) => {
        return opportunity;
    };
    update = async (id, body) => {
        const data = await prisma_1.prisma.opportunity.update({
            where: { id },
            data: body,
        });
        return data;
    };
    delete = async (id) => {
        await prisma_1.prisma.opportunity.delete({ where: { id } });
    };
};
exports.OpportunityServices = OpportunityServices;
exports.OpportunityServices = OpportunityServices = __decorate([
    (0, tsyringe_1.injectable)()
], OpportunityServices);
