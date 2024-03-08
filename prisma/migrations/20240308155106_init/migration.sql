/*
  Warnings:

  - Changed the type of `countryCode` on the `Airport` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ContryCode" AS ENUM ('KO', 'JP');

-- AlterTable
ALTER TABLE "Airport" DROP COLUMN "countryCode",
ADD COLUMN     "countryCode" "ContryCode" NOT NULL;
