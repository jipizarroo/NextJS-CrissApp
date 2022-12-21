/*
  Warnings:

  - You are about to drop the column `userId` on the `Races` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Races" DROP CONSTRAINT "Races_userId_fkey";

-- AlterTable
ALTER TABLE "Races" DROP COLUMN "userId",
ADD COLUMN     "belongsToId" INTEGER;

-- AddForeignKey
ALTER TABLE "Races" ADD CONSTRAINT "Races_belongsToId_fkey" FOREIGN KEY ("belongsToId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
