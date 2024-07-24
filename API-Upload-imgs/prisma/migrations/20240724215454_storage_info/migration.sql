-- CreateTable
CREATE TABLE "StorangeInfo" (
    "id" SERIAL NOT NULL,
    "stock" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "StorangeInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StorangeInfo_productId_key" ON "StorangeInfo"("productId");

-- AddForeignKey
ALTER TABLE "StorangeInfo" ADD CONSTRAINT "StorangeInfo_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
