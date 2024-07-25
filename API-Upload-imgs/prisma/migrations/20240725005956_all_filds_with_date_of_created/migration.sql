/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `StorangeInfo` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Store` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "StorangeInfo" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Store" DROP COLUMN "updatedAt";
