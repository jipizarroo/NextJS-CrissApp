/*
  Warnings:

  - Made the column `belongsToId` on table `Races` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Races" DROP CONSTRAINT "Races_belongsToId_fkey";

-- AlterTable
ALTER TABLE "Races" ALTER COLUMN "belongsToId" SET NOT NULL;

-- CreateTable
CREATE TABLE "UserStrategy" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "foodGrup" JSONB NOT NULL,
    "belongsToId" INTEGER NOT NULL,
    "racesId" INTEGER NOT NULL,

    CONSTRAINT "UserStrategy_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Races" ADD CONSTRAINT "Races_belongsToId_fkey" FOREIGN KEY ("belongsToId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStrategy" ADD CONSTRAINT "UserStrategy_belongsToId_fkey" FOREIGN KEY ("belongsToId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStrategy" ADD CONSTRAINT "UserStrategy_racesId_fkey" FOREIGN KEY ("racesId") REFERENCES "Races"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
