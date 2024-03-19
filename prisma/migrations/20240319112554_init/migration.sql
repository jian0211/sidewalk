/*
  Warnings:

  - Added the required column `imgTitle` to the `Airline` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Airline" ADD COLUMN     "imgTitle" TEXT NOT NULL;
