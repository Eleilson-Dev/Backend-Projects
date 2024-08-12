"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsOpportunityOwner = void 0;
const prisma_1 = require("../database/prisma");
const appError_1 = require("../erros/appError");
class IsOpportunityOwner {
    static async execute(req, res, next) {
        const userId = res.locals.decode.id;
        const opportunityId = req.params.id;
        const opportunity = await prisma_1.prisma.opportunity.findFirst({
            where: { id: Number(opportunityId) },
        });
        if (opportunity?.userId !== userId) {
            throw new appError_1.AppError(403, 'User is not the owner of this opportunity');
        }
        next();
    }
}
exports.IsOpportunityOwner = IsOpportunityOwner;
