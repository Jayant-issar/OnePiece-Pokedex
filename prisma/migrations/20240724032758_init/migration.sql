-- CreateEnum
CREATE TYPE "OrgType" AS ENUM ('Pirates', 'Marines', 'Other');

-- CreateEnum
CREATE TYPE "Rank" AS ENUM ('Captain', 'ViceCaptain', 'Cook', 'Helmsman', 'Doctor', 'Navigator', 'Litrate', 'Member', 'Musician');

-- CreateTable
CREATE TABLE "Ally" (
    "id" TEXT NOT NULL,
    "pirateId1" TEXT NOT NULL,
    "pirateId2" TEXT NOT NULL,

    CONSTRAINT "Ally_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DevilFruit" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "pirateCharacterId" TEXT,
    "marineCharacterId" TEXT,
    "otherCharacterId" TEXT,

    CONSTRAINT "DevilFruit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Haki" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "Haki_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Marine" (
    "id" TEXT NOT NULL,
    "orgType" "OrgType" NOT NULL DEFAULT 'Marines',

    CONSTRAINT "Marine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarineCharacter" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rank" TEXT NOT NULL,
    "imageUrl" TEXT[],
    "bgImageUrl" TEXT[],

    CONSTRAINT "MarineCharacter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OtherCharacter" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "affiliation" TEXT NOT NULL,
    "imageUrl" TEXT[],
    "bgImageUrl" TEXT[],

    CONSTRAINT "OtherCharacter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PirateCharacter" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "nickName" TEXT,
    "bounty" INTEGER,
    "fightingStyle" TEXT NOT NULL,
    "rank" "Rank" NOT NULL,
    "crewId" TEXT,
    "imageUrl" TEXT[],
    "bgImageUrl" TEXT[],

    CONSTRAINT "PirateCharacter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PirateGroup" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "shipName" TEXT NOT NULL,
    "orgType" "OrgType" NOT NULL DEFAULT 'Pirates',
    "imageUrl" TEXT[],
    "bgImageUrl" TEXT[],

    CONSTRAINT "PirateGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpecialAttack" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "pirateCharacterId" TEXT,
    "marineCharacterId" TEXT,
    "otherCharacterId" TEXT,
    "imageUrl" TEXT[],

    CONSTRAINT "SpecialAttack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Weapon" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pirateCharacterId" TEXT,
    "marineCharacterId" TEXT,
    "otherCharacterId" TEXT,
    "imageUrl" TEXT[],

    CONSTRAINT "Weapon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_HakiToPirateCharacter" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_HakiToMarineCharacter" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_HakiToOtherCharacter" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Ally_pirateId1_pirateId2_key" ON "Ally"("pirateId1", "pirateId2");

-- CreateIndex
CREATE UNIQUE INDEX "_HakiToPirateCharacter_AB_unique" ON "_HakiToPirateCharacter"("A", "B");

-- CreateIndex
CREATE INDEX "_HakiToPirateCharacter_B_index" ON "_HakiToPirateCharacter"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_HakiToMarineCharacter_AB_unique" ON "_HakiToMarineCharacter"("A", "B");

-- CreateIndex
CREATE INDEX "_HakiToMarineCharacter_B_index" ON "_HakiToMarineCharacter"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_HakiToOtherCharacter_AB_unique" ON "_HakiToOtherCharacter"("A", "B");

-- CreateIndex
CREATE INDEX "_HakiToOtherCharacter_B_index" ON "_HakiToOtherCharacter"("B");

-- AddForeignKey
ALTER TABLE "Ally" ADD CONSTRAINT "Ally_pirateId1_fkey" FOREIGN KEY ("pirateId1") REFERENCES "PirateGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ally" ADD CONSTRAINT "Ally_pirateId2_fkey" FOREIGN KEY ("pirateId2") REFERENCES "PirateGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DevilFruit" ADD CONSTRAINT "DevilFruit_pirateCharacterId_fkey" FOREIGN KEY ("pirateCharacterId") REFERENCES "PirateCharacter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DevilFruit" ADD CONSTRAINT "DevilFruit_marineCharacterId_fkey" FOREIGN KEY ("marineCharacterId") REFERENCES "MarineCharacter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DevilFruit" ADD CONSTRAINT "DevilFruit_otherCharacterId_fkey" FOREIGN KEY ("otherCharacterId") REFERENCES "OtherCharacter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PirateCharacter" ADD CONSTRAINT "PirateCharacter_crewId_fkey" FOREIGN KEY ("crewId") REFERENCES "PirateGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpecialAttack" ADD CONSTRAINT "SpecialAttack_pirateCharacterId_fkey" FOREIGN KEY ("pirateCharacterId") REFERENCES "PirateCharacter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpecialAttack" ADD CONSTRAINT "SpecialAttack_marineCharacterId_fkey" FOREIGN KEY ("marineCharacterId") REFERENCES "MarineCharacter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpecialAttack" ADD CONSTRAINT "SpecialAttack_otherCharacterId_fkey" FOREIGN KEY ("otherCharacterId") REFERENCES "OtherCharacter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Weapon" ADD CONSTRAINT "Weapon_pirateCharacterId_fkey" FOREIGN KEY ("pirateCharacterId") REFERENCES "PirateCharacter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Weapon" ADD CONSTRAINT "Weapon_marineCharacterId_fkey" FOREIGN KEY ("marineCharacterId") REFERENCES "MarineCharacter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Weapon" ADD CONSTRAINT "Weapon_otherCharacterId_fkey" FOREIGN KEY ("otherCharacterId") REFERENCES "OtherCharacter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HakiToPirateCharacter" ADD CONSTRAINT "_HakiToPirateCharacter_A_fkey" FOREIGN KEY ("A") REFERENCES "Haki"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HakiToPirateCharacter" ADD CONSTRAINT "_HakiToPirateCharacter_B_fkey" FOREIGN KEY ("B") REFERENCES "PirateCharacter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HakiToMarineCharacter" ADD CONSTRAINT "_HakiToMarineCharacter_A_fkey" FOREIGN KEY ("A") REFERENCES "Haki"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HakiToMarineCharacter" ADD CONSTRAINT "_HakiToMarineCharacter_B_fkey" FOREIGN KEY ("B") REFERENCES "MarineCharacter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HakiToOtherCharacter" ADD CONSTRAINT "_HakiToOtherCharacter_A_fkey" FOREIGN KEY ("A") REFERENCES "Haki"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HakiToOtherCharacter" ADD CONSTRAINT "_HakiToOtherCharacter_B_fkey" FOREIGN KEY ("B") REFERENCES "OtherCharacter"("id") ON DELETE CASCADE ON UPDATE CASCADE;
