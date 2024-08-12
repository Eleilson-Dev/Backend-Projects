"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsOpportunityIdValide = void 0;
const prisma_1 = require("../database/prisma");
const appError_1 = require("../erros/appError");
class IsOpportunityIdValide {
    static async execute(req, res, next) {
        const id = req.params.id;
        const opportunity = await prisma_1.prisma.opportunity.findFirst({
            where: { id: Number(id) },
        });
        if (!opportunity) {
            throw new appError_1.AppError(404, 'opportunity not found');
        }
        res.locals.opportunity = opportunity;
        next();
    }
}
exports.IsOpportunityIdValide = IsOpportunityIdValide;
