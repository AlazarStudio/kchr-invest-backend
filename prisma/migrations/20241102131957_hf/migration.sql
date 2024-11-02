/*
  Warnings:

  - You are about to drop the `InvestGroup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `IvestDocument` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "IvestDocument" DROP CONSTRAINT "IvestDocument_groupId_fkey";

-- DropTable
DROP TABLE "InvestGroup";

-- DropTable
DROP TABLE "IvestDocument";

-- CreateTable
CREATE TABLE "InnvestGroup" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "InnvestGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvestDocument" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "src" TEXT NOT NULL,
    "groupId" INTEGER NOT NULL,

    CONSTRAINT "InvestDocument_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InvestDocument" ADD CONSTRAINT "InvestDocument_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "InnvestGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
