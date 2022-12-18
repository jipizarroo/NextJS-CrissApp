/*
  Warnings:

  - Added the required column `name` to the `Races` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Races" ADD COLUMN     "name" TEXT NOT NULL;
