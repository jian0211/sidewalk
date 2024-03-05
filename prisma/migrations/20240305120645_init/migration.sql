/*
  Warnings:

  - You are about to drop the column `cityName` on the `Airport` table. All the data in the column will be lost.
  - You are about to drop the column `countryName` on the `Airport` table. All the data in the column will be lost.
  - You are about to drop the column `detailTitle` on the `Airport` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Airport` table. All the data in the column will be lost.
  - Added the required column `cityNameEn` to the `Airport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cityNameJa` to the `Airport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cityNameKo` to the `Airport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `countryNameEn` to the `Airport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `countryNameJa` to the `Airport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `countryNameKo` to the `Airport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleEn` to the `Airport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleJa` to the `Airport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleKo` to the `Airport` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Airport" DROP COLUMN "cityName",
DROP COLUMN "countryName",
DROP COLUMN "detailTitle",
DROP COLUMN "title",
ADD COLUMN     "cityNameEn" TEXT NOT NULL,
ADD COLUMN     "cityNameJa" TEXT NOT NULL,
ADD COLUMN     "cityNameKo" TEXT NOT NULL,
ADD COLUMN     "countryNameEn" TEXT NOT NULL,
ADD COLUMN     "countryNameJa" TEXT NOT NULL,
ADD COLUMN     "countryNameKo" TEXT NOT NULL,
ADD COLUMN     "titleEn" TEXT NOT NULL,
ADD COLUMN     "titleJa" TEXT NOT NULL,
ADD COLUMN     "titleKo" TEXT NOT NULL;
