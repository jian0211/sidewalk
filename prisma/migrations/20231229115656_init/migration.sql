-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "alarmEnabled" BOOLEAN NOT NULL DEFAULT false,
    "preferredPrice" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Airline" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "detailTitle" TEXT NOT NULL,
    "iata" TEXT NOT NULL,
    "icao" TEXT NOT NULL,

    CONSTRAINT "Airline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FavoriteAirline" (
    "userId" INTEGER NOT NULL,
    "airlineId" INTEGER NOT NULL,

    CONSTRAINT "FavoriteAirline_pkey" PRIMARY KEY ("userId","airlineId")
);

-- CreateTable
CREATE TABLE "Airport" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "detailTitle" TEXT NOT NULL,
    "iata" TEXT NOT NULL,
    "icao" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "cityName" TEXT NOT NULL,
    "cityCode" TEXT NOT NULL,
    "countryName" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Airport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flight" (
    "id" SERIAL NOT NULL,
    "airlineId" INTEGER NOT NULL,
    "departureCode" TEXT NOT NULL,
    "departureTerminal" TEXT NOT NULL,
    "departureGate" TEXT NOT NULL,
    "departureDate" TIMESTAMP(3) NOT NULL,
    "arrivalCode" TEXT NOT NULL,
    "arrivalTerminal" TEXT NOT NULL,
    "arrivalgate" TEXT NOT NULL,
    "arrivalDate" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Flight_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Airline_iata_key" ON "Airline"("iata");

-- CreateIndex
CREATE UNIQUE INDEX "Airline_icao_key" ON "Airline"("icao");

-- CreateIndex
CREATE UNIQUE INDEX "Airport_iata_key" ON "Airport"("iata");

-- CreateIndex
CREATE UNIQUE INDEX "Airport_icao_key" ON "Airport"("icao");

-- CreateIndex
CREATE UNIQUE INDEX "Airport_latitude_key" ON "Airport"("latitude");

-- CreateIndex
CREATE UNIQUE INDEX "Airport_longitude_key" ON "Airport"("longitude");

-- CreateIndex
CREATE UNIQUE INDEX "Airport_cityCode_key" ON "Airport"("cityCode");

-- CreateIndex
CREATE UNIQUE INDEX "Airport_countryCode_key" ON "Airport"("countryCode");

-- AddForeignKey
ALTER TABLE "FavoriteAirline" ADD CONSTRAINT "FavoriteAirline_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteAirline" ADD CONSTRAINT "FavoriteAirline_airlineId_fkey" FOREIGN KEY ("airlineId") REFERENCES "Airline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_airlineId_fkey" FOREIGN KEY ("airlineId") REFERENCES "Airline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_departureCode_fkey" FOREIGN KEY ("departureCode") REFERENCES "Airport"("iata") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_arrivalCode_fkey" FOREIGN KEY ("arrivalCode") REFERENCES "Airport"("iata") ON DELETE RESTRICT ON UPDATE CASCADE;
