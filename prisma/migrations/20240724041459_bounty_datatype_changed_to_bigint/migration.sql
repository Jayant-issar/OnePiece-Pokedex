/*
  Warnings:

  - Made the column `bounty` on table `PirateCharacter` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "OtherCharacter" ADD COLUMN     "bounty" BIGINT NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "PirateCharacter" ALTER COLUMN "bounty" SET NOT NULL,
ALTER COLUMN "bounty" SET DEFAULT 0,
ALTER COLUMN "bounty" SET DATA TYPE BIGINT;
