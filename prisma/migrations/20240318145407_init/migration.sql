/*
  Warnings:

  - You are about to drop the column `detailTitle` on the `Airline` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Airline` table. All the data in the column will be lost.
  - Added the required column `titleEn` to the `Airline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleJa` to the `Airline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleKo` to the `Airline` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Airline" DROP COLUMN "detailTitle",
DROP COLUMN "title",
ADD COLUMN     "titleEn" TEXT NOT NULL,
ADD COLUMN     "titleJa" TEXT NOT NULL,
ADD COLUMN     "titleKo" TEXT NOT NULL;
