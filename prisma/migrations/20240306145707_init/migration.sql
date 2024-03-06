/*
  Warnings:

  - You are about to drop the column `cityCode` on the `Airport` table. All the data in the column will be lost.
  - You are about to drop the column `countryCode` on the `Airport` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Airport_cityCode_key";

-- DropIndex
DROP INDEX "Airport_countryCode_key";

-- AlterTable
ALTER TABLE "Airport" DROP COLUMN "cityCode",
DROP COLUMN "countryCode";
