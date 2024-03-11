/*
  Warnings:

  - A unique constraint covering the columns `[countryCode]` on the table `Airport` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `countryCode` to the `Airport` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Airport" ADD COLUMN     "countryCode" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Airport_countryCode_key" ON "Airport"("countryCode");
