-- CreateEnum
CREATE TYPE "ROLE_TYPES" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" TEXT,
    "role" "ROLE_TYPES" NOT NULL DEFAULT E'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Foods" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "grams" DOUBLE PRECISION NOT NULL,
    "calories" DOUBLE PRECISION NOT NULL,
    "carbs" DOUBLE PRECISION NOT NULL,
    "cafeine" DOUBLE PRECISION NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Foods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PublicFoods" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT,
    "unit" TEXT NOT NULL,
    "grams" DOUBLE PRECISION NOT NULL,
    "calories" DOUBLE PRECISION NOT NULL,
    "carbs" DOUBLE PRECISION NOT NULL,
    "cafeine" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "PublicFoods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Races" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "stages" JSONB NOT NULL,
    "belongsToId" INTEGER NOT NULL,
    "isUserAdmin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Races_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserStrategy" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "foodGroup" JSONB NOT NULL,
    "belongsToId" INTEGER NOT NULL,
    "racesId" INTEGER NOT NULL,

    CONSTRAINT "UserStrategy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Foods" ADD CONSTRAINT "Foods_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Races" ADD CONSTRAINT "Races_belongsToId_fkey" FOREIGN KEY ("belongsToId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStrategy" ADD CONSTRAINT "UserStrategy_belongsToId_fkey" FOREIGN KEY ("belongsToId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStrategy" ADD CONSTRAINT "UserStrategy_racesId_fkey" FOREIGN KEY ("racesId") REFERENCES "Races"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
