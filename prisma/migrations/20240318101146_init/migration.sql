/*
  Warnings:

  - Added the required column `seviceType` to the `Airline` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AirlineSeviceType" AS ENUM ('lcc', 'fsc', 'hsc', 'else');

-- CreateEnum
CREATE TYPE "AirType" AS ENUM ('airports', 'airlines');

-- AlterTable
ALTER TABLE "Airline" ADD COLUMN     "seviceType" "AirlineSeviceType" NOT NULL;

-- CreateTable
CREATE TABLE "AirUpdateHistory" (
    "id" SERIAL NOT NULL,
    "airType" "AirType" NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AirUpdateHistory_pkey" PRIMARY KEY ("id")
);
