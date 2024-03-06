/*
  Warnings:

  - You are about to drop the column `arrivalCode` on the `Flight` table. All the data in the column will be lost.
  - You are about to drop the column `departureCode` on the `Flight` table. All the data in the column will be lost.
  - Added the required column `arrivalAirportId` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departureAirportId` to the `Flight` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Flight" DROP CONSTRAINT "Flight_arrivalCode_fkey";

-- DropForeignKey
ALTER TABLE "Flight" DROP CONSTRAINT "Flight_departureCode_fkey";

-- DropIndex
DROP INDEX "Airline_iata_key";

-- DropIndex
DROP INDEX "Airline_icao_key";

-- DropIndex
DROP INDEX "Airport_iata_key";

-- DropIndex
DROP INDEX "Airport_icao_key";

-- DropIndex
DROP INDEX "Airport_latitude_key";

-- DropIndex
DROP INDEX "Airport_longitude_key";

-- AlterTable
ALTER TABLE "Flight" DROP COLUMN "arrivalCode",
DROP COLUMN "departureCode",
ADD COLUMN     "arrivalAirportId" INTEGER NOT NULL,
ADD COLUMN     "departureAirportId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_departureAirportId_fkey" FOREIGN KEY ("departureAirportId") REFERENCES "Airport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_arrivalAirportId_fkey" FOREIGN KEY ("arrivalAirportId") REFERENCES "Airport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
