/*
  Warnings:

  - Added the required column `dashboardLayout` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `destination` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `displayLanguage` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Lang" AS ENUM ('KO', 'JA');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "dashboardLayout" TEXT NOT NULL,
ADD COLUMN     "destination" "Lang" NOT NULL,
ADD COLUMN     "displayLanguage" "Lang" NOT NULL;
