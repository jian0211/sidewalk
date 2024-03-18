/*
  Warnings:

  - Added the required column `nationality` to the `Airline` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Airline" ADD COLUMN     "nationality" TEXT NOT NULL;
